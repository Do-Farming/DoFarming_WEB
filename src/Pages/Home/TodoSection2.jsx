import React, { useState, useEffect } from "react";
import { IoTrashSharp } from "react-icons/io5";
import "../../Style/Home/Todo.css";

const TodoSection2 = ({ pageId }) => {
  const [routineList, setRoutineList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dofarming.duckdns.org/api/v1/track`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setRoutineList(data);
      } catch (error) {
        console.error('Error fetching routine list:', error);
      }
    };

    fetchData();
  }, [pageId, token]);

  const addRoutine = () => {
    const newRoutine = { name: inputValue, completed: false };
    setRoutineList([...routineList, newRoutine]);
    setInputValue("");
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
      name: newName,
    };
    setRoutineList(newList);
  };

  const toggleComplete = (index) => {
    const newList = [...routineList];
    newList[index] = {
      ...newList[index],
      completed: !newList[index].completed,
    };
    setRoutineList(newList);
  };

  const renderRoutineList = () => {
    return routineList.map((routine, index) => (
      <div
        className={`MyRou ${routine.completed ? "completed" : ""}`}
        key={index}
      >
        <div className="checkbox-container">
          <div className="Check1">
            <input
              type="checkbox"
              checked={routine.completed}
              onChange={() => toggleComplete(index)}
              id={`check${index}`}
              disabled={routine.name.trim() === ""}
            />
            <label htmlFor={`check${index}`}></label>
          </div>
          <input
            type="text"
            value={routine.name}
            onChange={(e) => updateRoutineName(index, e.target.value)}
            style={{
              textDecoration: routine.completed ? "line-through" : "none",
              textDecorationThickness: routine.completed ? "1px" : "initial"
            }}
            placeholder="할 일을 입력하세요"
            className="TodoSection2Routine"
          />
          <button onClick={() => deleteRoutine(index)} className="TodoDelete">
            <IoTrashSharp size={20} />
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="TodoSection2Wrap">
      <div id="RouList">
        {/* 루틴 목록 출력 */}
        {renderRoutineList()}
        {/* 루틴 추가 버튼 */}
        <button className="TodoAddRoutineBtn" onClick={addRoutine}>
          + 루틴 추가하기
        </button>
      </div>
    </div>
  );
};

export default TodoSection2;
