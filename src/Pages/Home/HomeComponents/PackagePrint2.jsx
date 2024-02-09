import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { RiPencilFill } from 'react-icons/ri';
import "./PackagePrint2.css";

const PackagePrint2 = () => {
  const [packages, setPackages] = useState([
    { id: 1, name: "아침루틴", status: "진행 중" },
    { id: 2, name: "저녁루틴", status: "진행 중" },
    { id: 3, name: "운동루틴", status: "완료" },
  ]);

  const navigate = useNavigate();
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDeletePackage = (id) => {
    const updatedPackages = packages.filter((pkg) => pkg.id !== id);
    setPackages(updatedPackages);
  };

  const handleClick = () => {
    setShowDeleteBtn(true);
    document.body.classList.add('modal-open');
  };

  const handleConfirmDelete = (id) => {
    handleDeletePackage(id);
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="HomeWrap2">
      <div id="userPKG">
        {packages.map((pkg) => (
          <div key={pkg.id}>
            <button onClick={() => navigate('/Home2_1_1')}>
              <RiPencilFill /> 수정
            </button>
            {!showDeleteBtn && <button onClick={handleClick}>...</button>}
            {showDeleteBtn && (
              <div>
                <div>
                  <button onClick={() => setShowModal(true)}>삭제</button>
                </div>
                {showModal && (
                  <div>
                    <div className="modal-background" onClick={handleCancelDelete} />
                    <div id="mmodal">
                      <p>삭제하시겠습니까?</p>
                      <div h2_2_1btns="true">
                        <button onClick={() => handleConfirmDelete(pkg.id)}>확인</button>
                        <button onClick={handleCancelDelete}>취소</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <p id="userRname">{pkg.name}</p>
            <p id="userRdate">24/03/22 - 24/12/05</p>
            <p id="userSangMe">일찍일어나는 새가 벌레를 잡는다!</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagePrint2;
