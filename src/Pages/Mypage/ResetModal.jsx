import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ResetModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ResetModalBoxContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
  width: 80%;
  max-width: 400px;
  padding: 20px;

  @media (min-width: 576px) {
    width: 70%;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 992px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`;

const ResetModalTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const ResetModalButton = styled.button`
  cursor: pointer;
  color: black;
  background-color: white;
  border: 0.5px solid #BFBABA;
  border-radius: ${props => props.yes ? "0 0 0 10px" : "0 0 10px 0"};
  width: 50%;
  padding: 0.75rem;
  border-bottom: none;
  border-left: none;
  border-right: ${props => props.yes ? "none" : "0.5px solid #BFBABA"};

  &:hover {
    background-color: #ED8C37;
    color: white;
  }
`;

const ResetModalBox = ({ onConfirm, onClose }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDeleteRoutine = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const apiUrl = "https://dofarming.duckdns.org/api/v1/track"; 
      await axios.delete(apiUrl, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`, 
        }
      });

      onConfirm();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ResetModalBackdrop>
      <ResetModalBoxContainer>
        <ResetModalTitle><strong>모든 루틴</strong>을 <br /> 삭제하시겠습니까?</ResetModalTitle>
        <div>
          <Link to="/home">
            <ResetModalButton yes onClick={handleDeleteRoutine}>예</ResetModalButton>
          </Link>
          <ResetModalButton onClick={onClose}>아니오</ResetModalButton>
        </div>
      </ResetModalBoxContainer>
    </ResetModalBackdrop>
  );
};

export default ResetModalBox;
