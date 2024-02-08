import React, { useState, useRef, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import '../../Style/Home/Calendar.css';
import TextInput from './TextInput'; 
import '../../Style/Home/Home9.css';
import NavBar from '../Nav/Nav.jsx';
import { Link } from 'react-router-dom';


function Home9() {
const [dateRange, setDateRange] = useState([new Date(), new Date()]);
const [startDate, endDate] = dateRange;
const [isOpen, setIsOpen] = useState(false);
const datePickerRef = useRef();

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
    <div className='Home9Wrap'>
    <NavBar/>
    < div id='RouName'>
    <TextInput init="아침루틴" /> 
    </div>
    <div id='UserPK'>
    <div id='SangMe'>
    <TextInput init="끄적끄적" /> 
    </div>

    <div id='DayDay'>
    <p>시작일자와 종료일자</p>
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
        dateFormat="MM/dd/yy"
        open={isOpen}
        onCalendarClose={() => setIsOpen(false)}
        onCalendarOpen={() => setIsOpen(true)}
    />
        </div>
    </div>
    <div className='BtnWrap'>
    <Link to="/Home">
    <button>완료</button>
</Link>        
</div>
    </div>
    </div>
);
}

export default Home9;