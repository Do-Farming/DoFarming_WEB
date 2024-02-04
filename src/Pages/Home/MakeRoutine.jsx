import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Home/Home.css";
import "../../Pages/Nav/Nav.jsx";
import NavBar from "../../Pages/Nav/Nav.jsx";

const MakeRoutine = ({ packageName }) => {

  return (
    <div className="HomeWrap">
      <NavBar/>
      
      <p>{packageName}</p>
      <p>아직 트랙이 없습니다</p> 
      <Link to="/Routine">
        <p id="goRoutine">루틴을 만들러 이동해 볼까요?</p>
      </Link>
    </div>
  );
};

export default MakeRoutine;
