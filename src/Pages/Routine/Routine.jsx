import React, { useState, useEffect } from "react";
import "../../styles/Routine/Routine.css";

const Routine = () => {

  const [activeBtn, setActiveBtn] = useState('morning');
  const [user, setUser] = useState('');

  useEffect(() => {
    fetch('/api/v1/user') 
      .then(response => response.json())
      .then(data => setUser(data.user))
      .catch(error => console.log(error));
  }, []);

  const handleBtnClick = (btnType) => { setActiveBtn(btnType);
  };

  return(
    <div className="Routine_wrap">
      <div className="nav">
        <div className="navBtn1"><AiOutlineUser size="24" color="black" /></div>
        <div className="navBtn2"><AiOutlineMenu size="24" color="black" /></div>
      </div>
      <div className="main">
      <hr />
        <div className="txt">
          <p className="txt1">나를 가꾸는 시간</p>
          <p className="txt2">우리 모두에게는 시간이라는 공평한 것이 주어진다</p>
          <p className="txt3"># {user} 님을 위한 추천</p>
        </div>
        <div className="btn">
          <button className={activeBtn === 'morning' ? 'active' : 'inactive'} onClick={() => handleBtnClick('morning')}>아침</button>
          <button className={activeBtn === 'evening' ? 'active' : 'inactive'} onClick={() => handleBtnClick('evening')}>저녁</button>
          <button className={activeBtn === 'health' ? 'active' : 'inactive'} onClick={() => handleBtnClick('health')}>건강</button>
          <button className={activeBtn === 'mood' ? 'active' : 'inactive'} onClick={() => handleBtnClick('mood')}>기분</button>
        </div>

        <div className="gotoroutine">
          {activeBtn === 'morning' && (
            <>
              <div className="go">미라클 모닝</div>
              <div className="go">하루의 시작</div>
              <div className="go">활기찬 아침</div>
              <div className="go">상쾌한 조깅</div>
            </>
          )}

          {activeBtn === 'evening' && (
            <>
              <div className="go">하루의 마무리</div>
              <div className="go">따뜻한 반신욕</div>
              <div className="go">명상과 기록</div>
              <div className="go">잠들기 전 독서</div>
            </>
          )}

          {activeBtn === 'health' && (
            <>
              <div className="go">나를 가꾸는 시간</div>
              <div className="go">불면증 극복</div>
              <div className="go">우울증 완화</div>
              <div className="go">가족과의 시간</div>
            </>
          )}

          {activeBtn === 'mood' && (
            <>
              <div className="go">자기 관리(PMS)</div>
              <div className="go">우울증 완화</div>
              <div className="go">좌절감이 들 때</div>
              <div className="go">일과 후 휴식</div>
            </>
          )}
        </div>

      </div>

    </div>
    
  );
};

export default Routine;

