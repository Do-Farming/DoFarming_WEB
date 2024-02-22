import React, { useState, useEffect } from "react";
import { IoTrashSharp } from "react-icons/io5";
import styled from "styled-components";
import axios from 'axios';
import Todoselect1 from "./TodoSection1";
import $ from "jquery"; 

const TodoSection2Wrap = styled.div`
  width: 40vw;
  margin-left: 35vw;
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

const TodoSection2 = ({ selectedTrackId }) => {
  const [routineList, setRoutineList] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [hasRoutine, setHasRoutine] = useState(false);
  

  const toggleComplete = async (index) => {
    const token = localStorage.getItem('authToken');
    const routineId = routineList[index].routineId;
  
    try {
      const response = await axios.patch(
        `https://dofarming.duckdns.org/api/v1/routine/${routineId}`,
        { routineStatus: routineList[index].completed ? "INCOMPLETE" : "COMPLETE" }, // 루틴의 completed 상태에 따라 변경할 routineStatus 값 설정
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.status === 200) {
        const newList = [...routineList];
        newList[index] = { ...newList[index], completed: !newList[index].completed }; // 서버의 응답이 성공적이면 로컬의 상태를 변경
        setRoutineList(newList);
      } else {
        console.error('Failed to update routine status:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating routine status:', error);
    }
  };

  const addRoutine = async () => {
    const token = localStorage.getItem('authToken');
    const content = ''; 
  
    let newRoutine; // newRoutine 변수를 선언
  
    // 새로운 루틴을 화면에 바로 출력하기 위해 상태 업데이트를 직접 처리합니다.
    setRoutineList(prevRoutineList => {
      newRoutine = { content, routineId: Date.now() }; // newRoutine 변수에 값 할당
      const updatedList = [...prevRoutineList, newRoutine]; // 새로운 루틴을 기존 목록에 추가
      return updatedList;
    });
  
    // Set focus to the corresponding input field after adding the routine
    setInputValues(prevInputValues => ({
      ...prevInputValues,
      [newRoutine.routineId]: '',
    }));
  
    try {
      const response = await $.ajax({
        type: 'POST',
        url: `https://dofarming.duckdns.org/api/v1/routine/${selectedTrackId}?trackId=${encodeURIComponent(selectedTrackId)}`,
        data: JSON.stringify({ content }),
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (response.status === 200) {
        // 성공적으로 루틴을 추가한 경우에 대한 처리
      } else {
        console.error('Failed to add routine:', response.statusText);
      }
    } catch (error) {
      console.error('Error while adding routine:', error);
    }
  };  
  
const deleteRoutine = async (routineId) => {
  const token = localStorage.getItem('authToken');
  try {
    const response = await axios.delete(
      `https://dofarming.duckdns.org/api/v1/routine/${routineId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        } 
      }
    );

    if (response.status === 204) {
      console.log('Routine successfully deleted');
      setRoutineList(prevRoutineList => prevRoutineList.filter(routine => routine.routineId !== routineId));
    } else {
      console.error('Failed to delete routine:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting routine:', error);
  }
};

useEffect(() => {
  const fetchRoutines = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.get(
        `https://dofarming.duckdns.org/api/v1/routine/${selectedTrackId}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          } 
        }
      );

      if (response.status === 200) {
        setRoutineList(response.data);
        const initialValues = {};
        response.data.forEach(routine => {
          initialValues[routine.routineId] = routine.content;
        });
        setInputValues(initialValues);

        // 루틴이 있는지 여부를 업데이트합니다.
        setHasRoutine(response.data.length > 0);
      } else {
        console.error('Failed to fetch routines:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching routines:', error);
    }
  };

  if (selectedTrackId) {
    fetchRoutines();
  }
}, [selectedTrackId]);

return (
  <TodoSection2Wrap>
    {/* 루틴이 없을 때 Todoselect1 컴포넌트를 렌더링합니다. */}
    {!hasRoutine && <Todoselect1 />}
    {/* 루틴이 있는 경우 루틴 목록을 렌더링합니다. */}
    {hasRoutine && (
      <>
        {routineList.map((routine, index) => (
          <CheckboxContainer key={index}>
            <Check1>
              <Checkbox
                type="checkbox"
                onChange={() => {
                  toggleComplete(index);
                }}
                checked={routine.completed}
              />
              <CheckboxLabel />
            </Check1>
            <TodoSection2Routine
              value={inputValues[routine.routineId] || ''}
              onChange={(e) => handleInputChange(e, routine.routineId)}
              checked={routine.checked}
              style={routine.checked ? { textDecoration: 'line-through' } : null}
            />
            <TodoDelete>
              <IoTrashSharp onClick={() => deleteRoutine(routine.routineId)} />
            </TodoDelete>
          </CheckboxContainer>
        ))}
        <TodoAddRoutineBtn onClick={addRoutine}> + Add routine </TodoAddRoutineBtn>
      </>
    )}
  </TodoSection2Wrap>
)};
export default TodoSection2;
