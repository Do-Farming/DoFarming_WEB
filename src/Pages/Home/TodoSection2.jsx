import React, { useState, useEffect } from "react";
import { IoTrashSharp } from "react-icons/io5";
import styled from "styled-components";

const TodoSection2Wrap = styled.div`
  width: 70vw; /* 변경된 너비 */
  margin-left: 15vw; /* 변경된 여백 */
  margin-top: 5vh;
  height: auto;

  @media all and (min-width: 300px) and (max-width: 1023px) {
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
  display: flex;
  flex-direction: column; /* 변경된 방향 */
  align-items: center; /* 추가된 정렬 */
  margin-top: 4vh;
  border: 0.5px solid #BFBABA;
  border-radius: 20px;
  padding: 10px;

  @media all and (min-width: 300px) and (max-width: 1023px) {
    margin-top: 20px;
  }
`;

const TodoSection2Routine = styled.input`
  background-color: inherit;
  border: none;
  font-size: 20px;
  text-align: center;
  width: 100%; /* 변경된 너비 */
  padding-top: 2px;
  font-weight: 100;
  outline: none;
  text-decoration: ${({ completed }) => completed ? "line-through" : "none"};
  text-decoration-thickness: ${({ completed }) => completed ? "1px" : "initial"};
  ::placeholder {
    color: #BFBABA;
  }
`;

const TodoDelete = styled.button`
  color: #ED8C37;
  background-color: white;
  border: none;
  padding-top: 8px;
  border-radius: 20px;
`;

const Check1 = styled.div`
  padding-top: 12.5px;
  padding-left: 10px;
`;

const Checkbox = styled.input`
  display: none;
`;

const CheckboxLabel = styled.label`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 1px solid #ED8C37;
  border-radius: 50%;
  position: relative;
  background-color: inherit;

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
  const selectedTrackId = "여기에 선택된 트랙의 ID를 입력"; // 사용자가 선택한 트랙의 ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dofarming.duckdns.org/api/v1/routine/${selectedTrackId}`, {
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
  }, [token, selectedTrackId]);
  
  const addRoutine = () => {
    const newRoutine = { name: inputValue, completed: false };
    setRoutineList([...routineList, newRoutine]);
    setInputValue("");
    saveRoutine(newRoutine); // 입력 완료 후 서버에 저장
  };

  const saveRoutine = async (newRoutine) => {
    try {
      const response = await fetch(`https://dofarming.duckdns.org/api/v1/routine/${selectedTrackId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: newRoutine.name 
        })
      });
      if (!response.ok) {
        console.error('Failed to save routine:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving routine:', error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      addRoutine();
    }
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
