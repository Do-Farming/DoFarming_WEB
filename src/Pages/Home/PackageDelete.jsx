import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiPencilFill } from 'react-icons/ri';
import '../../Style/Home/PackageDelete.css';

const PackageDelete = ({ packageInfo, handleDeletePackage }) => {
  const { id, name, status } = packageInfo;
  const navigate = useNavigate();
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowDeleteBtn(true);
    document.body.classList.add('modal-open');
  };

  const handleConfirmDelete = () => {
    handleDeletePackage(id);
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{status}</p>
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
                <div h2_2_1Btns>
                <button onClick={handleConfirmDelete} className='PackageDeleteBtn'>확인</button>
                <button onClick={handleCancelDelete}>취소</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PackageDelete;
