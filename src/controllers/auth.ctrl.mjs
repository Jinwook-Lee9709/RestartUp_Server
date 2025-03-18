import jwtUtils from '../utils/jwt.utils.mjs';

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
        const { code } = req.query;
        console.log(`code: ${code}`)
        let resp = null;
        try
        {
            const resp = await axios.post(process.env.GOOGLE_TOKEN_URL, {
                code,
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: process.env.GOOGLE_REDIRECT_URI,
                grant_type: 'authorization_code'
            });
        }catch (err)
        {
            console.log(`google Auth Request Failed with : ${err}`);
        }

        res.sendStatus(200);
    }
}

export default { jwtAuth, login }