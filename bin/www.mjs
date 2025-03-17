import app from "../src/app.mjs";

// 서버가 사용할 포트 설정
const PORT = process.env.PORT || 3000;

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
