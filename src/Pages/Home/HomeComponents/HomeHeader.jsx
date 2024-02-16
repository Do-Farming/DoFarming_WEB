import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const HomeHeaderWrap = styled.div``;

const HomeHeaderContent = styled.div`
  height: 18vh;
  display: flex;
  width: 100%;
  align-items: center;

  @media all and (min-width: 768px) and (max-width: 3000px) {
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

  @media all and (min-width: 768px) and (max-width: 3000px) {
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

  @media all and (min-width: 768px) and (max-width: 3000px) {
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

  @media all and (min-width: 768px) and (max-width: 3000px) {
    width: 90%;
    height: 80%;
  }
`;

const CloseModalButton = styled.div`
  height: 5%;
  margin-left: 85vw;
  margin-top: 15px;
  font-size: 25px;
  color: #bfbaba;
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
  const [selectedDiv, setSelectedDiv] = useState('');
  const [nickname, setNickname] = useState('');

  const token = localStorage.getItem('authToken');

  const updateMood = async (mood) => {
    try {
      const response = await axios.patch(
        'https://dofarming.duckdns.org/api/v1/user/mood',
        { mood },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Mood updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating mood:', error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get('https://dofarming.duckdns.org/api/v1/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { nickname } = response.data;
      return nickname;
    } catch (error) {
      console.error('Error fetching user info:', error);
      return null;
    }
  };

  useEffect(() => {
    const getNickname = async () => {
      const nickname = await fetchUserInfo();
      if (nickname) {
        setNickname(nickname);
      }
    };
    getNickname();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);

    const selectedDivImage = getComputedStyle(document.querySelector(`.${selectedDiv}`)).backgroundImage;
    document.querySelector('.Moodlets').style.backgroundImage = selectedDivImage;

    updateMood(selectedDiv);
  };

  const handleDivClick = (divNumber, mood) => {
    setSelectedDiv(mood);

    const selectedDivImage = getComputedStyle(document.querySelector(`.${divNumber}`)).backgroundImage;
    document.querySelector('.Moodlets').style.backgroundImage = selectedDivImage;

    updateMood(mood);
  };

  return (
    <HomeHeaderWrap>
      <HomeHeaderContent>
        <HomeTextBox>
          <HelloUser>{nickname}님 반가워요</HelloUser>
          <Fighting>오늘도 활기차게 하루를 시작해봐요!</Fighting>
        </HomeTextBox>
        <MoodWrap>
          <Moodlets
            style={{ backgroundImage: `url("${selectedDiv}")` }}
            onClick={openModal}
          />
        </MoodWrap>
      </HomeHeaderContent>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <div className="div1" onClick={() => handleDivClick('div1', 'HAPPY')} style={{ backgroundImage: 'url("/emotion1.png")' }} />
            <div className="div2" onClick={() => handleDivClick('div2', 'ANGRY')} style={{ backgroundImage: 'url("/emotion2.png")' }} />
            <div className="div3" onClick={() => handleDivClick('div3', 'NERVOUS')} style={{ backgroundImage: 'url("/emotion3.png")' }} />
            <div className="div4" onClick={() => handleDivClick('div4', 'SAD')} style={{ backgroundImage: 'url("/emotion4.png")' }} />
            <div className="div5" onClick={() => handleDivClick('div5', 'EXCITED')} style={{ backgroundImage: 'url("/emotion5.png")' }} />
            <div className="div6" onClick={() => handleDivClick('div6', 'PROUD')} style={{ backgroundImage: 'url("/emotion6.png")' }} />
            <div className="div7" onClick={() => handleDivClick('div7', 'CALM')} style={{ backgroundImage: 'url("/emotion7.png")' }} />
            <div className="div8" onClick={() => handleDivClick('div8', 'DROWSY')} style={{ backgroundImage: 'url("/emotion8.png")' }} />
            <div className="div9" onClick={() => handleDivClick('div9', 'TIRED')} style={{ backgroundImage: 'url("/emotion9.png")' }} />
            <CloseModalButton onClick={closeModal}>x</CloseModalButton>

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
