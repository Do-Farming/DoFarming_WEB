// (POST) dofarming.duckdns.org/api/v1/track (기분변경)
//PATCH dofarming.duckdns/api/v1/user/mood HTTP/1.1 (기분저장)
// GET /api/v1/user HTTP/1.1 (사용자 정보조회 )

import React from "react";
import HomeSection2 from "./HomeComponents/HomeSection2.jsx";
import NavBar from "../Nav/Nav";
import HomeHeader from "./HomeComponents/HomeHeader.jsx";

const Home = () => {

  //토큰 가져오기
  const token = localStorage.getItem('authToken');
  if (!token) {
    // 토큰이 없다면 로그인 페이지를 보여줍니다.
    return <Login2 />;
  }


  return (
    <div>
      <div className="HomeWrap">
        <NavBar />
        <HomeHeader/>
        <HomeSection2 />
      </div>
    </div>
  );
};

export default Home;
