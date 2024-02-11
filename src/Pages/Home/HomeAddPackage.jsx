





import React, { useState, useRef, forwardRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import '../../Style/Home/Calendar.css';
import '../../Style/Home/HomeAddPackage.css';
import NavBar from '../Nav/Nav.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

const token = localStorage.getItem('token');


const HomeAddPackage = () => {
  // 상태 변수 및 Ref 선언
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef();
  const [routine, setRoutine] = useState('');
  const [memo, setMemo] = useState('');

  // 버튼 클릭 핸들러
  const handleButtonClick = () => {
    alert("저장되었어요!");
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
      <NavBar/> {/* 네비게이션 바 */}
      <div className='Home9Wrap'> {/* 전체 컨텐츠를 감싸는 Wrapper */}
        <div className='PackageName'> {/* 루틴 이름 입력 부분 */}
          <input 
            type="text"
            value={routine}
            onChange={(e) => setRoutine(e.target.value)}
            onBlur={() => setRoutine(routine || '')}
            placeholder='루틴 이름'
            className='Home9inputboxname'
          />
        </div>
        <div className='Home9inputWrap'> {/* 입력 요소를 감싸는 Wrapper */}
          <div className='Home9input'> {/* 메모 입력 부분 */}
            <div>메모</div>
            <input 
              type="text"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              onBlur={() => setMemo(memo || '')}
              placeholder='글자 수 제한'
              className='Home9inputbox'
            />
          </div>
          <div className='Home9input'> {/* 날짜 선택 부분 */}
            <div>기간</div>
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
          </div>
        </div>
        <div className='BtnWrap'> 
            <Link to="/home"> 
                <button className='Home9Btn' onClick={handleButtonClick}>완료</button>  
            </Link>    
        </div>
      </div>
    </div>
  );
}

export default HomeAddPackage;