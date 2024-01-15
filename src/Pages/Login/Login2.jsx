// 필요한 모듈 및 스타일 import
import "../../styles/login/Login.css";
import { GoogleLoginButton } from "react-social-login-buttons";
import { GoogleAuthProvider, signInWithPopup, getIdToken } from "firebase/auth";
import { auth } from "../../Firebase/firebase-config";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import React, { useState } from "react";

// Login2 컴포넌트 정의
const Login2 = () => {
  // useNavigate 훅을 사용하여 라우터 제어
  const navigate = useNavigate(); 
  
  // 사용자 데이터를 저장할 상태
  const [userData, setUserData] = useState(null);

  // 구글 로그인 버튼 클릭 시 실행되는 함수
  async function handleGoogleLogin() {
    // GoogleAuthProvider를 사용하여 구글 로그인 팝업 실행
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      
      // 로그인 결과에서 사용자 정보 추출
      const user = result.user;
      setUserData(user);

      // 사용자의 ID 토큰을 가져와서 localStorage에 저장
      const token = await getIdToken(auth.currentUser);
      localStorage.setItem('authToken', token);

      // 서버에 토큰을 전달하여 사용자 인증 및 관련 정보 요청
      const apiUrl = "http://192.168.1.59:8080";
      axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        // 서버 응답 출력 및 라우터를 통해 다음 페이지로 이동
        console.log(response.data);
        navigate('/Login3');
      });
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
  }

  // JSX로 화면 구성
  return (
    <div>
      <div className="login2_wrap">
        <div className="login2_textbox">
          <p>
            <span className="bold_text">몸</span>과{" "}
            <span className="bold_text">마음</span>
          </p>
          <p>건강하게 챙기는 첫 단계!</p>
        </div>
        <div className="Gloginbox">
          {/* 구글 로그인 버튼 */}
          <GoogleLoginButton onClick={handleGoogleLogin} />
        </div>
      </div>
    </div>
  );
};

// 컴포넌트 내보내기
export default Login2;
