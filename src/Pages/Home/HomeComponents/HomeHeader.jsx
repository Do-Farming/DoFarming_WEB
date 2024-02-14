import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';

const HomeHeaderWrap = styled.div``;

const HomeHeaderContent = styled.div`
  height: 18vh;
  display: flex;
  width: 100%;
  align-items: center;

  @media all and (min-width:768px) and (max-width:3000px) {
    height: 18vh;
    display: flex;
    width: 40vw;
    margin-left: 30vw;
    align-items: center;
  }
`;

const HomeTextBox = styled.div`
  width: 50%;
  padding-left: 5.5vw;

  @media all and (min-width:768px) and (max-width:3000px) {
    padding: 0;
    margin-top: 1vh;
  }
`;

const HelloUser = styled.div`
  font-size: 23px;
  padding-bottom: 7px;
`;

const Fighting = styled.div`
  font-size: 15px;
  line-height: 21px;
  font-weight: 340;
`;

const MoodWrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media all and (min-width:768px) and (max-width:3000px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const Moodlets = styled.div`
  box-shadow: 0 0 13px rgb(0, 0, 0, 0.25);
  width: 122px;
  height: 118px;
  border-radius: 16px;
  cursor: pointer;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

// 모달 스타일
const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 75%;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  animation: ${slideUp} 0.4s ease-out;

  @media all and (min-width:768px) and (max-width:3000px) {
    width: 90%;
    height: 80%;
  }
`;

const CloseModalButton = styled.div`
  height: 5%;
  margin-left: 85vw;
  margin-top: 15px;
  font-size: 25px;
  color: #BFBABA;
`;

const HeaderTxt = styled.div`
  height: 10%;
`;

const HimgWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  width: 90%;
  height: 90%;
  // border: 1px solid red;
`;

const ImgWrap = styled.div`
  height: 30%;
  display: flex;
  // margin-left:20%;
  // border: 1px solid green;
`;

const Div = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  // height: 100%;
  width: 30%;
  margin: 15px 15px;
  // border:1px solid black;
`;

const HomeHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDiv, setSelectedDiv] = useState("");
  const [selectedDivImage, setSelectedDivImage] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDivClick = (divNumber) => {
    // setSelectedDiv(divNumber);

    // const newSelectedDivImage = getComputedStyle(
    //   document.querySelector(`.${divNumber}`)
    // ).backgroundImage;
    // setSelectedDivImage(newSelectedDivImage);
    closeModal();
  };

  return (
    <HomeHeaderWrap>
      <HomeHeaderContent>
        <HomeTextBox>
          <HelloUser id="hello_user">닉네임님 반가워요</HelloUser>
          <Fighting id="fighting">
            오늘도 활기차게 하루를 <br /> 시작해봐요!
          </Fighting>
        </HomeTextBox>
        <MoodWrap>
          <Moodlets
            style={{ backgroundImage: selectedDivImage }}
            onClick={openModal}
          ></Moodlets>
        </MoodWrap>
      </HomeHeaderContent>
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseModalButton onClick={closeModal}>x</CloseModalButton>
            <HeaderTxt>
              <div className="hiuser">
                <strong>닉네임</strong> 님 !
              </div>
              <br />
              <div className="tellme">오늘의 감정 온도를 알려주세요 :)</div>
            </HeaderTxt>
            <HimgWrap>
              <ImgWrap>
                <Div
                  onClick={() => handleDivClick("div1")}
                  style={{ backgroundImage: 'url("/emotion1.PNG")'}}
                ></Div>
                <Div
                  onClick={() => handleDivClick("div2")}
                  style={{ backgroundImage: 'url("/emotion2.PNG")' }}
                ></Div>
                <Div
                  onClick={() => handleDivClick("div3")}
                  style={{ backgroundImage: 'url("/emotion3.PNG")' }}
                ></Div>
              </ImgWrap>
              <ImgWrap>
                <Div
                  onClick={() => handleDivClick("div4")}
                  style={{ backgroundImage: 'url("/emotion4.PNG")' }}
                ></Div>
                <Div
                  onClick={() => handleDivClick("div5")}
                  style={{ backgroundImage: 'url("/emotion5.PNG")' }}
                ></Div>
                <Div
                  onClick={() => handleDivClick("div6")}
                  style={{ backgroundImage: 'url("/emotion6.PNG")' }}
                ></Div>
              </ImgWrap>
              <ImgWrap>
                <Div
                  onClick={() => handleDivClick("div7")}
                  style={{ backgroundImage: 'url("/emotion7.PNG")' }}
                ></Div>
                <Div
                  onClick={() => handleDivClick("div8")}
                  style={{ backgroundImage: 'url("/emotion8.PNG")' }}
                ></Div>
                <Div
                  onClick={() => handleDivClick("div9")}
                  style={{ backgroundImage: 'url("/emotion9.PNG")' }}
                ></Div>
              </ImgWrap>
            </HimgWrap>
          </ModalContent>
        </ModalOverlay>
      )}
    </HomeHeaderWrap>
  );
};

export default HomeHeader;
