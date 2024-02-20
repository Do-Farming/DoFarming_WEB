import React, { useState, useEffect } from "react";
import axios from 'axios';

const TodoSection2 = ({ selectedTrackId }) => {
  const [routineList, setRoutineList] = useState([]);
  const [inputValues, setInputValues] = useState({});

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
    <div>
      {/* Render routine list here */}
      {routineList.map((routine, index) => (
        <div key={index}>
          {routine.content}
        </div>
      ))}
    </div>
  );
};

export default TodoSection2;
