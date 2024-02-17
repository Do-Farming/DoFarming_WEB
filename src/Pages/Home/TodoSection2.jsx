import React, { useState, useEffect } from "react";
import { IoTrashSharp } from "react-icons/io5";
import styled from "styled-components";

const TodoSection2Wrap = styled.div`
  width: 40vw;
  margin-left: 35vw;
  margin-top: 5vh;
  height: auto;

  @media all and (min-width: 300px) and (max-width: 1023px) {
    // position: fixed;
    // left: 50%;
    // transform: translate(-50%);
    width: 83vw;
    margin-left: 8.5vw;
  }
`;

const TodoAddRoutineBtn = styled.button`
  width: 30vw;
  color: #BFBABA;
  border-radius: 20px;
  background-color: inherit;
  border: 0.5px solid #BFBABA;
  height: 7vh;
  font-size: 20px;
  margin-top: 2vw;

  @media all and (min-width: 300px) and (max-width: 1023px) {
    width: 330px;
    height: 70px;
    margin-top: 20px;
  }
`;

const CheckboxContainer = styled.div`
  width: 30vw;
  display: flex;
  margin-top: 4vh;
  border: 0.5px solid #BFBABA;
  border-radius: 20px;

  @media all and (min-width: 300px) and (max-width: 1023px) {
    width: 83vw;
    margin-top: 20px;
  }
`;

const TodoSection2Routine = styled.input`
  background-color: inherit;
  border: none;
  height: 7vh;
  font-size: 20px;
  text-align: center;
  width: 75%;
  padding-top: 2px;
  font-weight: 100;
  outline:none;
  text-decoration: ${({ completed }) => completed ? "line-through" : "none"};
  text-decoration-thickness: ${({ completed }) => completed ? "1px" : "initial"};
  ::placeholder {
    color: #BFBABA;
  }

  @media all and (min-width: 300px) and (max-width: 1023px) {
    height: 70px;
  }
`;

const TodoDelete = styled.button`
  color: #ED8C37;
  background-color: white;
  border: none;
  height: 7vh;
  width: 15%;
  padding-top: 8px;
  border-radius: 20px;

  @media all and (min-width: 300px) and (max-width: 1023px) {
    padding-top: 15px;
  }
`;

const Check1 = styled.div`
  width: 10%;
  padding-top: 12.5px;
  padding-left: 10px;

  @media all and (min-width: 300px) and (max-width: 1023px) {
    padding-top: 16.5px;
  }
`;

const Checkbox = styled.input`
  display: none;
`;

const CheckboxLabel = styled.label`
  margin-top: 5px;
  margin-left: 5px;
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 1px solid #ED8C37;
  border-radius: 50%;
  position: relative;
  background-color:inherit;

  ${Checkbox}:checked + &::after {
    content: '✔';
    font-size: 23px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #ED8C37;
    color: white;
  }
`;

const TodoSection2 = ({ token }) => {
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
        if (response.ok) {
          const data = await response.json();
          setRoutineList(data);
        } else {
          console.error('Failed to fetch routine list:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching routine list:', error);
      }
    };
  
    fetchData();
  }, [token]);
  
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

  return (
    <TodoSection2Wrap>
      <div id="RouList">
        {routineList.map((routine, index) => (
          <CheckboxContainer key={index}>
            <Check1>
              <Checkbox
                type="checkbox"
                checked={routine.completed}
                onChange={() => toggleComplete(index)}
                id={`check${index}`}
                disabled={routine.name.trim() === ""}
              />
              <CheckboxLabel htmlFor={`check${index}`}></CheckboxLabel>
            </Check1>
            <TodoSection2Routine
              type="text"
              value={routine.name}
              onChange={(e) => updateRoutineName(index, e.target.value)}
              placeholder="Write your to-do"
              completed={routine.completed}
            />
            <TodoDelete onClick={() => deleteRoutine(index)}>
              <IoTrashSharp size={20} />
            </TodoDelete>
          </CheckboxContainer>
        ))}
        <TodoAddRoutineBtn onClick={addRoutine}>
        + Add routine
        </TodoAddRoutineBtn>
      </div>
    </TodoSection2Wrap>
  );
};

export default TodoSection2;
