import React, { useState } from "react";
import "../../../Style/Home/Home.css";
import "../../../Style/Home/HomeModal.css";

const HomeHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDiv, setSelectedDiv] = useState("");

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
      closeModal();
  };

  return (
    <div className="HomeHeaderWrap">
      <div className="HomeHeaderContent">
        <div className="home_textbox">
          <div id="hello_user">닉네임님 반가워요</div>
          <div id="fighting">오늘도 활기차게 하루를 <br /> 시작해봐요!</div>
        </div>
        <div className="MoodWrap">
          <div
            className="Moodlets"
            style={{ backgroundImage: `url("${selectedDiv}")` }}
            onClick={openModal}
          ></div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="close-modal-button" onClick={closeModal}>
              x
            </div>
            <div className="Headertxt">
            <div className="hiuser"><strong>닉네임</strong> 님 !</div><br />
            <div className="tellme">오늘의 감정 온도를 알려주세요 :)</div>
            </div>
            <div className="HimgWrap">
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
            <br />
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
            <br />
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
            </div>

            
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeHeader;
