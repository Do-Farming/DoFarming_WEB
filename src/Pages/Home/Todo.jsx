import NavBar from '../Nav/Nav';
import React, { useState, useEffect } from 'react';
import TodoSection1 from './TodoSection1';
import TodoSection2 from './TodoSection2';
import axios from 'axios';

const Todo = () => {
  const [hasRoutine, setHasRoutine] = useState(false);
  const [trackId, setTrackId] = useState(null); // 트랙 아이디 상태 추가

  useEffect(() => {
    // 트랙 조회 요청을 보내고 루틴이 있는지 확인합니다.
    const fetchTrack = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('https://dofarming.duckdns.org/api/v1/track', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        // 트랙이 있으면 첫 번째 트랙의 아이디를 설정합니다.
        if (response.data.length > 0) {
          setTrackId(response.data[0].trackId);
          setHasRoutine(true);
        }
      } catch (error) {
        console.error('Error fetching track:', error);
      }
    };

    fetchTrack();
  }, []);

  // TodoSection1에서 루틴을 만들면 호출되는 함수
  const handleCreateRoutine = () => {
    setHasRoutine(true);
  };

  return (
    <div className="Todo">
      <NavBar />
      {hasRoutine ? (
        <TodoSection2 trackId={trackId} /> 
      ) : (
        <TodoSection1 onCreateRoutine={handleCreateRoutine} />
      )}
    </div>
  );
};

export default Todo;
