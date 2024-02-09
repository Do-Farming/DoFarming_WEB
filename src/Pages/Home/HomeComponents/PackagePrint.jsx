// 토큰 처리 예정

import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PackagePrint = () => {

  return (
    <div className="HomeWrap">
      <Link to="/Home9">
        <FaPlusCircle className="ToHome9" />
      </Link>
      <style>
        {`
          .ToHome9 {
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

export default PackagePrint;
