import React from 'react';
import '../../Style/Component/Modal.css';

function getAuthToken() {
  const authToken = localStorage.getItem('authToken');
  return authToken;
}

async function requestToServer(method, url, headers, data) {
  const response = await fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error('요청에 실패했습니다.');
  }
  return response.json();
}

async function saveRoutine(trackId) {
  const url = `/api/v1/routine/1?trackId=${encodeURIComponent(trackId)}`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getAuthToken()}`
  };
  const data = {};

  try {
    const response = await requestToServer('POST', url, headers, data);
    console.log('루틴 저장 성공:', response);
  } catch (error) {
    console.error('루틴 저장 실패:', error);
  }
}

const Modal = ({ onClose }) => {
  const handleAddClick = async () => {
    const selectElement = document.querySelector('.modal-select');
    const trackId = selectElement.value;
    saveRoutine(trackId);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">루틴에 항목 추가</h3>
        </div>
        <div className="modal-body">
          <select className="modal-select">
            <option value="trackId1">값 받아오기1</option>
            <option value="trackId2">값 받아오기2</option>
            <option value="trackId3">값 받아오기3</option>
          </select>
        </div>
        <div className="modal-footer">
          <button onClick={handleAddClick} className="btn-add">추가하기</button>
          <button onClick={onClose} className="btn-add">닫기</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
