import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  max-height: 700px;
  box-sizing: border-box;
  width: 70%;
  height: auto;
  position: relative;
  overflow: hidden;
  @media (min-width: 576px) {
        width: 80%;
}

@media (min-width: 768px) {
        width: 70%;
}

@media (min-width: 992px) {
        width: 50%;
}

@media (min-width: 1200px) {
        width: 30%;
}
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
`;

const ModalTitle = styled.h3`
  margin: 0;
  margin: auto;
  padding-top: 13%;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const ModalSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 5%;
  margin-bottom: 15%;
  border-radius: 10px;
  border: none;
  background-color: rgb(232, 232, 232);
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
`;

const BtnAdd = styled.button`
  border: none;
  cursor: pointer;
  background-color: white;
  color: black;
  font-weight: bold;
  flex: 1;

  &:hover {
    color: #ED8C37;
    cursor: pointer;
  }
`;

const Modal = ({ onClose }) => {
  return (
    <ModalBackdrop>
      <ModalBox>
        <ModalHeader>
          <ModalTitle>루틴에 항목 추가</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <ModalSelect>
            <option value="myPackage">값 받아오기</option>
          </ModalSelect>
        </ModalBody>
        <ModalFooter>
          <BtnAdd onClick={onClose}>추가하기</BtnAdd> 
          <BtnAdd onClick={onClose}>닫기</BtnAdd>
        </ModalFooter>
      </ModalBox>
    </ModalBackdrop>
  );
}

export default Modal;
