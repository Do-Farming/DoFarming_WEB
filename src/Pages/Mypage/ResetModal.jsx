import React from 'react';
import styled from 'styled-components';

const ResetModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ResetModalBox = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
  height: auto;
  width: 80%;

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

const ResetModalTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 40px;
  margin: 60px;
`;

const ResetModalButtonYes = styled.button`
  cursor: pointer;
  color: black;
  background-color: white;
  border-top: 0.5px solid #BFBABA;
  border-right: 0.5px solid #BFBABA;
  border-radius: 0 0 0 10px;
  width: 50%;
  height: auto;
  padding: 15px;
  border-bottom: none;
  border-left: none;
  
  &:hover {
    background-color: #ED8C37;
    color: white;
  }
`;

const ResetModalButtonNo = styled.button`
  cursor: pointer;
  color: black;
  background-color: white;
  border-top: 0.5px solid #BFBABA;
  border-radius: 0 0 10px 0;
  width: 50%;
  height: auto;
  padding: 15px;
  border-bottom: none;
  border-left: none;
  border-right: none;
  
  &:hover {
    background-color: #ED8C37;
    color: white;
  }
`;

const ResetModal = ({ onClose, onConfirm }) => {
  return (
    <ResetModalBackdrop>
      <ResetModalBox>
        <ResetModalTitle><strong>모든 루틴</strong>을 <br /> 삭제하시겠습니까?</ResetModalTitle>
        <div>
          <ResetModalButtonYes onClick={onConfirm}>예</ResetModalButtonYes>
          <ResetModalButtonNo onClick={onClose}>아니오</ResetModalButtonNo>
        </div>
      </ResetModalBox>
    </ResetModalBackdrop>
  );
}

export default ResetModal;
