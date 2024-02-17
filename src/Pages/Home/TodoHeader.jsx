import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const TodoHeaderBlock = styled.div`
  margin-top: 4vh;
  margin-left: 6vw;
  font-size: 1.56rem;

  @media all and (min-width: 300px) and (max-width: 1023px) {
    margin-top: 4vh;
    margin-left: 6vw;
    font-size: 1.56rem;
  }
`;

const TodoHeader = ({ firebaseToken }) => {
  const [trackName, setTrackName] = useState('');

  useEffect(() => {
    const fetchTrackName = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('https://dofarming.duckdns.org/api/v1/track', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', 
          },
        });
        if (response.status === 200) {
          const data = response.data;
          if (data.length > 0) {
            setTrackName(data[0].name);
          }
        } else {
          console.error('Failed to fetch track list:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching track list:', error);
      }
    };

    fetchTrackName();
  }, []);

  return (
    <TodoHeaderBlock>
      {/* 트랙 이름을 표시하는 부분 */}
      <div>Track Name: {trackName}</div>
    </TodoHeaderBlock>
  );
};

export default TodoHeader;
