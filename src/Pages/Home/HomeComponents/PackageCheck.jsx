import React, { useState } from "react";
import "../../../Style/Home/Home.css";
import "../../../Style/Home/MakeRoutine.css";
import MakePackage from "../MakePackage.jsx";

const PackageCheck = () => {
    const [packages, setPackages] = useState([]);

    const handleAddPackage = (newPackage) => {
      setPackages([...packages, newPackage]);
    };

    return (
        <div>
            <div className="HomeWrap">
                <MakePackage handleAddPackage={handleAddPackage} />
            </div>
        </div>
    );
};

export default PackageCheck;
