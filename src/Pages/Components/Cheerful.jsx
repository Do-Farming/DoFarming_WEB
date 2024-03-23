import React, { useState } from 'react';
import Modal from './Modal';
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
      margin-left:0;
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

export const Cheerful = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState('');

  const handleAddClick = (routine) => {
    setSelectedRoutine(routine);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedRoutine('');
    setShowModal(false);
  };

  return (
    <MainBox>
      <MTxt1>활기찬 아침</MTxt1>
      <MTxt2>
      웃음으로 시작해 웃음으로 끝내면 그 하루는 <br />
      어느 때보다 행복할거에요.
      </MTxt2>
      <Selectbox>
        <Txtbox>비타민 섭취</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick('Taking vitamins')}>추가</SelectboxBtn>
      </Selectbox>
      <Selectbox>
        <Txtbox>햇빛 보기</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick('Getting sunlight')}>추가</SelectboxBtn>
      </Selectbox>
      <Selectbox>
        <Txtbox>스트레칭 하기</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick('Stretching')}>추가</SelectboxBtn>
      </Selectbox>
      <Selectbox>
        <Txtbox>오늘 할 일 체크하기</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick('Check to do')}>추가</SelectboxBtn>
      </Selectbox>
      <Selectbox>
        <Txtbox>밖으로 나가기</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick('Go outside')}>추가</SelectboxBtn>
      </Selectbox>
      {showModal && <Modal selectedRoutine={selectedRoutine} onClose={handleCloseModal} />}
    </MainBox>
  );
};

export default Cheerful;
