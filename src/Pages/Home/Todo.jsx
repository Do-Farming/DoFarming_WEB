import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // useLocation hook import
import NavBar from "../Nav/Nav.jsx";
import TodoHeader from "./TodoHeader";
import TodoSection1 from "./TodoSection1";
import TodoSection2 from "./TodoSection2";
import Login2 from "../Login/Login2.jsx"; // Login2 컴포넌트 import

const Todo = () => {
    const [firebaseToken, setFirebaseToken] = useState('');
    const [selectedTrack, setSelectedTrack] = useState(null); // 선택된 트랙을 상태로 저장
    const location = useLocation(); // 현재 URL을 가져오는 useLocation hook 사용

    useEffect(() => {
        // Firebase 토큰 가져오는 함수 호출
        const fetchFirebaseToken = async () => {
            try {
                // const token = await getFirebaseToken(); // Firebase 토큰을 가져오는 함수 호출
                const token = Login2.token; // Login2 컴포넌트에서 가져온 토큰
                setFirebaseToken(token); // 가져온 토큰을 상태에 저장
            } catch (error) {
                console.error('Error fetching Firebase token:', error);
            }
        };
        
        fetchFirebaseToken(); // Firebase 토큰 가져오는 함수 호출

        // URL에서 트랙 아이디를 읽어와서 상태에 저장
        const params = new URLSearchParams(location.search);
        const trackId = params.get('trackId');
        setSelectedTrack(trackId);
    }, [location.search]); // location.search가 변할 때마다 실행

    return (
        <div className="Todo">
            <NavBar />
            {/* TodoHeader에 선택된 트랙 아이디를 props로 전달 */}
            <TodoHeader trackId={selectedTrack} />
            <TodoSection1 />
            <TodoSection2 />
        </div>
    );
};

export default Todo;
