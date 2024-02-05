import React from 'react';
import '../../Styles/Mypage/ResetModal.css';

const ResetModal = ({ onClose, onConfirm }) => {
  return (
    <div className="resetmodal-backdrop">
        <div className='resetmodal'>
                <div className='resetmodal-title'><strong>모든 루틴</strong>을 <br /> 삭제하시겠습니까?</div>
                <div className='resetmodal-footer'>
                    <button className='resetmodalbtnyes' onClick={onConfirm}>예</button>
                    <button className='resetmodalbtnno' onClick={onClose}>아니오</button>
                </div>
      </div>
    </div>
  );
}

export default ResetModal;