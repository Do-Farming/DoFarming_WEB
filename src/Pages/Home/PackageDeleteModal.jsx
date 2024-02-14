import React from 'react';
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
  z-index: 9999;
`;

const ModalBox = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
  height: auto;
  width: 80%;

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

const ModalTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 40px;
  margin: 60px;
`;

const ModalButtonYes = styled.button`
  cursor: pointer;
  color: black;
  background-color: white;
  border-top: 0.5px solid #BFBABA;
  border-right: 0.5px solid #BFBABA;
  border-radius: 0 0 0 10px;
  width: 50%;
  height: auto;
  padding: 15px;
  border-bottom: none;
  border-left: none;
  
  &:hover {
    background-color: #ED8C37;
    color: white;
  }
`;

const ModalButtonNo = styled.button`
  cursor: pointer;
  color: black;
  background-color: white;
  border-top: 0.5px solid #BFBABA;
  border-radius: 0 0 10px 0;
  width: 50%;
  height: auto;
  padding: 15px;
  border-bottom: none;
  border-left: none;
  border-right: none;
  
  &:hover {
    background-color: #ED8C37;
    color: white;
  }
`;

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
    <ModalBackdrop>
      <ModalBox>
        <ModalTitle><strong>패키지명</strong><br /> 삭제하시겠습니까?</ModalTitle>
        <div>
          <ModalButtonYes onClick={onConfirm}>예</ModalButtonYes>
          <ModalButtonNo onClick={onClose}>아니오</ModalButtonNo>
        </div>
      </ModalBox>
    </ModalBackdrop>
  );
}

export default PackageDeleteModal;
