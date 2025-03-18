import https from "https";
import fs from "fs";
import app from "../src/app.mjs";


// 서버가 사용할 포트 설정
const PORT = process.env.PORT || 3000;

const options = {
    key: fs.readFileSync("./selfsigned.key"), // 로컬 비밀키 파일
    cert: fs.readFileSync("./selfsigned.crt"), // 로컬 인증서 파일
};

//
// // 서버 실행
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


https.createServer(options, app).listen(PORT, () => {
    console.log(`HTTPS server is running on port ${PORT}`);
});
