import React, { useState } from "react";
import "../../Style/Mypage/Reset.css";
import NavBar from "../Nav/Nav.jsx";
import ResetModal from "./ResetModal"; // ResetModal 컴포넌트 import

const Reset = () => {
    const [showModal, setShowModal] = useState(false);

    const handleResetClick = () => {
      setShowModal(true);
    }

    const handleModalClose = () => {
      setShowModal(false);
    }

    const handleResetConfirm = () => {
      // 여기에 전체 초기화 작업을 수행하는 코드를 추가합니다.
      console.log("전체 초기화를 실행합니다.");
      setShowModal(false); // 모달 닫기
    }

  return (
    <div>
      <NavBar />
      <div className="ResetWrap">
        <button className="Resetbtn" onClick={handleResetClick}>모든 루틴 초기화</button>
        <div className="Resettxt">전체 루틴 및 내 리스트를 삭제합니다.<br/>루틴을 삭제하면 복구할 수 없어요.</div>
      </div>
      {/* 모달 컴포넌트 */}
      {showModal && <ResetModal onClose={handleModalClose} onConfirm={handleResetConfirm} />}
    </div>
  );
};

export default Reset;