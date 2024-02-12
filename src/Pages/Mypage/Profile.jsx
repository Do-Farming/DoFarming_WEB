import React, { useState, useRef } from "react";
import styled from 'styled-components';
import NavBar from "../Nav/Nav.jsx";
import myimg from "./기본이미지.png";

const ProfileWrap = styled.div``;

const ProfileContainer = styled.div`
    margin-left: 10vw;
`;

const ProfileTxt = styled.div`
    font-size: 2rem;
    margin-top: 4vh;
    margin-bottom: 5vh;
`;

const ProfileContent = styled.div`
    width: 50vw;
    margin-left: 15vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileimgWrap = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 70%;
    overflow: hidden;
    margin-bottom: 20px;
`;

const Profileimg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Profileinputnic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Profilenickname = styled.input`
    border: none;
    background-color: inherit;
    width: 277.5px;
    height: 44.5px;
    border-radius: 15px;
    background-color: #f6f6f6;
    color: #5B5B5B;
    margin: 20px 0;
    padding-left: 25px;
    padding-top: 28px;
    font-size: 20px;
    text-align: center;
    padding: 15px 25px;

    &:focus {
        outline: none;
    }
`;

const Profileinput = styled.div`
    width: 300px;
    height: 52px;
    border-radius: 15px;
    background-color: #f6f6f6;
    color: #5B5B5B;
    margin: 20px 0;
    padding-left: 25px;
    padding-top: 28px;
    font-size: 20px;
`;

const Profilegender = styled.select`
    margin-left: 180px;
    border: none;
    background-color: inherit;
    appearance: none;
    color: #5B5B5B;

    &:focus {
        outline: none;
    }
`;

const Profileage = styled.input`
    margin-left: 180px;
    border: none;
    width: 50px;
    background-color: inherit;
    color: #5B5B5B;

    &:focus {
        outline: none;
    }
`;

const Profilesubmit = styled.button`
    margin-top: 35px;
    padding: 2.3vh;
    font-size: 1rem;
    background-color: gray;
    color: white;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    border-radius: 50px;
    width: 200px;
    border: none;

    &:hover {
        background-color: #ED8C37;
        color: white;
    }
`;

const Profile = () => {
  // 상태 관리
  const [nickname, setNickname] = useState(""); // 서버에서 사용자 닉네임 가져오기
  const [gender, setGender] = useState("값호출"); //서버에서 사용자 성별 가져오기
  const [age, setAge] = useState("값호출"); //서버에서 사용자 나이 가져오기
  const [image, setImage] = useState(null);
  const [editingNickname, setEditingNickname] = useState(false);
  const [newNickname, setNewNickname] = useState("");

  // input 요소에 대한 참조
  const fileInputRef = useRef(null);

  // 파일 입력 변경 핸들러
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  // 커스텀 버튼 클릭 핸들러
  const handleCustomButtonClick = () => {
    fileInputRef.current.click();
  };

  // 닉네임 변경 핸들러
  const handleNicknameChange = (e) => {
    const input = e.target.value;
    const valid = /^[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,12}$/.test(input);

    if (valid) {
      setNewNickname(input);
      setNickname(input);
    } else {
      alert("닉네임은 영문, 한글, 숫자를 포함한 1글자 이상~12글자 이하여야 하며 특수기호를 포함하지 않아야 합니다.");
    }
  };

  // 닉네임 저장 핸들러
  const handleSaveNickname = () => {
    setNickname(newNickname);
    setEditingNickname(false);
  };

  // 성별 변경 핸들러
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // 나이 변경 핸들러
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleButtonClick = () => {
    alert("저장되었어요!");
};

  return (
    <ProfileWrap>
      <NavBar />

      <ProfileContainer>
        <ProfileTxt>Profile</ProfileTxt>
        <ProfileContent>
          {/* 이미지, 닉네임 수정 */}
          <ProfileimgWrap>
            {/* 이미지를 표시할 곳 */}
            {image ? (
              <Profileimg
                onClick={handleCustomButtonClick}
                src={image}
                alt="Uploaded"
              />
            ) : (
              <Profileimg
                onClick={handleCustomButtonClick}
                src={myimg}
                alt="Default"
              />
            )}
            <div>
              {/* 숨겨진 파일 입력 */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </div>
          </ProfileimgWrap>

          <Profileinputnic>
            <Profilenickname
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              onBlur={handleNicknameChange}
            />
          </Profileinputnic>

          <Profileinput>
            <label>성별</label>
            <Profilegender
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="Male">값호출</option>
              <option value="Female">값호출</option>
            </Profilegender>
          </Profileinput>

          <Profileinput>
            <label>나이</label>
            <Profileage
              type="number"
              value={age}
              값호출
              onChange={handleAgeChange}
            />
          </Profileinput>
          <Profilesubmit onClick={handleButtonClick}>저장</Profilesubmit>
        </ProfileContent>
      </ProfileContainer>
    </ProfileWrap>
  );
};

export default Profile;
