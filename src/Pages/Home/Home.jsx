import React, { useState } from "react";
import MakePackage from "./MakePackage";
import "../../Style/Home/Home.css";
import "../../Style/Home/MakeRoutine.css";
import "../../Style/Home/HomeModal.css";
import NavBar from "../Nav/Nav.jsx";
import { FaCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Moodlets from "./HomeComponents/Moodlets";

const Home = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  const LinktoHome9 = () => {
    navigate("/Home9");
  };

  const handleAddPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
  };

  const handleDeletePackage = (index) => {
    const updatedPackages = [...packages];
    updatedPackages.splice(index, 1);
    setPackages(updatedPackages);
  };


  return (
    <div className="HomeWrap">
      <NavBar />
      <Moodlets />

      <MakePackage handleAddPackage={handleAddPackage} />

      {packages.length > 0 ? (
        packages.map((pkg, index) => (
          <div key={index}>
            <strong>패키지 이름 </strong> {pkg.name}
            <br />
            <strong>패키지 상태 </strong> {pkg.status}
            <button onClick={() => handleDeletePackage(index)}>삭제</button>
            <hr />
          </div>
        ))
      ) : null}

      <FaCirclePlus className="ToHome9" onClick={LinktoHome9} />
    </div>
  );
};

export default Home;
