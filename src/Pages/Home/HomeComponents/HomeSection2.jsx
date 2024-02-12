import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { RiPencilFill } from 'react-icons/ri';
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import PackageDeleteModal from '../PackageDeleteModal';
import HomeSection1 from './HomeSection1';

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
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 15px;

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
  font-size: 20px;
`;

const UserRdate = styled.div`
  margin-top: 3px;
  margin-bottom: 40px;
  font-size: 12px;
`;

const ToHomeAddPackage = styled(IoIosAddCircle)`
  position: fixed;
  bottom: 5vh;
  right: 10vw;
  font-size: 50px;
  color: #ED8C37;
  background-color: inherit;
  
`;


const Homesection2 = () => {
  const [packages, setPackages] = useState([
    { id: 1, name: "예시패키지", status: "진행 중" },
  ]);

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeletePackage = (id) => {
    setShowModal(true);
    setDeleteId(id);
  };

  const handleConfirmDelete = () => {
    const updatedPackages = packages.filter((pkg) => pkg.id !== deleteId);
    setPackages(updatedPackages);
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
    {packages.length > 0 ? (
      <HomeWrap2>
        <UserPKG onClick={() => navigate('/Todo')}> 
          {packages.map((pkg) => (
            <div key={pkg.id}>
              <S2Wrap>
                <S2Wrap2>
                  <UserRname>{pkg.name}</UserRname>
                  <BtnS2 onClick={(e) => {e.stopPropagation(); navigate('/HomeAddPackage');}}>
                    <RiPencilFill />
                  </BtnS2>
                </S2Wrap2>
                <BtnS2 onClick={(e) => {e.stopPropagation(); handleDeletePackage(pkg.id);}}>
                  X
                </BtnS2>
              </S2Wrap>
              
              <UserRdate>03.22 ~ 12.05</UserRdate>
              <div id="userSangMe">일찍일어나는 새가 벌레를 잡는다!</div>
            </div>
          ))}
        </UserPKG>
      </HomeWrap2>
    ) : (
      <HomeSection1 />
    )}
    <Link to="/HomeAddPackage">
      <ToHomeAddPackage />
    </Link>
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
