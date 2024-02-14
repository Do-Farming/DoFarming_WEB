





import React, { useState, useRef, forwardRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import NavBar from '../Nav/Nav.jsx';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import styled from 'styled-components';

const token = localStorage.getItem('authToken');

const HomeWrap = styled.div`
  width: 50vw;
  margin-left: 22.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeBtn = styled.button`
  margin-top: 10vh;
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

const HomeInput = styled.div`
  width: 300px;
  height: 78px;
  border-radius: 15px;
  background-color: #f6f6f6;
  color: #5B5B5B;
  margin: 20px 0;
  padding-left: 25px;
  font-size: 20px;
  display: flex;
  margin-bottom: 5vh;
  align-items: center;
`;

const PackageName = styled.div`
  border-bottom: 1px solid black;
  width: 130px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 12vh;
  margin-bottom: 9vh;
`;

const HomeInputBoxName = styled.input`
  width: 130px;
  outline: none;
  border: none;
  background-color: inherit;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-bottom: 5px;
`;

const HomeInputBox = styled.input`
  outline: none;
  border: none;
  background-color: inherit;
  font-size: 15px;
  display: flex;
  align-items: center;
  text-align: right;
  justify-content: center;
  border-radius: 50px;
  margin-left: 50px;
  width: 180px;
  margin-right: 10px;
  color:#5B5B5B;
`;

const Datename = styled.div`
  width:100px;
`;

const HomeAddPackage = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef();
  const [routine, setRoutine] = useState('');
  const [memo, setMemo] = useState('');
  const navigate = useNavigate(); 

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        'https://dofarming.duckdns.org/api/v1/track',
        {
          content: `${routine}, ${memo}`,
          startDate: startDate.toISOString().substring(0, 10),
          endDate: endDate.toISOString().substring(0, 10),
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        alert('저장되었어요!');
        navigate('/home'); 
      } else {
        alert('저장에 실패했어요!');
      }
    } catch (error) {
      console.error(error);
      alert('저장에 실패했어요!');
    }
  };

  // 커스텀 input 컴포넌트
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div>
      <input 
        ref={ref}
        type="text" 
        value={value} 
        readOnly
        className="Home9inputboxDate"
        onChange={(e) => setDateRange(e.target.value.split(' - ').map(date => new Date(date)))}
      />
      <FaCalendarAlt onClick={onClick} className='Home9inputboxDateIcon'/>
    </div>
  ));

  // 서버로 GET 요청을 보내는 함수
  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('token'); // LocalStorage에서 토큰 가져오기
      if (token) {
        const apiUrl = "https://dofarming.duckdns.org";
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.isRegistered) {
          navigate("/home");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 컴포넌트가 마운트될 때 사용자 정보를 가져오는 효과
  useEffect(() => {
    fetchUserInfo();
  }, []);

  // JSX 반환
  return (
    <div>
      <NavBar/>
      <HomeWrap>
        <PackageName>
          <HomeInputBoxName 
            type="text"
            value={routine}
            onChange={(e) => setRoutine(e.target.value)}
            onBlur={() => setRoutine(routine || '')}
            placeholder='루틴 이름'
          />
        </PackageName>
        <div className='Home9inputWrap'>
          <HomeInput>
            <div>메모</div>
            <HomeInputBox 
              type="text"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              onBlur={() => setMemo(memo || '')}
              placeholder='글자 수 제한'
            />
          </HomeInput>
          <HomeInput>
            <Datename>기간</Datename>
            <DatePicker
              ref={datePickerRef}
              selected={startDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              customInput={<CustomInput />}
              dateFormat="yy/MM/dd"
              open={isOpen}
              onCalendarClose={() => setIsOpen(false)}
              onCalendarOpen={() => setIsOpen(true)}
            />
          </HomeInput>
        </div>
        <div className='BtnWrap'> 
            <HomeBtn onClick={handleButtonClick}>완료</HomeBtn>  
        </div>
      </HomeWrap>
    </div>
  );
}

export default HomeAddPackage;
