import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosAddCircle } from "react-icons/io";
import PackageDeleteModal from '../PackageDeleteModal';
import axios from 'axios';
import styled from 'styled-components';

const RoutineZero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ED8C37;
  font-weight: 340;
`;


const HomeWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3vh;

  @media all and (min-width: 768px) and (max-width: 3000px) {
    padding-top: 3vh;
  }
`;

const UserPKG = styled.div`
  border: 0.5px solid #BFBABA;
  border-radius: 20px;
  margin-bottom: 2vh;
  width: 80vw;
  height: 120px; /* Changed height from percentage to pixels */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  
  @media all and (min-width: 768px) and (max-width: 3000px) {
    margin-bottom: 4vh;
    width: 40vw;
    padding-left: 3vw;
  }
`;

const S2Wrap = styled.div`
  display: flex;
  width: 70vw;
  @media all and (min-width: 768px) and (max-width: 3000px) {
    width:40vw;
  }
`;

const S2Wrap2 = styled.div`
  width: 95%;
  display: flex;
  @media all and (min-width: 768px) and (max-width: 3000px) {
    width:35vw;
  }
`;

const BtnS2 = styled.button`
  background-color: inherit;
  border: none;
  size: 50;
  padding: 0;
  margin: 0;
  @media all and (min-width: 768px) and (max-width: 3000px) {
    margin-left: 1vw;
  }
`;

const UserRname = styled.div`
  font-size: 24px; /* Increased font size for better readability */
`;

const ToHomeAddPackage = styled(IoIosAddCircle)`
  position: fixed;
  bottom: 5vh;
  right: 10vw;
  font-size: 50px;
  color: #ED8C37;
  background-color: inherit;
  cursor: pointer; /* Added cursor pointer for better UX */
`;

const Homesection2 = () => {
  const [packages, setPackages] = useState([]); 
  const [showModal, setShowModal] = useState(false); 
  const [deleteId, setDeleteId] = useState(null); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const token = localStorage.getItem('authToken'); 
        const response = await axios.get('https://dofarming.duckdns.org/api/v1/track', {
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        });
        const newPackages = response.data.map((pkg) => {
          const [routine] = pkg.content.split(', '); 
          return { ...pkg, routine }; 
        });
        setPackages(newPackages); 
      } catch (error) {
        console.error('Error fetching packages:', error); 
      }
    };

    fetchPackages(); 
  }, []); 

  const handleDeletePackage = (id) => {
    setShowModal(true); 
    setDeleteId(id); 
  };

  // 패키지 삭제 모달에서 확인 버튼 클릭 시 실행되는 함수
  const handleConfirmDelete = () => {
    const updatedPackages = packages.filter((pkg) => pkg.trackId !== deleteId); 
    setPackages(updatedPackages); 
    setShowModal(false); 
    document.body.classList.remove('modal-open'); 
  };

  // 패키지 삭제 모달에서 취소 버튼 클릭 시 실행되는 함수
  const handleCancelDelete = () => {
    setShowModal(false); 
    document.body.classList.remove('modal-open'); 
  };

  const handleAddPackage = () => {
    navigate('/HomeAddPackage'); 
  };

  return (
    <>
    {packages.length > 0 && (
      <HomeWrap2>
        {packages.map((pkg) => (
          <UserPKG id="userPKG" onClick={() => navigate('/Todo')} key={pkg.trackId}>
            <div>
              <S2Wrap>
                <S2Wrap2>
                  <UserRname>{pkg.routine}</UserRname> 
                </S2Wrap2>
                <BtnS2 onClick={(e) => {e.stopPropagation(); handleDeletePackage(pkg.trackId);}} className="BtnS2Del">
                  X 
                </BtnS2>
              </S2Wrap>
            </div>
          </UserPKG>
        ))}
      </HomeWrap2>
    )}
    <ToHomeAddPackage onClick={handleAddPackage} /> 
    {showModal && (
      <PackageDeleteModal 
        onClose={handleCancelDelete} 
        onConfirm={handleConfirmDelete}
      />
    )}
    </>
  );
};

export default Homesection2;