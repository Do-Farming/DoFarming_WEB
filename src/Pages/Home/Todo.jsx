import React, { useState, useEffect } from "react";
import NavBar from "../Nav/Nav.jsx";
import TodoHeader from "./TodoHeader";
import TodoSection1 from "./TodoSection1";
import TodoSection2 from "./TodoSection2";
import Login2 from "../Login/Login2.jsx"; // Login2 컴포넌트 import

const Todo = () => {
    const [firebaseToken, setFirebaseToken] = useState('');

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
    }, []);

    return (
        <div className="Todo">
            <NavBar />
            <TodoHeader />
            {/* <TodoSection1 /> */}
            <TodoSection2 />
        </div>
    );
};

export default Todo;
