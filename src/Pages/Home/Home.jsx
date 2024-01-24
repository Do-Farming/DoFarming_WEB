import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import "../../Styles/Home/Home.css";
import "../../Styles/Home/MakeRoutine.css";
import "../../Styles/Home/HomeModal.css";
import { Link } from "react-router-dom";
import NavBar from "../Nav/Nav.jsx";

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

    const selectedDivImage = getComputedStyle(document.querySelector(`.${divNumber}`)).backgroundImage;
    document.querySelector('.Moodlets').style.backgroundImage = selectedDivImage;
  };

  return (
    <div className="HomeWrap">
         <NavBar />
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
          <div className="div1" onClick={() => handleDivClick("div1")} style={{ backgroundImage: 'url("/emotion1.png")' }}></div>
<div className="div2" onClick={() => handleDivClick("div2")} style={{ backgroundImage: 'url("/emotion2.png")' }}></div>
<div className="div3" onClick={() => handleDivClick("div3")} style={{ backgroundImage: 'url("/emotion3.png")' }}></div>
<div className="div4" onClick={() => handleDivClick("div4")} style={{ backgroundImage: 'url("/emotion4.png")' }}></div>
<div className="div5" onClick={() => handleDivClick("div5")} style={{ backgroundImage: 'url("/emotion5.png")' }}></div>
<div className="div6" onClick={() => handleDivClick("div6")} style={{ backgroundImage: 'url("/emotion6.png")' }}></div>
<div className="div7" onClick={() => handleDivClick("div7")} style={{ backgroundImage: 'url("/emotion7.png")' }}></div>
<div className="div8" onClick={() => handleDivClick("div8")} style={{ backgroundImage: 'url("/emotion8.png")' }}></div>
<div className="div9" onClick={() => handleDivClick("div9")} style={{ backgroundImage: 'url("/emotion9.png")' }}></div>
            
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
