import "../../../Style/Home/Home.css";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSection1 = () => {
  return (
    <>
      <div id="RoutineZero">
        <p id="Zero1">아직 루틴이 없습니다</p>
        <p id="Zero2">루틴을 추가하세요.</p>
      </div>
      <div>
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
    </>
  );
};

export default HomeSection1;
