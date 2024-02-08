import React, { useState, useEffect } from "react";
import NavBar from "../Nav/Nav";
import { TiTrash } from 'react-icons/ti';
import "../../Style/Home/Home2_1_1.css";

const Home2_1_1 = ({ pageId }) => {
  const [routineList, setRoutineList] = useState([]);

  useEffect(() => {
    const storedRoutineList = localStorage.getItem(`routineList_${pageId}`);
    if (storedRoutineList) {
      setRoutineList(JSON.parse(storedRoutineList));
    }
  }, [pageId]);

  useEffect(() => {
    localStorage.setItem(`routineList_${pageId}`, JSON.stringify(routineList));
  }, [routineList, pageId]);

  const addRoutine = () => {
    const newRoutine = { name: "", completed: false };
    setRoutineList([...routineList, newRoutine]);
  };

  const deleteRoutine = (index) => {
    const newList = [...routineList];
    newList.splice(index, 1);
    setRoutineList(newList);
  };

  const updateRoutineName = (index, newName) => {
    const newList = [...routineList];
    newList[index] = {
      ...newList[index],
      name: newName
    };
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
      <div className={`MyRou ${routine.completed ? 'completed' : ''}`} key={index}>
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={routine.completed}
            onChange={() => toggleComplete(index)}
          />
          <span className="checkmark"></span>
        </div>
        <input
          type="text"
          value={routine.name}
          onChange={(e) => updateRoutineName(index, e.target.value)}
          style={{ textDecoration: routine.completed ? 'line-through' : 'none' }}
        />
        <button onClick={() => deleteRoutine(index)}>
          <TiTrash />
        </button>
      </div>
    ));
  };

  return (
    <div id="Btn2_2_1Wrap"> 
      <NavBar />
      <h1>아침 루틴{pageId}</h1>
      <div id="RouList">
        {renderRoutineList()}
        <button id="Btn2_2_1" onClick={addRoutine}>+ 루틴 추가하기</button>
      </div>
    </div>
  );
};

export default  Home2_1_1;
