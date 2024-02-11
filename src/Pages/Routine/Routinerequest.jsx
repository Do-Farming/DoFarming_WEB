import React from 'react';
import axios from 'axios';

const Routinerequest = () => {
  // 루틴 추가 요청
  const addRoutine = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const apiUrl = "https://dofarming.duckdns.org/api/v1/routine/1?trackId=%ED%8A%B8%EB%9E%99%20id";
      axios.post(apiUrl, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }
  };

  // 루틴 조회 요청
  const fetchRoutine = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const apiUrl = "https://dofarming.duckdns.org/api/v1/routine/1?trackId=%ED%8A%B8%EB%9E%99%20id";
      axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }
  };

  // 루틴 상태 변경 요청
  const changeRoutineStatus = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const apiUrl = "https://dofarming.duckdns.org/api/v1/routine/1";
      axios.patch(apiUrl, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }
  };



  // 사용자 정보 조회 요청
  const fetchUserInfo = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const apiUrl = "https://dofarming.duckdns.org/api/v1/user";
      axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }
  };
};

export default Routinerequest;
