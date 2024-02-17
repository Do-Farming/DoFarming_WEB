
// import React from "react";
// import "../../Style/Login/Login1.css"
// import { useNavigate } from "react-router-dom";

// const Login1 = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate("/login3");
//   };

//   return (
//     <div className="login1 wrap">
//       <div className="login1container">
//         <div className="login1maintxt">
//           <p className="login1txt1">
//             우리에게 주어진<br></br>공평한 하루
//           </p>
//           <p className="login1txt2">
//             남에게 있는 것을 바라보는 것이 아닌,<br></br> 나에게 주어진 것에
//             감사하는 마음
//           </p>
//         </div>
//         <button id="login1_submit_btn" onClick={handleButtonClick}>
//           <strong>반가워👋</strong>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login1;


import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const Login1Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
`;

const MainText = styled.div`
  text-align: left;
  margin-top: 6vh;
  margin-left: 35vw;
  margin-bottom: 0.2vh;

  @media screen and (max-width: 873px) {
    margin-top: 3vh;
    margin-left: 10vw;
    margin-bottom: 0.2vh;
  }
`;

const Text1 = styled.p`
  font-size: 2.5rem;
  width: 30vw;
  font-weight: 730;
  margin-bottom: 0.3vh;
  letter-spacing: 1px;
  margin-top: 2.5vh;
  line-height: 3.4rem;
  white-space: pre-line;

  @media screen and (max-width: 873px) {
    width: 70vw;
  }
`;

const Text2 = styled.p`
  position: relative;
  bottom: 6vh;
  font-size: 0.8rem;
  width: 70vw;
  margin-top: 6vh;
  line-height: 2.2vh;
  letter-spacing: 0.05px;

  @media screen and (max-width: 873px) {
    width: 70vw;
  }
`;

const SubmitButton = styled.button`
  padding: 2.3vh;
  font-size: 1.25rem;
  background-color: #ed8c37;
  text-align: center;
  cursor: pointer;
  border-radius: 50px;
  margin-bottom: 10vh;
  width: 430px;
  align-items: center;
  margin: 10vh auto;
  color: white;
  border: none;

  &:hover {
    background-color: #ed8c37;
    color: white;
  }

  // 다크모드를 감지하여 버튼 색상 유지
  @media (prefers-color-scheme: dark) { /* 수정된 부분을 주석으로 표시 */
    background-color: #ed8c37;
  }


  @media screen and (max-width: 873px) {
    width: 300px;
  }
`;

const Login1 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login2");
  };

  return (
    <Login1Container>
      <MainText>
        <Text1>
          우리에게 주어진<br></br>공평한 하루
        </Text1>
        <Text2>
          남에게 있는 것을 바라보는 것이 아닌,<br></br> 나에게 주어진 것에
          감사하는 마음
        </Text2>
      </MainText>
      <SubmitButton id="login1_submit_btn" onClick={handleButtonClick}>
        <strong>반가워👋</strong>
      </SubmitButton>
    </Login1Container>
  );
};

export default Login1;
