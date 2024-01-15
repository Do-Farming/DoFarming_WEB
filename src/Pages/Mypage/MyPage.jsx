import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import "../../Styles/Home/Home.css";

const MyPage = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };



  return (
    <div className="HomeWrap">
      <div className="Nav">
        <AiOutlineUser />
        <FiAlignJustify onClick={toggleNav} />
        {isNavVisible && (
          <ul className="nav-menu">
            <li>홈</li>
            <li>루틴</li>
            <li>전문가와의 상담</li>
            <li>고민 노크</li>
          </ul>
        )}
      </div>

    </div>
  );
};

export default MyPage;
