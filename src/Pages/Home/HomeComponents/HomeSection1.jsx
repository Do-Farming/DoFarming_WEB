import "../../../Style/Home/Home.css";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const HomeSection1 = () => {
  return (
    <>
      <div id="RoutineZero">
        <div id="Zero1">아직 루틴이 없습니다
        <br /> 루틴을 먼저 만들어주세요
        </div>
      </div>
      <div>
        <Link to="/HomeAddPackage">
          <IoIosAddCircle className="ToHomeAddPackage" />
        </Link>
      </div>
    </>
  );
};

export default HomeSection1;
