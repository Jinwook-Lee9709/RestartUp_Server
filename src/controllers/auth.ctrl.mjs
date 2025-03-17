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

export default { jwtAuth }