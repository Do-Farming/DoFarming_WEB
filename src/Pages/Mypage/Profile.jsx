import React, { useState, useRef } from "react";
import "../../Styles/Home/Home.css";
import NavBar from "../Nav/Nav.jsx";
import myimg from "./기본이미지.png";

const eng = /[a-zA-Z]/;
const kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
const num = /[0-9]/;
const spc = /[~!@#$%^&*()_+|<>?:{}]/;

const NicknameCheck = (e) => {
  const input = e.target.value;
  if (
    input.length >= 0 &&
    input.length <= 12 &&
    (eng.test(input) || kor.test(input) || num.test(input) || !spc.test(input))
  ) {
    setNickname(input);
  } else {
    alert(
      "닉네임은 영문, 한글, 숫자를 포함한 12글자 이하여야 하며 특수기호를 포함하지 않아야 합니다."
    );
  }
};

const Profile = () => {
  // 상태 관리
  const [nickname, setNickname] = useState("닉네임"); // 서버에서 사용자 닉네임 가져오기
  const [gender, setGender] = useState("Male"); //서버에서 사용자 성별 가져오기
  const [age, setAge] = useState(25); //서버에서 사용자 나이 가져오기
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

  // 닉네임 수정 버튼 클릭 핸들러
  const handleEditNickname = () => {
    setEditingNickname(true);
    setNewNickname(nickname);
  };

  // 닉네임 변경 핸들러
  const handleNicknameChange = (e) => {
    setNewNickname(e.target.value);
  };

  // 닉네임 저장 핸들러
  const handleSaveNickname = () => {
    if (
      newNickname.length >= 0 &&
      newNickname.length <= 12 &&
      (eng.test(newNickname) ||
        kor.test(newNickname) ||
        num.test(newNickname) ||
        !spc.test(newNickname))
    ) {
      setNickname(newNickname);
      setEditingNickname(false);
    } else {
      alert(
        "닉네임은 영문, 한글, 숫자를 포함한 12글자 이하여야 하며 특수기호를 포함하지 않아야 합니다."
      );
    }
  };

  // 성별 변경 핸들러
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // 나이 변경 핸들러
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div className="ProfileWrap">
      <NavBar />
      <div>
        <div>Profile</div>
        <div>
          {/* 이미지를 표시할 곳 */}
          {image ? (
            <img
              onClick={handleCustomButtonClick}
              src={image}
              alt="Uploaded"
              style={{ width: "200px", height: "200px" }}
            />
          ) : (
            <img
              onClick={handleCustomButtonClick}
              src={myimg}
              alt="Default"
              style={{ width: "200px", height: "200px" }}
            />
          )}
        </div>
        <div>
          {/* 숨겨진 파일 입력 */}
          <input
            type="file"
            accept="image/"
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </div>
        <div>
          {editingNickname ? (
            <div>
              <input
                type="text"
                value={newNickname}
                onChange={handleNicknameChange}
              />
              <button onClick={handleSaveNickname}>저장</button>
            </div>
          ) : (
            <div>
              <span>{nickname}</span>
              <button onClick={handleEditNickname}>수정</button>
            </div>
          )}
        </div>
        <div>
          <label>성별:</label>
          <select value={gender} onChange={handleGenderChange}>
            <option value="Male">남성</option>
            <option value="Female">여성</option>
          </select>
        </div>
        <div>
          <label>나이:</label>
          <input type="number" value={age} onChange={handleAgeChange} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
