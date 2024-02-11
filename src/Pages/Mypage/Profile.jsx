/*PATCH /api/v1/user/info HTTP/1.1 (사용자 정보 수정)
GET /api/v1/user HTTP/1.1 (사용자 정보조회)
GET /api/v1/user HTTP/1.1(사용자 정보조회)
* */

import React, { useState, useRef } from "react";  
import "../../Style/Mypage/Profile.css";
import NavBar from "../Nav/Nav.jsx";
import myimg from "./기본이미지.png";

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
    const valid = /^[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{0,12}$/.test(input); /*로그인 4에서 언급한 이유와 같은 이유로 수정해뒀습니다. */

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
                {/* 숨겨진 파일 입력 */}
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
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              onBlur={handleNicknameChange}
              className="Profilenickname"
            />
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
              값호출
              onChange={handleAgeChange}
              className="Profileage"
            />
          </div>
          <button className="Profilesubmit" onClick={handleButtonClick}>저장</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
