import React, { useState } from "react";
import MakePackage from "./MakePackage";
import "../../Style/Home/Home.css";
import "../../Style/Home/HomeModal.css";
import NavBar from "../Nav/Nav.jsx";
import { FaCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packages, setPackages] = useState([]);
  const [selectedDiv, setSelectedDiv] = useState("");
  const navigate = useNavigate();

  const LinktoHome9 = () => {
    navigate("/Home9");
  };

  const handleAddPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
  };

  const handleDeletePackage = (index) => {
    const updatedPackages = [...packages];
    updatedPackages.splice(index, 1);
    setPackages(updatedPackages);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDivClick = (divNumber) => {
    setSelectedDiv(divNumber);

    const selectedDivImage = getComputedStyle(
      document.querySelector(`.${divNumber}`)
    ).backgroundImage;
    document.querySelector(".Moodlets").style.backgroundImage =
      selectedDivImage;
  };

  return (
    <div className="HomeWrap">
      <NavBar />
      <div className="Content1">
        <div className="home_textbox">
          <p>닉네임값님 반가워요</p>
          <p>오늘도 활기차게 하루를 시작해봐요!</p>
        </div>
        <div
          className="Moodlets"
          style={{ backgroundImage: `url("${selectedDiv}")` }}
          onClick={openModal}
        ></div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div
              className="div1"
              onClick={() => handleDivClick("div1")}
              style={{ backgroundImage: 'url("/emotion1.png")' }}
            ></div>
            <div
              className="div2"
              onClick={() => handleDivClick("div2")}
              style={{ backgroundImage: 'url("/emotion2.png")' }}
            ></div>
            <div
              className="div3"
              onClick={() => handleDivClick("div3")}
              style={{ backgroundImage: 'url("/emotion3.png")' }}
            ></div>
            <div
              className="div4"
              onClick={() => handleDivClick("div4")}
              style={{ backgroundImage: 'url("/emotion4.png")' }}
            ></div>
            <div
              className="div5"
              onClick={() => handleDivClick("div5")}
              style={{ backgroundImage: 'url("/emotion5.png")' }}
            ></div>
            <div
              className="div6"
              onClick={() => handleDivClick("div6")}
              style={{ backgroundImage: 'url("/emotion6.png")' }}
            ></div>
            <div
              className="div7"
              onClick={() => handleDivClick("div7")}
              style={{ backgroundImage: 'url("/emotion7.png")' }}
            ></div>
            <div
              className="div8"
              onClick={() => handleDivClick("div8")}
              style={{ backgroundImage: 'url("/emotion8.png")' }}
            ></div>
            <div
              className="div9"
              onClick={() => handleDivClick("div9")}
              style={{ backgroundImage: 'url("/emotion9.png")' }}
            ></div>

            <p className="close-modal-button" onClick={closeModal}>
              x
            </p>
          </div>
        </div>
      )}

      <MakePackage handleAddPackage={handleAddPackage} />

      {packages.length > 0 ? (
        packages.map((pkg, index) => (
          <div key={index}>
            <strong>패키지 이름 </strong> {pkg.name}
            <br />
            <strong>패키지 상태 </strong> {pkg.status}
            <button onClick={() => handleDeletePackage(index)} className="HomeBtn">삭제</button> 
            <hr />
          </div>
        ))
      ) : null}

      <FaCirclePlus className="ToHome9" onClick={LinktoHome9}/>
    </div>
  );
};

export default Home;
