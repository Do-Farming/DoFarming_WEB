import React from "react";
import PackagePrint from "./HomeComponents/PackagePrint.jsx";
import PackageCheck from "./HomeComponents/PackageCheck.jsx";
import NavBar from "../Nav/Nav";
import Moodlets from "./HomeComponents/Moodlets.jsx";

const Home = () => {

  return (
    <div>
      <NavBar />
      <Moodlets />
      <PackageCheck />
      <PackagePrint />
    </div>
  );
};

export default Home;
