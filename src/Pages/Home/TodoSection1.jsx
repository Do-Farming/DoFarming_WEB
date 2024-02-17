import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../Nav/Nav.jsx";

const TodoSection1Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 340;
`;

const GoRoutine = styled.p`
    color: blue;
    text-decoration: underline blue;
`;

const MakeRoutine = () => {
  return (
    <TodoSection1Wrap>
      <p>아직 할 일이 없습니다</p> 
      <Link to="/Routine">
        <GoRoutine>루틴을 만들러 이동해 볼까요?</GoRoutine>
      </Link>
    </TodoSection1Wrap>
  );
};

export default MakeRoutine;
