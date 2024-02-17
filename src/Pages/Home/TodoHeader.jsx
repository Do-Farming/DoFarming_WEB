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

const TodoHeader = ({ token }) => {
  const [trackName, setTrackName] = useState('');
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getTracks = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await fetch('https://dofarming.duckdns.org/api/v1/track', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          }
        });
        const data = await response.json();
        setTracks(data);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };

    getTracks();
  }, []);

  return (
    <TodoHeaderBlock>
      <div>
        {tracks.map(track => (
          <div key={track.trackId}>
            {track.content.split(',')[0]}
          </div>
        ))}
      </div>
    </TodoHeaderBlock>
  );
};

export default TodoHeader;
