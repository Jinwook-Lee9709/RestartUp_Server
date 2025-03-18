import jwtUtils from '../utils/jwt.utils.mjs';
import axios from 'axios';

export const jwtAuth = {
    sign: async(req, res) =>{
        const uid = req.body.uid;
        const result = jwtUtils.sign(uid);
        return res.status(200).json(result);
    },
    verify: async(req, res) =>{
        const token = req.body.token;
        const result = jwtUtils.verify(token);
        return res.status(200).json(result);
    }
}

export const login ={
    loginWithHash: async(req, res) =>{
        const uid = req.body.uid;
        const result = jwtUtils.sign(uid);
        return res.status(200).json(result);
    },
    googleAuthenticate: async(req, res) =>{
        const { AuthCode } = req.body;
        console.log('Request Body:', req.body);
        console.log(`code: ${AuthCode}`)
        let resp = null;
        try
        {
            const resp = await axios.post(process.env.GOOGLE_TOKEN_URL, {
                code: AuthCode,
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: process.env.GOOGLE_REDIRECT_URI,
                grant_type: 'authorization_code'
            });
        }catch (err)
        {
            console.log(`google Auth Request Failed with : ${err}`);
        }
        console.log(resp);
        res.sendStatus(200);
    }
}

export default { jwtAuth, login }