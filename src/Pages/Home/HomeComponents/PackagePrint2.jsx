import React, { useState } from "react";
import NavBar from "../../Nav/Nav.jsx";
import Moodlets from "./Moodlets.jsx";
import "./PackagePrint2.css";
import PackageDelete from "../PackageDelete.jsx";

const PackagePrint2 = () => {
  const [packages, setPackages] = useState([
    { id: 1, name: "아침루틴", status: "진행 중" },
    { id: 2, name: "저녁루틴", status: "진행 중" },
    { id: 3, name: "운동루틴", status: "완료" },
  ]);

  const handleDeletePackage = (id) => {
    const updatedPackages = packages.filter((pkg) => pkg.id !== id);
    setPackages(updatedPackages);
  };

  return (
    <div className="HomeWrap2">
      <NavBar />
      <Moodlets />
      <div id="userPKG">
        {packages.map((pkg) => (
          <div key={pkg.id}>
            <PackageDelete
              packageInfo={pkg}
              handleDeletePackage={handleDeletePackage}
            />
            <p id="userRname">{pkg.name}</p>
            <p id="userRdate">24/03/22 - 24/12/05</p>
            <p id="userSangMe">일찍일어나는 새가 벌레를 잡는다!</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagePrint2;
