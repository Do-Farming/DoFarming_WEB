import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiPencilFill } from 'react-icons/ri';
import '../../Styles/Home/PackageDelete.css';

const PackageDelete = ({ packageInfo, handleDeletePackage }) => {
  const { id, name, status } = packageInfo;
  const navigate = useNavigate();
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowDeleteBtn(true);
  };

  const handleConfirmDelete = () => {
    handleDeletePackage(id); 
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{status}</p>
      <button onClick={() => navigate('/Home2_1_1')}>
              <RiPencilFill /> Edit
            </button>
      {!showDeleteBtn && <button onClick={handleClick}>...</button>}
      {showDeleteBtn && (
        <div>
          <div>
            <button onClick={() => setShowModal(true)}>Delete</button>
          </div>
          {showModal && (
            <div>
              <p>삭제하시겠습니까?</p>
              <button onClick={handleConfirmDelete}>확인</button>
              <button onClick={handleCancelDelete}>취소</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PackageDelete;
