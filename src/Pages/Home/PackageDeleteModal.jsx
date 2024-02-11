/* 트랙 삭제
HTTP request
DELETE /api/v1/track/1 HTTP/1.1
Content-Type: application/json
Authorization: Bearer FirebaseToken
Host: dofarming.duckdns.org
Path parameters
Table 1. /api/v1/track/{trackId}
Parameter	Description
trackId

트랙 id

HTTP response
HTTP/1.1 204 No Content */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Style/Mypage/ResetModal.css';

const PackageDeleteModal = ({ onClose }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setToken(authToken);
    }
  }, []);

  const handleDelete = () => {
    const apiUrl = "https://dofarming.duckdns.org/api/v1/track/1";
    axios.delete(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      // 요청이 성공했을 때의 처리
      console.log("요청 성공!");
      // 성공 시 추가로 수행할 작업이 있다면 여기에 작성
    })
    .catch(error => {
      // 요청이 실패했을 때의 처리
      console.error("요청 실패:", error);
      // 실패 시 추가로 수행할 작업이 있다면 여기에 작성
    });
  };

  return (
    <div className="resetmodal-backdrop">
      <div className='resetmodal'>
        <div className='resetmodal-title'><strong>패키지명</strong><br /> 삭제하시겠습니까?</div>
        <div className='resetmodal-footer'>
          <button className='resetmodalbtnyes' onClick={handleDelete}>예</button>
          <button className='resetmodalbtnno' onClick={onClose}>아니오</button>
        </div>
      </div>
    </div>
  );
}

export default PackageDeleteModal;
