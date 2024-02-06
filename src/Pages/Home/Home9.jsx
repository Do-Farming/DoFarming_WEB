import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import '../../Styles/Home/Home9.css';
import TextInput from './TextInput'; 
import '../../Styles/Home/EditableBox.css';

function Home9() {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const CustomInput = ({ value, onClick }) => (
    <div>
      <input 
        type="text" 
        value={value} 
        style={{ width: '82%' }}
        onChange={e => setDateRange(e.target.value.split(' - ').map(date => new Date(date)))}
      />
      <FaCalendarAlt onClick={onClick} style={{cursor: 'pointer'}} />
    </div>
  );

  return (
    <div>
      <TextInput className=''init="아침루틴" /> 
      <TextInput init="끄적끄적" /> 
      <h2>시작일자와 종료일자</h2>
      <DatePicker
        ref={ref}
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
  );
}

export default Home9;
