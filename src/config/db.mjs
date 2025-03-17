import mysql from "mysql2"

let dbInstance = null;

const createDbConnection = () => {
    if (!dbInstance) {
        dbInstance = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        dbInstance.connect((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Connected to database");
                }
        });
    }
}

export const db =  createDbConnection();
