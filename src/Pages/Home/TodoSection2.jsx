import React, { useState, useEffect } from "react";
import { IoTrashSharp } from "react-icons/io5";
import styled from "styled-components";
import axios from 'axios';

const TodoSection2Wrap = styled.div`
  width: 70vw;
  margin-left: 15vw;
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
  flex-direction: column;
  align-items: center;
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
  width: 100%;
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

const TodoSection2 = ({ token, selectedTrackId }) => {
  const [routineList, setRoutineList] = useState([]);
  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const response = await axios.get(
          `https://dofarming.duckdns.org/api/v1/routine/18`,
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
            initialValues[routine.routineId] = routine.name;
          });
          setInputValues(initialValues);
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
  }, [token, selectedTrackId]);

  const addRoutine = async () => {
    try {
      const newRoutine = { name: inputValue, completed: false };
      const response = await axios.post(
        `https://dofarming.duckdns.org/api/v1/routine/${selectedTrackId}`,
        {
          name: newRoutine.name,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        setRoutineList([...routineList, newRoutine]);
        setInputValue(""); // addRoutine 함수에서 inputValue 초기화
      } else {
        console.error('Failed to save routine:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving routine:', error);
    }
  };


  const deleteRoutine = async (index) => {
    try {
      const routineId = routineList[index].routineId;
      await axios.delete(`https://dofarming.duckdns.org/api/v1/routine/${routineId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const newList = [...routineList];
      newList.splice(index, 1);
      setRoutineList(newList);
    } catch (error) {
      console.error('Error deleting routine:', error);
    }
  };

  const updateRoutineName = async (routineId, newName) => {
    try {
      await axios.put(
        `https://dofarming.duckdns.org/api/v1/routine/${routineId}`,
        {
          name: newName 
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      setInputValues(prevState => ({
        ...prevState,
        [routineId]: newName
      }));
    } catch (error) {
      console.error('Error updating routine name:', error);
    }
  };

  const toggleComplete = async (index) => {
    const routine = routineList[index];
    try {
      await axios.put(
        `https://dofarming.duckdns.org/api/v1/routine/${routine.routineId}`,
        {
          completed: !routine.completed 
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      const newList = [...routineList];
      newList[index] = {
        ...routine,
        completed: !routine.completed
      };
      setRoutineList(newList);
    } catch (error) {
      console.error('Error updating routine completion status:', error);
    }
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
              value={inputValues[routine.routineId] || ""}
              onChange={(e) => updateRoutineName(routine.routineId, e.target.value)}
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