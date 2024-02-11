import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { RiPencilFill } from 'react-icons/ri';
import "../../../Style/Home/HomeSection2.css";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import PackageDeleteModal from '../PackageDeleteModal';
import HomeSection1 from './HomeSection1';


const Homesection2 = () => {
  const [packages, setPackages] = useState([
    { id: 1, name: "예시패키지", status: "진행 중" },
    // { id: 2, name: "저녁루틴", status: "진행 중" },
    // { id: 3, name: "운동루틴", status: "완료" },
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
      <div className="HomeWrap2">
        <div id="userPKG" onClick={() => navigate('/Todo')}> {/* 'userPKG' 클릭 시 'Todo' 페이지로 이동 */}
          {packages.map((pkg) => (
            <div key={pkg.id}>
              <div className="S2Wrap">
                <div className="S2Wrap2">
              <div id="userRname">{pkg.name}</div>
              <button onClick={(e) => {e.stopPropagation(); navigate('/HomeAddPackage');}} className="BtnS2">
                <RiPencilFill />
              </button>
              </div>
              <button onClick={(e) => {e.stopPropagation(); handleDeletePackage(pkg.id);}} className="BtnS2Del">
                X
              </button>
              </div>
              
              <div id="userRdate">03.22 ~ 12.05</div>
              <div id="userSangMe">일찍일어나는 새가 벌레를 잡는다!</div>
            </div>
          ))}
          </div>
        </div>
      ) : (
        <HomeSection1 />
      )}
      <div>
        <Link to="/HomeAddPackage">
          <IoIosAddCircle className="ToHomeAddPackage" />
        </Link>
      </div>
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
