// Home.jsx

import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import { FiAlignJustify } from "react-icons/fi";
import "../../Styles/Home/Home.css";
import "../../Styles/Home/MakeRoutine.css";
import "../../Styles/Home/HomeModal.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDiv, setSelectedDiv] = useState(null);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const MoodletsClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDiv(null);
  };

  const handleDivClick = (divNumber) => {
    setSelectedDiv(divNumber);

    const selectedDivColor = getComputedStyle(document.querySelector(`.${divNumber}`)).backgroundColor;
    document.querySelector('.Moodlets').style.backgroundColor = selectedDivColor;
  };

  return (
    <div className="HomeWrap">
      <div className="Nav">
        <AiOutlineUser />
        <FiAlignJustify onClick={toggleNav} />
        {isNavVisible && (
          <ul className="nav-menu">
            <li>홈</li>
            <li>루틴</li>
            <li>전문가와의 상담</li>
            <li>고민 노크</li>
          </ul>
        )}
      </div>

      <div className="Content1">
        <div className="home_textbox">
          <p>님 반가워요 </p>
          <p>오늘도 활기차게 하루를<br></br> 시작해봐요!</p>
        </div>
        <div className="Moodlets" onClick={MoodletsClick}></div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="div1" onClick={() => handleDivClick("div1")}></div>
            <div className="div2" onClick={() => handleDivClick("div2")}></div>
            <div className="div3" onClick={() => handleDivClick("div3")}></div>
            <div className="div4" onClick={() => handleDivClick("div4")}></div>
            <div className="div5" onClick={() => handleDivClick("div5")}></div>
            <div className="div6" onClick={() => handleDivClick("div6")}></div>
            <div className="div7" onClick={() => handleDivClick("div7")}></div>
            <div className="div8" onClick={() => handleDivClick("div8")}></div>
            <div className="div9" onClick={() => handleDivClick("div9")}></div>
            
            <p className="close-modal-button" onClick={closeModal}>x</p>
          </div>
        </div>
      )}

      {!isModalOpen && (
        <div className="RootineArr">
          <p className="">아직 루틴이 없습니다. 루틴을 만들어주세요</p>
          <Link to="/MakeRoutine">
            <button>
              <CgAdd />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
