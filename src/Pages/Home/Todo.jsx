import React from "react";
import { useLocation } from 'react-router-dom';
import NavBar from "../Nav/Nav";
import TodoSection2 from "./TodoSection2.jsx";

const Todo = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const trackId = params.get('trackId'); // URL의 쿼리 매개변수에서 트랙 ID를 가져옵니다.

  return (
    <div>
      <NavBar />  
      <TodoSection2 selectedTrackId={trackId} /> 
    </div>
  );
};

export default Todo;
