import express from "express";
import routes from "./routes/index.mjs"
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const app = express();


app.use(express.json());
//Routing
app.use(routes);




app.get('/', (req, res) => {
    res.send(`
        <h1>Log in</h1>
        <a href="/login">Log in</a>
    `);
});

app.get('/login', (req, res) => {
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';

    url += `?client_id=${process.env.GOOGLE_CLIENT_ID}`
    url += `&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}`
    url += '&response_type=code'
    url += '&scope=email profile'
    res.redirect(url);
});

app.get('/login/redirect', async (req, res) => {
    const { code } = req.query;
    console.log(`code: ${code}`);

    const resp = await axios.post('https://oauth2.googleapis.com/token', {
        code: code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        grant_type: 'authorization_code',
    })

    const resp2 = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers:{
            Authorization: `Bearer ${resp.data.access_token}`,
        }
    })

    res.json(resp2.data);
});


export default app;

