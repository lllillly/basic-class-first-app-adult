// node_modules에 있는 express 가져오기
const express = require("express");

// () : 실행
const server = express();

// 상수 : 변할 경우가 없는 변수 => 대문자로 표기
const PORT = 4000;

// server.listen(포트, 콜백함수)
server.listen(PORT, () => {
  console.log(PORT + " SERVER START 🍀 !");
});

// 기능1 ( ( ) => { } ) : 기능 1 실행 후 콜백함수 실행

// 현재 우리 서버 주소 => localhost:4000/ (= 127.0.0.1:4000)

server.get("/", (req, res) => {
  res.send("Welcome To My First App!! 🌟");
});
