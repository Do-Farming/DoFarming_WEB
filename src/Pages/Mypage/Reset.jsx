import React, { useState } from "react";
import styled from 'styled-components';
import NavBar from "../Nav/Nav.jsx";
import ResetModal from "./ResetModal";

const ResetWrap = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Resetbtn = styled.button`
    color: #DC3412;
    background-color: rgb(245, 245, 245);
    padding: 15px;
    border: none;
    width: 70vw;
    border-radius: 10px;
    font: 1rem;
    margin: 50px;
    margin-bottom: 20px;
    margin-top: 30vh;
    font-size: large;
`;

const Resettxt = styled.div`
    text-align: center;
    font-size: 0.9rem;
`;

const Reset = () => {
    const [showModal, setShowModal] = useState(false);

    const handleResetClick = () => {
      setShowModal(true);
    }

    const handleModalClose = () => {
      setShowModal(false);
    }
    // 전체 초기화
    const handleResetConfirm = () => {
      console.log("전체 초기화를 실행합니다.");
      setShowModal(false); 
    }

  return (
    <div>
      <NavBar />
      <ResetWrap>
        <Resetbtn onClick={handleResetClick}>Initialization all Routine</Resetbtn>
        <Resettxt>Delete the entire routine and Your to-do list.<br/>If You delete the routine, You can't recover it.</Resettxt>
      </ResetWrap>
      {/* 모달 컴포넌트 */}
      {showModal && <ResetModal onClose={handleModalClose} onConfirm={handleResetConfirm} />}
    </div>
  );
};

export default Reset;
