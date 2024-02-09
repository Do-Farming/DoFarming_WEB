// 토큰 처리 예정

import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSection2 = () => {

  return (
    <div className="HomeSection2Wrap">
      <Link to="/HomeAddPackage">
        <FaPlusCircle className="ToHomeAddPackage" />
      </Link>
      <style>
        {`
          .ToHomeAddPackage {
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 50px;
            color: orange;
          }
        `}
      </style>
    </div>
  );
};

export default HomeSection2;
