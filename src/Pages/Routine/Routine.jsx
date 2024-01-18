import React, { useState, useEffect } from "react";
import "../../styles/Routine/Routine.css";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";

const Routine = () => {
  const [activeBtn, setActiveBtn] = useState('morning');
  const [user, setUser] = useState('');
  const [showMiracleMorning, setShowMiracleMorning] = useState(false);
  const [showDayStart, setShowDayStart] = useState(false);
  const [showCheerful, setShowCheerful] = useState(false);
  const [showJogging, setShowJogging] = useState(false);
  const [showDayEnd, setShowDayEnd] = useState(false);
  const [showBath, setShowBath] = useState(false);
  const [showMeditation, setShowMeditation] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [showMyself, setShowMyself] = useState(false);
  const [showInsomnia, setShowInsomnia] = useState(false);
  const [showDepression, setShowDepression] = useState(false);
  const [showFamily, setShowFamily] = useState(false);
  const [showPms, setShowPms] = useState(false);
  const [showDepression1, setShowDepression1] = useState(false);
  const [showFrustration, setShowFrustration] = useState(false);
  const [showRest, setShowRest] = useState(false);
  

  const handleMiracleMorningClick = () => {
    setShowMiracleMorning(true);
    setShowDayStart(false);
    setShowCheerful(false);
    setShowJogging(false);
  };

  const handleDayStartClick = () => {
    setShowDayStart(true);
    setShowMiracleMorning(false);
    setShowCheerful(false);
    setShowJogging(false);
  };

  const handelCheerfulClick = () => {
    setShowMiracleMorning(false);
    setShowDayStart(false);
    setShowCheerful(true);
    setShowJogging(false);
  };

  const handleJoggingClick = () => {
    setShowMiracleMorning(false);
    setShowDayStart(false);
    setShowCheerful(false);
    setShowJogging(true);
  };

  const handleDayEndClick = () => {
    setShowDayEnd(true);
    setShowBath(false);
    setShowMeditation(false);
    setShowReading(false);
  };

  const handleBathClick = () => {
    setShowDayEnd(false);
    setShowBath(true);
    setShowMeditation(false);
    setShowReading(false);
  };

  const handleMeditationClick = () => {
    setShowDayEnd(false);
    setShowBath(false);
    setShowMeditation(true);
    setShowReading(false);
  };

  const handleReadingClick = () => {
    setShowDayEnd(false);
    setShowBath(false);
    setShowMeditation(false);
    setShowReading(true);
  };

  const handleMyselfClick = () => {
    setShowMyself(true);
    setShowInsomnia(false);
    setShowDepression(false);
    setShowFamily(false);
  };

  const handleInsomniaClick = () => {
    setShowMyself(false);
    setShowInsomnia(true);
    setShowDepression(false);
    setShowFamily(false);
  };

  const handleDepressionClick = () => {
    setShowMyself(false);
    setShowInsomnia(false);
    setShowDepression(true);
    setShowFamily(false);
  };

  const handleFamilyClick = () => {
    setShowMyself(false);
    setShowInsomnia(false);
    setShowDepression(false);
    setShowFamily(true);
  };

  const handlePmsClick = () => {
    setShowPms(true);
    setShowDepression1(false);
    setShowFrustration(false);
    setShowRest(false);
  };

  const handleDeperssion1Click = () => {
    setShowPms(false);
    setShowDepression1(true);
    setShowFrustration(false);
    setShowRest(false);
  };

  const handleFrustrationClick = () => {
    setShowPms(false);
    setShowDepression1(false);
    setShowFrustration(true);
    setShowRest(false);
  };

  const handleRestClick = () => {
    setShowPms(false);
    setShowDepression1(false);
    setShowFrustration(false);
    setShowRest(true);
  };


  

  useEffect(() => {
    fetch('/api/v1/user') 
      .then(response => response.json())
      .then(data => setUser(data.user))
      .catch(error => console.log(error));
  }, []);

  const handleBtnClick = (btnType) => {
    setActiveBtn(btnType);
    // 아침, 저녁, 건강, 기분 버튼 클릭 시 showMiracleMorning을 false로 설정
    setShowMiracleMorning(false);
    setShowDayStart(false);
    setShowCheerful(false);
    setShowJogging(false);
    setShowDayEnd(false);
    setShowBath(false);
    setShowMeditation(false);
    setShowReading(false);
    setShowMyself(false);
    setShowInsomnia(false);
    setShowDepression(false);
    setShowFamily(false);
    setShowPms(false);
    setShowDepression1(false);
    setShowFrustration(false);
    setShowRest(false);
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

        {!showMiracleMorning && !showDayStart && !showCheerful && !showJogging && !showDayEnd && !showBath && !showMeditation && !showReading && !showMyself && !showInsomnia && !showDepression && !showFamily && !showPms && !showDepression1 && !showFrustration && !showRest &&(
          <div className="gotoroutine">
            {activeBtn === 'morning' && (
              <>
                <button className="go" onClick={handleMiracleMorningClick}>미라클 모닝</button>
                <button className="go" onClick={handleDayStartClick}>하루의 시작</button>
                <button className="go" onClick={handelCheerfulClick}>활기찬 아침</button>
                <button className="go" onClick={handleJoggingClick}>상쾌한 조깅</button>
              </>
            )}

            {activeBtn === 'evening' && (
              <>
                <button className="go" onClick={handleDayEndClick}>하루의 마무리</button>
                <button className="go" onClick={handleBathClick}>따뜻한 반신욕</button>
                <button className="go" onClick={handleMeditationClick}>명상과 기록</button>
                <button className="go" onClick={handleReadingClick}>잠들기 전 독서</button>
              </>
            )}

            {activeBtn === 'health' && (
              <>
                <button className="go" onClick={handleMyselfClick}>나를 가꾸는 시간</button>
                <button className="go" onClick={handleInsomniaClick}>불면증 극복</button>
                <button className="go" onClick={handleDepressionClick}>우울증 완화</button>
                <button className="go" onClick={handleFamilyClick}>가족과의 시간</button>
              </>
            )}

            {activeBtn === 'mood' && (
              <>
                <button className="go" onClick={handlePmsClick}>자기 관리(PMS)</button>
                <button className="go" onClick={handleDeperssion1Click}>우울증 완화</button>
                <button className="go" onClick={handleFrustrationClick}>좌절감이 들 때</button>
                <button className="go" onClick={handleRestClick}>일과 후 휴식</button>
              </>
            )}
          </div>
        )}

        {/* 미라클 모닝 상태에 따른 화면 표시 */}
        {showMiracleMorning && (
          <div className="main_box">
            <div className="m_txt1">
              미라클 모닝
            </div>
            <div className="m_txt2">
                스스로 정한 시간에 일어나서 하루를 시작해보면 어떨까요?<br />당신 인생의 터닝포인트가 될 거예요
            </div>
            <div className="selectbox"><div className="txtbox">잠자리 정리</div><button className="selectbox_btn">추가</button></div>
            <div className="selectbox"><div className="txtbox">명상</div><button className="selectbox_btn">추가</button></div>
            <div className="selectbox"><div className="txtbox">산책 혹은 런닝머신</div><button className="selectbox_btn">추가</button></div>
            <div className="selectbox"><div className="txtbox">샤워하기</div><button className="selectbox_btn">추가</button></div>
            <div className="selectbox"><div className="txtbox">독서하기</div><button className="selectbox_btn">추가</button></div>
            <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
          </div>
        )}
      {activeBtn === 'morning' && showDayStart && (
          <>
            <div className="main_box">
                  <div className="m_txt1">
                    하루의 시작
                  </div>
                  <div className="m_txt2">
                  어두운 밤에서 새벽을 지나 아침이라는 밝은 빛이<br></br>
                  당신을 맞이하고 있어요<br />
                  당신이 무엇을 하든 일이 잘 되게 해줄거예요
                  </div>
                  <div className="selectbox"><div className="txtbox">물 마시기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">명상</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">오늘 하루 계획 세우기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">옷 갈아입기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">샤워하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}

        {activeBtn === 'morning' && showCheerful && (
          <>
            <div className="main_box">
                <div className="m_txt1">
                  활기찬 아침
                </div>
                <div className="m_txt2">
                어두운 밤에서 새벽을 지나 아침이라는 밝은 빛이<br></br>
                당신을 맞이하고 있어요<br />
                당신이 무엇을 하든 일이 잘 되게 해줄거예요
                </div>
                <div className="selectbox"><div className="txtbox">물 마시기</div><button className="selectbox_btn">추가</button></div>
                <div className="selectbox"><div className="txtbox">명상</div><button className="selectbox_btn">추가</button></div>
                <div className="selectbox"><div className="txtbox">오늘 하루 계획 세우기</div><button className="selectbox_btn">추가</button></div>
                <div className="selectbox"><div className="txtbox">옷 갈아입기</div><button className="selectbox_btn">추가</button></div>
                <div className="selectbox"><div className="txtbox">샤워하기</div><button className="selectbox_btn">추가</button></div>
                <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
            </div>
          </>
        )}


        {activeBtn === 'morning' && showJogging && (
          <>
            <div className="main_box">
                  <div className="m_txt1">
                    상쾌한 조깅
                  </div>
                  <div className="m_txt2">
                  어두운 밤에서 새벽을 지나 아침이라는 밝은 빛이<br></br>
                  당신을 맞이하고 있어요<br />
                  당신이 무엇을 하든 일이 잘 되게 해줄거예요
                  </div>
                  <div className="selectbox"><div className="txtbox">물 마시기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">간단한 간식 섭취</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">이어폰, 물 챙기기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">워밍업 스트레칭</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">러닝</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">샤워하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}

        {showDayEnd && (//이거 맞나
          <>
             <div className="main_box">
                  <div className="m_txt1">
                    하루의 마무리
                  </div>
                  <div className="m_txt2">
                      오늘 하루도 수고 많았어요<br />하루를 <strong>충만하게</strong> 마무리 해보는 건 어떨까요?
                  </div>
                  <div className="selectbox"><div className="txtbox">일기쓰기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">내일 입을 옷 준비</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">샤워</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">스킨 케어</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">취침 명상</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}

        {showBath && (
          <>
            <div className="main_box">
                  <div className="m_txt1">
                    따뜻한 반신욕
                  </div>
                  <div className="m_txt2">
                  오늘 하루 수고 많았을 당신<br />
                  따뜻한 물에서 하루의 노곤함을 풀어보는게 어때요?
                  </div>
                  <div className="selectbox"><div className="txtbox">반신욕 물 받기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">머리 빗기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">반신욕 하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">미지근한 물 마시기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">팩 하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}

        {showMeditation && (
          <>
            <div className="main_box">
                  <div className="m_txt1">
                    명상과 기록
                  </div>
                  <div className="m_txt2">
                  잠들기 전 오늘 있었던 일을 되돌아 보면서 자신에게<br />
                  진정한 휴식을 선물해 보는건 어때요?
                  </div>
                  <div className="selectbox"><div className="txtbox">편한 옷으로 갈아입기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">캔들 켜기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">가습기 켜기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">감사 일기 쓰기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">명상 하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}

        {showReading && (
          <>
            <div className="main_box">
                  <div className="m_txt1">
                    잠들기 전 독서
                  </div>
                  <div className="m_txt2">
                  취침 30분 전 스마트폰을 자제하는 것은 깊은 잠을<br />
                  자는 데에 좋은 효과가 있어요
                  </div>
                  <div className="selectbox"><div className="txtbox">마실 차 준비</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">노트와 펜 준비</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">조명 켜기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">책 읽기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">인상 깊은 문장 기록하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}

        {showMyself && (
          <>
            <div className="main_box">
                  <div className="m_txt1">
                    나를 가꾸는 시간
                  </div>
                  <div className="m_txt2">
                  나를 돌보는 시간이 있나요? 다른 것이 아닌 자신을<br />
                  중심으로 루틴을 만들어 보는 건 어때요?
                  </div>
                  <div className="selectbox"><div className="txtbox">좋아하는 음악 듣기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">샤워하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">스킨 케어</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">마사지 하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">립밤 바르기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}

        {showInsomnia && (
          <>
           <div className="main_box">
                  <div className="m_txt1">
                    불면증 극복
                  </div>
                  <div className="m_txt2">
                  잠에 드는게 힘든가요? 잠에 잘 들 수 있도록 주변 환경을<br />
                  정리하고 차분한 환경을 만들어보는 건 어떨까요?
                  </div>
                  <div className="selectbox"><div className="txtbox">아로마 오일+가습기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">조명 어둡게</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">따뜻한 차 마시기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">가벼운 스트레칭</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">ASMR 듣기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div> 
          </>
        )}

        {showDepression && (
          <>
            <div className="main_box">
                  <div className="m_txt1">
                    우울증 완화
                  </div>
                  <div className="m_txt2">
                  작은 변화는 큰 변화로 이어질 거예요
                  </div>
                  <div className="selectbox"><div className="txtbox">내 감정을 그대로 응시하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">오늘의 기분 쓰기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">감사일기 쓰기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">산책 하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">좋아하는 음악 듣기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}

        {showFamily && (
          <>
            <div className="main_box">
                  <div className="m_txt1">
                    가족과의 시간
                  </div>
                  <div className="m_txt2">
                  수정
                  </div>
                  <div className="selectbox"><div className="txtbox">가족들과 포옹하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">오늘 하루 공유하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">저녁 식사 준비</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">함께 저녁 식사 하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">고마움 표현하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}

        {showPms && (
          <>
            <div className="main_box">
                  <div className="m_txt1">
                    자기 관리 (PMS)
                  </div>
                  <div className="m_txt2">
                  소파에 누워 편안한 시간을 보내는 것도 좋아요
                  </div>
                  <div className="selectbox"><div className="txtbox">물 한 잔 마시기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">진통제 먹기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">전화 알림 끄기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">핫 초코 마시기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">낮잠 자기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">간식 준비</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">영화 보기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}

        {showDepression1 && (
          <>
            <div className="main_box">
                  <div className="m_txt1">
                    우울증 완화
                  </div>
                  <div className="m_txt2">
                  어두운 밤에서 새벽을 지나 아침이라는 밝은 빛이<br></br>
                  당신을 맞이하고 있어요<br />
                  당신이 무엇을 하든 일이 잘 되게 해줄거예요
                  </div>
                  <div className="selectbox"><div className="txtbox">침대 정리</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">커튼 열기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">창문 열기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">물 마시기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">이 닦기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">감정 적기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">오늘의 목표 적어보기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">호흡 운동하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}

        {showFrustration && (
          <>
            <div className="main_box">
                  <div className="m_txt1">
                    좌절감이 들 때
                  </div>
                  <div className="m_txt2">
                  어두운 밤에서 새벽을 지나 아침이라는 밝은 빛이<br></br>
                  당신을 맞이하고 있어요<br />
                  당신이 무엇을 하든 일이 잘 되게 해줄거예요
                  </div>
                  <div className="selectbox"><div className="txtbox">호흡 운동하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">친구나 가족에게 전화하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">감정 적기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">긍정적으로 생각하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">취미 시간 갖기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}

        {showRest && (
          <>
            <div className="main_box">
                  <div className="m_txt1">
                    일과 후 휴식
                  </div>
                  <div className="m_txt2">
                  어두운 밤에서 새벽을 지나 아침이라는 밝은 빛이<br></br>
                  당신을 맞이하고 있어요<br />
                  당신이 무엇을 하든 일이 잘 되게 해줄거예요
                  </div>
                  <div className="selectbox"><div className="txtbox">전화 알림 끄기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">캔들 켜기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">심호흡 하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">음악 듣기</div><button className="selectbox_btn">추가</button></div>
                  <div className="selectbox"><div className="txtbox">취미 활동하기</div><button className="selectbox_btn">추가</button></div>
                  <div className="select_all_div"><button className="select_all">+전체 추가하기</button></div>
              </div>
          </>
        )}


        
      </div>

    </div>
    
  );
};

export default Routine;




//추가 버튼 누르면 나오는 모달->이미 있는 루틴에서 값 가져온 후 추가시키키
//전체 추가시 모든 값 루틴으로 추가시키키
//닉네임 가져오는 거 해결 해보기

//전체 디자인 수정+pc 화면 반응형 수정