// import '../../Calendar.css';
// import React, { useState, useRef, forwardRef } from 'react';
// import DatePicker from 'react-datepicker';
// import { FaCalendarAlt } from 'react-icons/fa';
// import NavBar from '../Nav/Nav.jsx';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const HomeWrap = styled.div`
//   width: 50vw;
//   margin-left: 22.5vw;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const HomeBtn = styled.button`
//   margin-top: 15vh;
//   padding: 2.3vh;
//   font-size: 1rem;
//   background-color: gray;
//   color: white;
//   font-weight: bold;
//   text-align: center;
//   cursor: pointer;
//   border-radius: 50px;
//   width: 200px;
//   border: none;

//   &:hover {
//     background-color: #ED8C37;
//     color: white;
//   }
// `;

// const HomeInput = styled.div`
//   width: 300px;
//   height: 78px;
//   border-radius: 15px;
//   background-color: #f6f6f6;
//   color: #5B5B5B;
//   margin: 20px 0;
//   padding-left: 25px;
//   font-size: 20px;
//   display: flex;
//   margin-bottom: 5vh;
//   align-items: center;
// `;

// const PackageName = styled.div`
//   border-bottom: 1px solid black;
//   width: 130px;
//   display: flex;
//   align-items: center;
//   text-align: center;
//   justify-content: center;
//   margin-top: 12vh;
//   margin-bottom: 9vh;
// `;

// const HomeInputBoxName = styled.input`
//   width: 130px;
//   outline: none;
//   border: none;
//   background-color: inherit;
//   font-size: 20px;
//   display: flex;
//   align-items: center;
//   text-align: center;
//   justify-content: center;
//   padding-bottom: 5px;
// `;

// const HomeInputBox = styled.input`
//   outline: none;
//   border: none;
//   background-color: inherit;
//   font-size: 15px;
//   display: flex;
//   align-items: center;
//   text-align: right;
//   justify-content: center;
//   border-radius: 50px;
//   margin-left: 50px;
//   width: 180px;
//   margin-right: 10px;
// `;

// const HomeInputBoxDate = styled.input`
//   width: 56%;
//   border: none;
//   background-color: inherit;
//   outline: none;
//   margin-left: 80px;
//   font-size: 15px;
//   color: #5B5B5B;
//   padding-bottom: 7px;
// `;

// const HomeInputBoxDateIcon = styled(FaCalendarAlt)`
//   cursor: pointer;
// `;

// function Home9() {
//   const [dateRange, setDateRange] = useState([new Date(), new Date()]);
//   const [startDate, endDate] = dateRange;
//   const [isOpen, setIsOpen] = useState(false);
//   const datePickerRef = useRef();
//   const [routine, setRoutine] = useState();
//   const [memo, setMemo] = useState();

//   const handleButtonClick = () => {
//     alert("저장되었어요!");
//   };

//   const CustomInput = forwardRef(({ value, onClick }, ref) => (
//     <div>
//       <HomeInputBoxDate 
//         ref={ref}
//         type="text" 
//         value={value} 
//         readOnly
//         onChange={(e) => setDateRange(e.target.value.split(' - ').map(date => new Date(date)))}
//       />
//       <HomeInputBoxDateIcon onClick={onClick}/>
//     </div>
//   ));

//   return (
//     <div>
//       <NavBar/>
//       <HomeWrap>
//         <PackageName>
//           <HomeInputBoxName 
//             type="text"
//             value={routine}
//             onChange={(e) => setRoutine(e.target.value)}
//             onBlur={() => setRoutine(routine)}
//             placeholder='루틴 이름'
//           />
//         </PackageName>
//         <div className='Home9inputWrap'>
//           <HomeInput>
//             <div>메모</div>
//             <HomeInputBox 
//               type="text"
//               value={memo}
//               onChange={(e) => setMemo(e.target.value)}
//               onBlur={() => setMemo(memo)}
//               placeholder='글자 수 제한'
//             />
//           </HomeInput>
//           <HomeInput>
//             <div>기간</div>
//             <DatePicker
//               ref={datePickerRef}
//               selected={startDate}
//               onChange={(update) => {
//                 setDateRange(update);
//               }}
//               startDate={startDate}
//               endDate={endDate}
//               selectsRange
//               customInput={<CustomInput />}
//               dateFormat="yy/MM/dd"
//               open={isOpen}
//               onCalendarClose={() => setIsOpen(false)}
//               onCalendarOpen={() => setIsOpen(true)}
//             />
//           </HomeInput>
//         </div>
//         <div className='BtnWrap'>
//             <Link to="/home">
//                 <HomeBtn onClick={handleButtonClick}>완료</HomeBtn>  
//             </Link>    
//         </div>
//       </HomeWrap>
//     </div>
//   );
// }

// export default Home9;




import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import NavBar from '../Nav/Nav.jsx';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

function Home9() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [routine, setRoutine] = useState('');
  const [memo, setMemo] = useState('');

  const handleButtonClick = () => {
    alert("저장되었어요!");
  };

  return (
    <div>
      <NavBar/>
      <HomeWrap>
        <PackageName>
          <HomeInputBoxName 
            type="text"
            value={routine}
            onChange={(e) => setRoutine(e.target.value)}
            onBlur={() => setRoutine(routine)}
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
              onBlur={() => setMemo(memo)}
              placeholder='글자 수 제한'
            />
          </HomeInput>
          <HomeInput>
            <Datename>시작일</Datename>
            <HomeInputBox 
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </HomeInput>
          <HomeInput>
            <Datename>마감일</Datename>
            <HomeInputBox 
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </HomeInput>
        </div>
        <div className='BtnWrap'>
            <Link to="/home">
                <HomeBtn onClick={handleButtonClick}>완료</HomeBtn>  
            </Link>    
        </div>
      </HomeWrap>
    </div>
  );
}

export default Home9;
