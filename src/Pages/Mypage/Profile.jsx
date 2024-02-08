import React, { useState, useRef } from "react";
import "../../Style/Mypage/Profile.css";
import NavBar from "../Nav/Nav.jsx";
import myimg from "./기본이미지.png";

const Profile = () => {
  // 상태 관리
  const [nickname, setNickname] = useState("닉네임"); // 서버에서 사용자 닉네임 가져오기
  const [gender, setGender] = useState("값호출"); //서버에서 사용자 성별 가져오기
  const [age, setAge] = useState("값호출"); //서버에서 사용자 나이 가져오기
  const [image, setImage] = useState(null);
  const [editingNickname, setEditingNickname] = useState(false);
  const [newNickname, setNewNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");

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
    const newNickname = e.target.value;
    setNewNickname(newNickname);
    setNicknameError(validateNickname(newNickname));
  };

  // 닉네임 저장 핸들러
  const handleSaveNickname = () => {
    const error = validateNickname(newNickname);
    if (error) {
      setNicknameError(error);
    } else {
      setNickname(newNickname);
      setEditingNickname(false);
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

  const handleButtonClick = () => {
    alert("저장되었습니다!");
  };

  // 닉네임 유효성 검사
  const eng = /[a-zA-Z]/;
  const kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const num = /[0-9]/;
  const spc = /[~!@#$%^&*()_+|<>?:{}]/;

  const validateNickname = ({ target: { value: input } }) => {
    if (input.length >= 0 && input.length <= 12 && (eng.test(input) || kor.test(input) || num.test(input) || !spc.test(input))) {
      setNickname(input);
    } else {
      alert("닉네임은 영문, 한글, 숫자를 포함한 12글자 이하여야 하며 특수기호를 포함하지 않아야 합니다.");
    }
  };

  return (
    <div className="ProfileWrap">
      <NavBar />

      <div className="ProfileContainer">
        <div className="ProfileTxt">Profile</div>
        <div className="ProfileContent">
          {/* 이미지, 닉네임 수정 */}
          <div className="imgnic">
            <div className="ProfileimgWrap">
              {/* 이미지를 표시할 곳 */}
              {image ? (
                <img
                  onClick={handleCustomButtonClick}
                  src={image}
                  alt="Uploaded"
                  className="Profileimg"
                />
              ) : (
                <img
                  onClick={handleCustomButtonClick}
                  src={myimg}
                  alt="Default"
                  className="Profileimg"
                />
              )}
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>

          <div className="Profileinputnic">
            {!editingNickname ? (
              <div className="Profilenickname" onClick={handleEditNickname}>
                {nickname}
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  value={newNickname}
                  onChange={handleNicknameChange}
                  onBlur={handleNicknameChange}
                  className="Profilenickname"
                />
                {nicknameError && (
                  <div className="Error">{nicknameError}</div>
                )}
                <button onClick={handleSaveNickname}>저장</button>
              </div>
            )}
          </div>

          <div className="Profileinput">
            <label>성별</label>
            <select
              value={gender}
              onChange={handleGenderChange}
              className="Profilegender"
            >
              <option value="Male">값호출</option>
              <option value="Female">값호출</option>
            </select>
          </div>

          <div className="Profileinput">
            <label>나이</label>
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
              className="Profileage"
            />
          </div>
          <button className="Profilesubmit" onClick={handleButtonClick}>
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
