import React, { useState } from "react";
import Modal from "./Modal";
import styled from 'styled-components';

const MainBox = styled.div`
    border: 0.2px solid rgb(131, 131, 131);
    border-radius: 20px;
    height: auto;
    text-align: left;
    margin-bottom: 3vh;
    padding-top: 3.5vh;
    display: inline-block;
    width: 48vw;
    padding-left: 2vw;
    margin-left: 25vw;

    @media all and (max-width:1023px) {
      width: 85vw;
      align-items: center;
      padding-left: 5vw;
      margin-bottom: 4vh;
      padding-top: 3vh;
      margin-left:-1vw;
    }
`;

const MTxt1 = styled.div`
    font-size: 1.5rem;
`;

const MTxt2 = styled.div`
    font-size: 0.8rem;
    color: #5B5B5B;
    padding-bottom: 4vh;
    padding-top: 2px;
    @media all and (min-width:1024px) {
      padding-top: 3px;
    }
`;

const Selectbox = styled.div`
    border-radius: 13px;
    background-color: #F7F7F7;
    height: 7vh;
    margin-bottom: 2vh;
    width: 80vw;
    display: flex;
    @media all and (min-width:1024px) {
      width: 45vw;
    }
`;

const Txtbox = styled.div`
    font-size: 20px;
    width: 90%;
    height: 3.8vh;
    margin-left: 20px;
    margin-top: 2.2vh;
    @media all and (min-width:1024px) {
      margin-top: 2vh;
      width: 38vw;
    }
`;

const SelectboxBtn = styled.button`
    color: #595656;
    background-color: #D9D9D9;
    border: none;
    height: 3.8vh;
    border-radius: 20px;
    margin-top: 1.6vh;
    width: 50px;
    cursor: pointer;
    @media all and (max-width:1023px) {
      margin-right: 2vw;
    }
    
`;


export const Rest = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState('');

  const handleAddClick = (routine) => {
    setSelectedRoutine(routine);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRoutine(''); // Reset selectedRoutine when closing modal
  };

  return (
    <MainBox>
      <MTxt1>일과 후 휴식</MTxt1>
      <MTxt2>
      당신에게 주어진 보상입니다.<br />
      오늘 하루 수고를 풀고 내일을 위한 에너지를 충전 해 보는 건<br />어떨까요? 
      </MTxt2>
      <Selectbox>
        <Txtbox>전화 알림 끄기</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick('Turn off phone notifications')}>추가</SelectboxBtn>
      </Selectbox>
      <Selectbox>
        <Txtbox>캔들 켜기</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick("Turn on Candle")}>추가</SelectboxBtn>
      </Selectbox>
      <Selectbox>
        <Txtbox>심호흡 하기</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick("Taking a deep breath")}>추가</SelectboxBtn>
      </Selectbox>
      <Selectbox>
        <Txtbox>음악 듣기</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick("Listening to music")}>추가</SelectboxBtn>
      </Selectbox>
      <Selectbox>
        <Txtbox>재미있는 활동 계획하기</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick("Having a hobby time")}>추가</SelectboxBtn>
      </Selectbox>
      {showModal && <Modal selectedRoutine={selectedRoutine} onClose={handleCloseModal} />}
    </MainBox>
  );
};

export default Rest;