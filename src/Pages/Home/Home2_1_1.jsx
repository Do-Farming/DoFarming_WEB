import React, { useState } from "react";
import NavBar from "../Nav/Nav";
import { TiTrash } from 'react-icons/ti';
import "../../styles/Home/Home2_1_1.css";

const Home2_1_1 = () => {
  const [routineList, setRoutineList] = useState([{ name: "아침루틴", completed: false }]);

  const addRoutine = () => {
    const newRoutine = prompt("추가할 루틴을 입력하세요:");
    if (newRoutine) {
      setRoutineList([...routineList, { name: newRoutine, completed: false }]);
    }
  };

  const deleteRoutine = (index) => {
    const newList = [...routineList];
    newList.splice(index, 1);
    setRoutineList(newList);
  };

  const toggleComplete = (index) => {
    const newList = [...routineList];
    newList[index] = {
      ...newList[index],
      completed: !newList[index].completed
    };
    setRoutineList(newList);
  };

  const renderRoutineList = () => {
    return routineList.map((routine, index) => (
      <div className="MyRou" key={index}>
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={routine.completed}
            onChange={() => toggleComplete(index)}
          />
          <span className="checkmark"></span>
        </div>
        <p style={{ textDecoration: routine.completed ? "line-through" : "none" }}>{routine.name}</p>
        <button onClick={() => deleteRoutine(index)}>
          <TiTrash />
        </button>
      </div>
    ));
  };

  return (
    <div>
      <NavBar />
      <div id="RouList">
        {renderRoutineList()}
        <button onClick={addRoutine}>나만의 루틴 추가</button>
      </div>
    </div>
  );
};

export default Home2_1_1;
