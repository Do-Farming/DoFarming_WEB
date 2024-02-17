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

const SelectAll = styled.button`
  border: none;
  background-color: white;
  color: rgb(167, 167, 167);
  margin-top: 8vh;
  margin-bottom: 2vh;
  height: 5vh;
  font-size: 1.2rem;
  text-align: center;
  @media all and (max-width:1023px) {
    width: 20vh;
    position: relative;
    left: 47%;
    transform: translateX(-50%);
  }
  @media all and (min-width:1024px) {
    width: 14vw;
    margin-left: 16vw;
  }
`;

export const Bath = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRoutineSelect = (routine) => {
    setSelectedItem(routine);
    // 여기서 루틴을 처리하거나 다른 작업을 수행합니다.
  };

  return (
    <MainBox>
      <MTxt1>A warm bath</MTxt1>
      <MTxt2>
      You must have worked hard today. 
        <br />
        Why don't you relax in warm water?
      </MTxt2>
      <Selectbox>
        <Txtbox>Draw a bath</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick('반신욕 물 받기')}>Add</SelectboxBtn>
      </Selectbox>
      <Selectbox>
        <Txtbox>Brushing hair</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick('머리 빗기')}>Add</SelectboxBtn>
      </Selectbox>
      <Selectbox>
        <Txtbox>Taking a bath</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick('반신욕 하기')}>Add</SelectboxBtn>
      </Selectbox>
      <Selectbox>
        <Txtbox>Drinking tea</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick('미지근한 물 마시기')}>Add</SelectboxBtn>
      </Selectbox>
      <Selectbox>
        <Txtbox>Doing a face mask</Txtbox>
        <SelectboxBtn onClick={() => handleAddClick('팩 하기')}>Add</SelectboxBtn>
      </Selectbox>
      <div>
        <SelectAll onClick={() => handleAddClick('전체 추가')}>+Add all</SelectAll>
      </div>
      {showModal && <Modal onClose={handleCloseModal} onRoutineSelect={handleRoutineSelect} />}
    </MainBox>
  );
};
