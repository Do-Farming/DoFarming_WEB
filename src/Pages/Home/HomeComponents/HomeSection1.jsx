import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

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
      <Link to="/homeaddpackage">
        <ToHomeAddPackage />
      </Link>
    </>
  );
};


export default HomeSection1;
