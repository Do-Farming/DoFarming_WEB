import React, { useState, useEffect } from "react";
import axios from "axios";


const RoutineInitialState = ({ setActiveBtn, setUser }) => {
  useEffect(() => {
    // localStorage에서 토큰을 가져옵니다.
    const token = localStorage.getItem('authToken');
    if (token) {
      // 서버에 토큰을 전달하여 사용자 정보를 요청합니다.
      const apiUrl = "https://dofarming.duckdns.org";
      axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(error => {
        console.error(error);
      });
    }
  }, []);

  return (
    <div className="Routine_wrap">
      <NavBar />
      <Routinimport /> 
    </div>
  );
};

export default RoutineInitialState;
