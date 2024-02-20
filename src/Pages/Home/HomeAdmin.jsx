import React, { useState } from 'react';
import Home9 from './Home9'; // Home9 컴포넌트를 불러옵니다.
import TodoSection2 from './TodoSection2'; // TodoSection2 컴포넌트를 불러옵니다.

function HomeAdmin() {
  const [trackId, setTrackId] = useState(null); // 트랙 아이디를 상태로 관리합니다.

  // 새로운 트랙 아이디를 설정하는 함수
  const handleSetTrackId = () => {
    // 트랙 아이디를 프론트엔드에서 생성하여 설정합니다.
    const newTrackId = generateTrackId(); // 프론트엔드에서 트랙 아이디 생성 함수 호출
    setTrackId(newTrackId);
  };

  // 프론트엔드에서 트랙 아이디를 생성하는 함수
  const generateTrackId = () => {
    // 예시: 현재 시간을 이용한 간단한 아이디 생성 방식
    const timestamp = Date.now();
    return `track_${timestamp}`;
  };

  return (
    <div>
<Home9 setTrackId={setTrackId} />
      <TodoSection2 trackId={trackId} />
    </div>
  );
}

export default HomeAdmin;
