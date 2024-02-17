import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

const Text = styled.div`
  text-align: center;
  font-size: 2.2rem;
  margin: 0 auto;
  padding-top: 10vh;
  width: 90vw;
  font-weight: 400;
  padding-bottom: 20vh;

  strong {
    font-weight: bolder;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;

const InputContainer1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  border: none;
  background-color: #F3F3F3;
  border-radius: 50px;
  width: 300px;
  padding-left: 20px;
  height: 7vh;
  margin: 1vh;

  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  border: none;
  background-color: #F3F3F3;
  border-radius: 50px;
  width: 320px;
  margin: 1vh;
  padding-left: 15px;
  height: 7vh;
  color: rgb(113, 113, 113);

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 2.3vh;
  font-size: 1.25rem;
  background-color: ${props => props.disabled ? 'grey' : '#ED8C37'};
  color: #ffffff;
  border: ${props => props.disabled ? 'grey' : '#ED8C37'};
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  border-radius: 50px;
  margin-top: 10vh;
  align-items: center;
  width: 230px;
`;

const Login4 = () => {
  const [Nickname, setNickname] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const navigate = useNavigate();

  const btn_disabled = !Nickname || !Age || !Gender;

  const NicknameCheck = (e) => {
    const input = e.target.value;
    const valid = /^[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{0,12}$/.test(input); /* 닉네임이 0글자라니.. 너무 이상하지만 최소 글자가 1글자일 경우 
                                                         input 창에 있는 글자가 1글자일 때 삭제할 수 없다는 문제가 발생해 우선 부득이하게 이렇게 수정해둡니다.
                                                         다행히 닉네임값과 나이값을 입력하지 않으면 다음페이지로 넘어갈 수 없어 닉네임이 없는 사람은 생기지 않을 것 같습니다. */ 
                                                         
    if (valid) {
      setNickname(input);
    } else {
      alert("닉네임은 영문, 한글, 숫자를 포함한 1글자 이상~12글자 이하여야 하며 특수기호를 포함하지 않아야 합니다.");
    }
  };

  const AgeCheck = (e) => {
    const input = e.target.value;
  
    if (isNaN(input)) {
      alert("숫자만 입력하세요");
      return;
    }
  
    const valid = /^[0-9]{0,3}$/.test(input);
  
    if (valid) {
      setAge(input);
    } else {
      alert("나이는 3자릿수 이하여야 합니다.");
    }
  };
  

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const Submit_to_Server = async () => {
    try {
      const token = localStorage.getItem('authToken');

      if (!token) {
        throw new Error("인증 토큰이 없습니다.");
      }

      const data = {
        nickname: Nickname,
        gender: Gender,
        age: Age,
      };

      const apiUrl = "https://dofarming.duckdns.org/api/v1/user/info";

      const response = await axios.patch(apiUrl, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        console.log(response.data);
        navigate('/home');
      } else {
        console.error(`서버 응답 실패. 상태 코드: ${response.status}`);
      }
    } catch (error) {
      console.error("API 요청 중 에러 발생:", error);

      if (error.response) {
        console.error("서버 응답 실패. 상태 코드:", error.response.status);
        console.error("서버 응답 데이터:", error.response.data);
      } else {
        console.error("기타 에러:", error.message);
      }
    }
  };

  return (
    <Container>
      <Text>
        <div><strong>Well done!</strong><br />Let’s dig in !</div>
      </Text>
      <InputContainer>
      <InputContainer1>
        <form id="myInfo">
          <Input type="text" placeholder="Nickname" value={Nickname} onChange={NicknameCheck} onBlur={NicknameCheck} /><br />
          <Input type="text" placeholder="Age" value={Age} onChange={AgeCheck} />
        </form>
      </InputContainer1>

        <Select id="gender" value={Gender} onChange={handleGenderChange}>
          <option value="">Sex</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </Select>

        <Link to="/Home">
          <SubmitButton type="submit" disabled={btn_disabled} onClick={Submit_to_Server}>Let’s Go!</SubmitButton>
        </Link>
      </InputContainer>
    </Container>
  );
};

export default Login4;
