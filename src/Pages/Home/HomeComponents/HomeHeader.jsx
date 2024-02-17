import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import axios from "axios";

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
  width: 100%;
  height: 90%;
`;

const ImgWrap = styled.div`
  height: 30%;
  display: flex;
`;

const Div = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 30%;
  margin: 0 15px;
`;

const HomeHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDiv, setSelectedDiv] = useState("");
  const [nickname, setNickname] = useState("");
  const [moods, setMoods] = useState([]);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await axios.get("https://dofarming.duckdns.org/api/v1/moods");
        setMoods(response.data);
      } catch (error) {
        console.error("Error fetching moods:", error);
      }
    };
    fetchMoods();
  }, []);

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
    if (selectedDiv) { // Check if selectedDiv is not empty
      const selectedDivImage = getComputedStyle(document.querySelector(`.${selectedDiv}`)).backgroundImage;
      document.querySelector(".Moodlets").style.backgroundImage = selectedDivImage;
      updateMood(selectedDiv);
    }
  };

  const updateMood = async (mood) => {
    try {
      if (!mood) { // Mood 값이 없는 경우에 대한 처리
        console.error("Mood is undefined");
        return;
      }
  
      // 서버에서 반환한 Mood 값이 유효한지 확인
      const isValidMood = moods.includes(mood);
      if (!isValidMood) {
        console.error("Invalid mood:", mood);
        return;
      }
  
      // 서버로 보낼 데이터의 형식을 수정하여 Mood 열거형에 정의된 값으로 변경
      const response = await axios.patch(
        "https://dofarming.duckdns.org/api/v1/user/mood",
        { mood: mood }, // 이 부분을 수정해야 함
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Mood updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating mood:", error);
    }
  };
  
  
  const handleDivClick = (divNumber, mood) => {
    setSelectedDiv(mood);
    const selectedDivImage = getComputedStyle(document.querySelector(`.${divNumber}`)).backgroundImage;
    document.querySelector(".Moodlets").style.backgroundImage = selectedDivImage;
    updateMood(mood);
  };

  return (
    <HomeHeaderWrap>
      <HomeHeaderContent>
        <HomeTextBox>
          <HelloUser>Hello, {nickname}</HelloUser>
          <Fighting>Let's enjoy the cheerful day!</Fighting>
        </HomeTextBox>
        <MoodWrap>
          <Moodlets
            className="Moodlets"
            style={{ backgroundImage: `url("${selectedDiv}")` }}
            onClick={openModal}
          ></Moodlets>
        </MoodWrap>
      </HomeHeaderContent>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Div
                key={`div${num}`}
                className={`div${num}`}
                onClick={() => handleDivClick(`div${num}`, moods[num - 1].name)}
                style={{ backgroundImage: `url("/emotion${num}.png")` }}
              ></Div>
            ))}
            <CloseModalButton onClick={closeModal}>x</CloseModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </HomeHeaderWrap>
  );
};

export default TodoHeader;