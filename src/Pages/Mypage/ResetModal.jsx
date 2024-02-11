import React from 'react';
import '../../Style/Mypage/ResetModal.css';
import axios from 'axios'; 

/* DELETE dofarming.duckdns.org/api/v1/routine/1 HTTP/1.1 (루틴삭제)
*/

const ResetModal = ({ onClose, onConfirm }) => {

  // 루틴 삭제 요청
  const deleteRoutine = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const apiUrl = "https://dofarming.duckdns.org/api/v1/routine/1";
      axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => { // 요청이 성공하면 실행될 코드를 추가합니다.
        console.log(response);
        onConfirm(); // 요청 성공 후 실행할 함수를 호출합니다.
      })
      .catch((error) => { // 요청이 실패하면 실행될 코드를 추가합니다.
        console.error(error);
      });
    }
  };

  return (
    <div className="resetmodal-backdrop">
      <div className='resetmodal'>
        <div className='resetmodal-title'><strong>모든 루틴</strong>을 <br /> 삭제하시겠습니까?</div>
        <div className='resetmodal-footer'>
          <button className='resetmodalbtnyes' onClick={deleteRoutine}>예</button> 
          <button className='resetmodalbtnno' onClick={onClose}>아니오</button>
        </div>
      </div>
    </div>
  );
}

export default ResetModal;