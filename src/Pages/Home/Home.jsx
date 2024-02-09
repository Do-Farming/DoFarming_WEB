import React, { useState, useEffect } from "react";
import PackagePrint from "./HomeComponents/PackagePrint.jsx";
import PackagePrint2 from "./HomeComponents/PackagePrint2.jsx";
import PackageCheck from "./HomeComponents/PackageCheck.jsx";
import NavBar from "../Nav/Nav";
import Moodlets from "./HomeComponents/Moodlets.jsx";

const Home = () => {
  const [routineData, setRoutineData] = useState(null);

  useEffect(() => {
    // 서버에서 루틴값을 받아오는 비동기 함수 호출
    fetchRoutineData()
      .then((data) => {
        setRoutineData(data);
      })
      .catch((error) => {
        console.error("루틴 데이터를 가져오는 중 오류가 발생했습니다:", error);
      });
  }, []);

  const fetchRoutineData = async () => {
    // 서버에서 루틴 데이터를 가져오는 비동기 함수 호출
    const response = await fetch("루틴 데이터를 가져오는 API 엔드포인트 URL");
    const data = await response.json();
    return data;
  };

  return (
    <div>
      <NavBar />
      <Moodlets />
      <PackageCheck />
      {routineData ? <PackagePrint2 data={routineData} /> : <PackagePrint />}
    </div>
  );
};

export default Home;
