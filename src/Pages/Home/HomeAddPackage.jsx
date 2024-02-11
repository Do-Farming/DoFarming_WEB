import React, { useState, useRef, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import '../../style/Home/Calendar.css';
import '../../style/Home/HomeAddPackage.css';
import NavBar from '../Nav/Nav.jsx';
import { Link } from 'react-router-dom';

function Home9() {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef();
  const [routine, setRoutine] = useState();
  const [memo, setMemo] = useState();

  const handleButtonClick = () => {
    alert("저장되었어요!");
  };

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

  return (
    <div>
      <NavBar/>
      <div className='Home9Wrap'>
        <div className='PackageName'>
          <input 
            type="text"
            value={routine}
            onChange={(e) => setRoutine(e.target.value)}
            onBlur={() => setRoutine(routine)}
            placeholder='루틴 이름'
            className='Home9inputboxname'
          />
        </div>
        <div className='Home9inputWrap'>
          <div className='Home9input'>
            <div>메모</div>
            <input 
              type="text"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              onBlur={() => setMemo(memo)}
              placeholder='글자 수 제한'
              className='Home9inputbox'
            />
          </div>
          <div className='Home9input'>
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

export default Home9;