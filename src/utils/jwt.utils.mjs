import jwt from 'jsonwebtoken';

export const jwtUtils = {
    sign: (uid) =>{
        console.log('ACCESS_TOKEN_SECRET:', process.env.ACCESS_TOKEN_SECRET);

        const payload = {
            uid: uid
        };
        return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1h',
            algorithm: 'HS256'
        });
    },
    verify: (token) => {
        let decoded = null;
        try{

            decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, {
                algorithm: 'HS256'
            });
            return {
                type: true,
                uid: decoded.uid,
            }
        } catch(err){
            return {
                type: false,
                message : err.message
            }
        }
    },
    refresh: () => {
        return jwt.sign({}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '14d',
            algorithm: 'HS256'
        })
    },
    refreshVerify: (token) => {
        let decoded = null;
        try{
            decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, {
                algorithm: 'HS256'
            });
            return {
                type: true,
            }
        } catch(err){
            return {
                type: false,
                message : err.message
            }
        }
    }
}

export default jwtUtils;