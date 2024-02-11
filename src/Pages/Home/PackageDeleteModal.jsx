import React from 'react';
import '../../style/Mypage/ResetModal.css';

const PackageDeleteModal = ({ onClose, onConfirm }) => {
  return (
    <div className="resetmodal-backdrop">
        <div className='resetmodal'>
                <div className='resetmodal-title'><strong>패키지명</strong><br /> 삭제하시겠습니까?</div>
                <div className='resetmodal-footer'>
                    <button className='resetmodalbtnyes' onClick={onConfirm}>예</button>
                    <button className='resetmodalbtnno' onClick={onClose}>아니오</button>
                </div>
      </div>
    </div>
  );
}

export default PackageDeleteModal;
