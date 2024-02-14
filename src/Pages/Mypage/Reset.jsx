import React, { useState } from "react";
import styled from 'styled-components';
import NavBar from "../Nav/Nav.jsx";
<<<<<<< HEAD
import ResetModal from "./ResetModal"; 
=======
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
    width: 50vw;
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
>>>>>>> main

const Reset = () => {
    const [showModal, setShowModal] = useState(false);

    const handleResetClick = () => {
      setShowModal(true);
    }

    const handleModalClose = () => {
      setShowModal(false);
    }

    const handleResetConfirm = () => {
      console.log("전체 초기화를 실행합니다.");
      setShowModal(false); // 모달 닫기
    }

  return (
    <div>
      <NavBar />
<<<<<<< HEAD
      <div className="ResetWrap">
        <button className="Resetbtn" onClick={handleResetClick}>모든 루틴 초기화</button>
        <div className="Resettxt">전체 루틴 및 내 리스트를 삭제합니다.<br/>루틴을 삭제하면 복구할 수 없어요.</div>
      </div>
=======
      <ResetWrap>
        <Resetbtn onClick={handleResetClick}>모든 루틴 초기화</Resetbtn>
        <Resettxt>전체 루틴 및 내 리스트를 삭제합니다.<br/>루틴을 삭제하면 복구할 수 없어요.</Resettxt>
      </ResetWrap>
      {/* 모달 컴포넌트 */}
>>>>>>> main
      {showModal && <ResetModal onClose={handleModalClose} onConfirm={handleResetConfirm} />}
    </div>
  );
};

export default Reset;
