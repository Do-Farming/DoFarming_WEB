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

const TodoHeader = ({ trackId }) => {
  const [trackName, setTrackName] = useState('');

  useEffect(() => {
    const getTrackName = async () => {
      if (!trackId) {
        console.error('Error: trackId is undefined.');
        return; // trackId가 없으면 함수 종료
      }

      try {
        // 트랙 이름을 가져오기 위해 서버로 요청을 보냅니다.
        const response = await axios.get(`https://dofarming.duckdns.org/api/v1/track/${trackId}`);
        setTrackName(response.data.content);
      } catch (error) {
        console.error('Error fetching track name:', error);
      }
    };

    getTrackName();
  }, [trackId]);

  return (
    <TodoHeaderBlock>
      <div>
        {trackName || 'Track name not available'} {/* trackName이 없을 경우 오류 메시지 표시 */}
      </div>
    </TodoHeaderBlock>
  );
};

export default TodoHeader;
