import React, { useState, useRef, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import '../../Style/Home/Calendar.css';
import TextInput from './TextInput'; 
import '../../Style/Home/Home9.css';
import NavBar from '../Nav/Nav.jsx';


function Home9() {
const [dateRange, setDateRange] = useState([new Date(), new Date()]);
const [startDate, endDate] = dateRange;
const [isOpen, setIsOpen] = useState(false);
const datePickerRef = useRef();

const handleButtonClick = () => {
    alert("저장되었습니다!");
};

const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div>
    <input 
        ref={ref}
        type="text" 
        value={value} 
        style={{ width: '82%' }}
        onChange={(e) => setDateRange(e.target.value.split(' - ').map(date => new Date(date)))}
    />
    <FaCalendarAlt onClick={onClick} style={{ cursor: 'pointer' }} />
    </div>
));

return (
    <div>
        <NavBar/>
        <div className='Home9Wrap'>
            
            < div id='RouName'>
                <TextInput init="아침루틴" /> 
            </div>
            <div id='UserPK'>
            <div id='SangMe'>
                메모
                <TextInput init="글자 수 제한"/> 
            </div>

        <div id='DayDay'>
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
            <button className='Home9Btn' onClick={handleButtonClick}>완료</button>      
        </div>
        </div>
    </div>
);
}

export default Home9;