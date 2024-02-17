import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import axios from "axios";

const HomeWrap = styled.div``;

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

  @media all and (min-width:768px) and (max-width:3000px) {
    width: 90%;
    height: 80%;
  }
`;

const CloseModalButton = styled.p`
  height: 5%;
  margin-left: auto;
  margin-top: 15px;
  font-size: 25px;
  color: #BFBABA;
  cursor: pointer;
`;

const Div = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 30%;
  margin: 15px 15px;
`;

const HomeHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDiv, setSelectedDiv] = useState("");
  const [nickname, setNickname] = useState("");

  const token = localStorage.getItem("authToken");

  const updateMood = async (mood) => {
    try {
      const response = await axios.patch(
        "https://dofarming.duckdns.org/api/v1/user/mood",
        { mood: mood },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Mood updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating mood:", error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get("https://dofarming.duckdns.org/api/v1/user", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const { nickname } = response.data;
      return nickname;
    } catch (error) {
      console.error("Error fetching user info:", error);
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

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    const selectedDivImage = getComputedStyle(document.querySelector(`.${selectedDiv}`)).backgroundImage;
    document.querySelector(".Moodlets").style.backgroundImage = selectedDivImage;
    updateMood(selectedDiv);
  };

  const handleDivClick = (divNumber, mood) => {
    setSelectedDiv(mood);
    const selectedDivImage = getComputedStyle(document.querySelector(`.${divNumber}`)).backgroundImage;
    document.querySelector(".Moodlets").style.backgroundImage = selectedDivImage;
    updateMood(mood);
  };

  return (
    <HomeWrap>
      <HomeHeaderContent>
        <HomeTextBox>
          <HelloUser>{nickname}님 반가워요</HelloUser>
          <Fighting>오늘도 활기차게 하루를 시작해봐요!</Fighting>
        </HomeTextBox>
        <Moodlets
          className="Moodlets"
          style={{ backgroundImage: `url("${selectedDiv}")` }}
          onClick={openModal}
        ></Moodlets>
      </HomeHeaderContent>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Div
                key={`div${num}`}
                className={`div${num}`}
                onClick={() => handleDivClick(`div${num}`, "Mood")}
                style={{ backgroundImage: `url("/emotion${num}.png")` }}
              ></Div>
            ))}
            <CloseModalButton onClick={closeModal}>x</CloseModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </HomeWrap>
  );
};

export default HomeHeader;
