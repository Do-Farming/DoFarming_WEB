import React from 'react';
import axios from 'axios';
import '../../Style/Mypage/ResetModal.css';

const PackageDeleteModal = ({ onClose }) => {
  // 삭제 버튼 클릭 시 호출되는 함수
  const handleDelete = async () => {
    // 토큰 가져오기
    const token = localStorage.getItem('authToken'); 

    try {
      const response = await axios.delete('https://dofarming.duckdns.org/api/v1/track/1', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('패키지를 삭제했습니다.', response.data);
      onClose();
    } catch (error) {
      console.error('패키지 삭제에 실패했습니다.', error);
    }
  };

  // 모달 컴포넌트 반환
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
