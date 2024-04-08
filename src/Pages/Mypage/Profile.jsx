import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import NavBar from "../Nav/Nav.jsx";
import axios from "axios";
import myimg from "./eximg.png";

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
    const [nickname, setnickname] = useState(""); // 서버에서 사용자 닉네임 가져오기
    const [age, setage] = useState(""); //서버에서 사용자 나이 가져오기
    const [gender, setgender] = useState(""); //서버에서 사용자 성별 가져오기
    const [profileImageUrl, setProfileImageUrl] = useState(""); // 사용자의 프로필 이미지 URL
    
    const fileInputRef = useRef(null);

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const fetchUserInfo = async () => {
        try {
            const apiUrl = "https://dofarming.duckdns.org/api/v1/user";
            const token = localStorage.getItem('authToken');

            if (token) {
                const response = await axios.get(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const userData = response.data;
                setnickname(userData.nickname);
                setgender(userData.gender);
                setage(userData.age);
                setProfileImageUrl(userData.profileImageUrl);
            }
        } catch (error) {
            console.error("Error fetching user info:", error);
        }
    };

    const handleImageChange = async (e) => {
        const selectedImage = e.target.files[0];
        const formData = new FormData();
        formData.append("multipartFile", selectedImage);

        try {
            const imageUrlApiUrl = "https://dofarming.duckdns.org/api/v1/user/image";
            const userInfoApiUrl = "https://dofarming.duckdns.org/api/v1/user";
            const token = localStorage.getItem('authToken');

            if (token) {
                await axios.put(imageUrlApiUrl, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    },
                });

                const response = await axios.get(userInfoApiUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const userData = response.data;
                setnickname(userData.nickname);
                setgender(userData.gender);
                setage(userData.age);
                setProfileImageUrl(userData.profileImageUrl);
            }
        } catch (error) {
            console.error("Error uploading profile image:", error);
        }
    };

    const updateUserInfo = async () => {
        try {
            const apiUrl = "https://dofarming.duckdns.org/api/v1/user/info";
            const token = localStorage.getItem('authToken');

            if (token) {
                const response = await axios.patch(apiUrl, {
                    nickname,
                    gender,
                    age,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log("User info updated successfully");
                alert("저장되었습니다!");
            }
            
            if (age === "0") {
                alert("The age cannot be set to 0.");
                return;
            }

        } catch (error) {
            console.error("Error updating user info:", error);
        }
    };

    const NicknameCheck = (e) => {
        const input = e.target.value;
        const valid = /^[A-Za-z1-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{0,12}$/.test(input); 
        
        if (valid) {
          setnickname(input);
        } else {
          alert("Nicknames must be at least 1 to 12 characters, including English, Korean, and numbers, and must not contain special symbols.");
        }
    };

    const AgeCheck = (e) => {
        const input = e.target.value;
      
        if (isNaN(input)) {
          alert("Only numbers can be entered.");
          return;
        }
      
        const valid = /^[0-9]{0,3}$/.test(input);
      
        if (valid) {
          setage(input);
        } else {
          alert("The age must be no more than three digits.");
        }
    
        if (input === "0") {
          alert("The age cannot be set to 0.");
          return;
        }
    };

    const handleGenderChange = (e) => {
        setgender(e.target.value);
    };

    return (
        <ProfileWrap>
            <NavBar />
            <ProfileContainer>
                <ProfileTxt>Profile</ProfileTxt>
                <ProfileContent>
                    <ProfileimgWrap>
                        <Profileimg
                            onClick={() => fileInputRef.current.click()}
                            src={profileImageUrl || myimg}
                            alt="Profile"
                        />
                        <div>
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
                            onChange={NicknameCheck}
                            onBlur={NicknameCheck}
                        />
                    </Profileinputnic>

                    <Profileinput>
                        <label>성별</label>
                        <Profilegender
                            value={gender}
                            onChange={handleGenderChange}
                            onBlur={handleGenderChange}
                        >
                            <option value="MALE">남성</option>
                            <option value="FEMALE">여성</option>
                        </Profilegender>
                    </Profileinput>

                    <Profileinput>
                        <label>나이</label>
                        <Profileage
                            type="number"
                            value={age}
                            onChange={AgeCheck}
                            onBlur={AgeCheck}
                        />
                    </Profileinput>
                    <Profilesubmit onClick={updateUserInfo}>
                        저장하기
                    </Profilesubmit>
                </ProfileContent>
            </ProfileContainer>
        </ProfileWrap>
    );
};

export default Profile;
