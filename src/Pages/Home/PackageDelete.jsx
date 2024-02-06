import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PackageDelete = ({ packageInfo, handleDeletePackage }) => {
  const { id, name, status } = packageInfo;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    handleDeletePackage(id);
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  const isEdit = () => {
    navigate("/MakeRoutine");
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{status}</p>
      <button onClick={handleClick}>Delete</button>
      <button onClick={isEdit}>Edit</button>

      {showModal && (
        <div>
          <p>삭제하시겠습니까?</p>
          <button onClick={handleConfirmDelete}>확인</button>
          <button onClick={handleCancelDelete}>취소</button>
        </div>
      )}
    </div>
  );
};

export default PackageDelete;
