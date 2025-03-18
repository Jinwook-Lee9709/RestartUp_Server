import db from '../config/db.mjs';

const GET_USER_BY_UID_QUERY = "SELECT * FROM users WHERE uid = ?";


export const User = {
    getUser: async (uid) => {
        try {
            const [rows] = await db.query(GET_USER_BY_UID_QUERY, [uid]);
            return rows.length > 0 ? rows[0] : null;
        } catch (error) {
            console.log('DB Error: ', error);
            throw new Error(error);
        }

        return result;
    }
}
