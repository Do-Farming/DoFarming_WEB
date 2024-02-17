import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  max-height: 700px;
  box-sizing: border-box;
  width: 70%;
  height: auto;
  position: relative;
  overflow: hidden;
  @media (min-width: 576px) {
        width: 80%;
}

@media (min-width: 768px) {
        width: 70%;
}

@media (min-width: 992px) {
        width: 50%;
}

@media (min-width: 1200px) {
        width: 30%;
}
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
`;

const ModalTitle = styled.h3`
  margin: 0;
  margin: auto;
  padding-top: 13%;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const ModalSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 5%;
  margin-bottom: 15%;
  border-radius: 10px;
  border: none;
  background-color: rgb(232, 232, 232);
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
`;

const BtnAdd = styled.button`
  border: none;
  cursor: pointer;
  background-color: white;
  color: black;
  font-weight: bold;
  flex: 1;

  &:hover {
    color: #ED8C37;
    cursor: pointer;
  }
`;

const Modal = ({ onClose }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getTracks = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await fetch('https://dofarming.duckdns.org/api/v1/track', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          }
        });
        const data = await response.json();
        setTracks(data);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };

    getTracks();
  }, []);

  const handleAddClick = async () => {
    const selectElement = document.querySelector('.modal-select');
    const trackId = selectElement.value;
    const content = selectElement.options[selectElement.selectedIndex].text;
    await saveRoutine(trackId, content);
    onClose();
  };

  const saveRoutine = async (trackId, content) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await fetch(`https://dofarming.duckdns.org/api/v1/routine/${trackId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({ content })
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log('Routine saved successfully. Routine Status:', responseData.routineStatus);
      } else {
        console.error('Failed to save routine');
      }
    } catch (error) {
      console.error('Error saving routine:', error);
    }
  };
  
  return (
    <ModalBackdrop>
      <ModalBox>
        <ModalHeader>
          <ModalTitle>루틴에 항목 추가</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <ModalSelect className="modal-select">
            <option value="">루틴 항목 선택</option>
            {tracks.map(track => (
              <option key={track.trackId} value={track.trackId}>{track.content.split(',')[0]}</option>
            ))}
          </ModalSelect>
        </ModalBody>
        <ModalFooter>
          <BtnAdd onClick={handleAddClick}>추가하기</BtnAdd> 
          <BtnAdd onClick={onClose}>닫기</BtnAdd>
        </ModalFooter>
      </ModalBox>
    </ModalBackdrop>
  );
};

export default Modal;
