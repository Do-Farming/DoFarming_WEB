import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const RoutineZero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ED8C37;
  font-weight: 340;
`;

const Zero1 = styled.div`
  line-height: 28px;
`;

const ToHomeAddPackage = styled(IoIosAddCircle)`
  position: fixed;
  bottom: 5vh;
  right: 10vw;
  font-size: 50px;
  color: #ED8C37;
  background-color: inherit;

  @media all and (min-width: 768px) and (max-width: 3000px) {
    position: fixed;
    bottom: 5vh;
    right: 10vw;
    font-size: 50px;
    color: #ED8C37;
    background-color: inherit;
  }
`;

const HomeSection1 = () => {
  return (
    <>
      <RoutineZero>
        <Zero1>No routine yet
        <br /> Please make a routine first
        </Zero1>
      </RoutineZero>
      <Link to="/HomeAddPackage">
        <ToHomeAddPackage />
      </Link>
    </>
  );
};

export default HomeSection1;
