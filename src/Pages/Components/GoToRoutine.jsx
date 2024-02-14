import styled from 'styled-components';

const Gotoroutine = styled.div`
    display: flex;
    flex-direction: column;
    // @media all and (max-width:1023px) {
    //   margin-left: 6vw;
    // }
`;

const GoButton = styled.button`
    border: 0.2px solid rgb(131, 131, 131);
    border-radius: 20px;
    height: 10vh;
    font-size: 1.4rem;
    margin-bottom: 2vh;
    margin-top: 1.5vh;
    font-weight: 100;
    color: black;
    background-color: white;
    text-align: left;
    padding-left: 5vh;
    width:50vw;
    margin-left:25vw;
    @media all and (max-width:1023px) {
      width: 85vw;
      align-items: center;
      display: flex;
      padding-left: 5vw;
      margin-left: 5vw;
    }
`;

export const GoToRoutine = ({ activeBtn, handleMiracleMorningClick, handleDayStartClick, handleCheerfulClick, handleJoggingClick, handleDayEndClick, handleBathClick, handleMeditationClick, handleReadingClick, handleMyselfClick, handleInsomniaClick, handleDepressionClick, handleFamilyClick, handlePmsClick, handleDepression1Click, handleFrustrationClick, handleRestClick}) => (
    <Gotoroutine>
      {activeBtn === 'morning' && (
        <>
          <GoButton onClick={handleMiracleMorningClick}>미라클 모닝</GoButton>
          <GoButton onClick={handleDayStartClick}>하루의 시작</GoButton>
          <GoButton onClick={handleCheerfulClick}>활기찬 아침</GoButton>
          <GoButton onClick={handleJoggingClick}>상쾌한 조깅</GoButton>
        </>
      )}
      {activeBtn === 'evening' && (
        <>
          <GoButton onClick={handleDayEndClick}>하루의 마무리</GoButton>
          <GoButton onClick={handleBathClick}>따뜻한 반신욕</GoButton>
          <GoButton onClick={handleMeditationClick}>명상과 기록</GoButton>
          <GoButton onClick={handleReadingClick}>잠들기 전 독서</GoButton>
        </>
      )}
      {activeBtn === 'health' && (
        <>
          <GoButton onClick={handleMyselfClick}>나를 가꾸는 시간</GoButton>
          <GoButton onClick={handleInsomniaClick}>불면증 극복</GoButton>
          <GoButton onClick={handleDepressionClick}>우울증 완화</GoButton>
          <GoButton onClick={handleFamilyClick}>가족과의 시간</GoButton>
        </>
      )}
      {activeBtn === 'mood' && (
        <>
          <GoButton onClick={handlePmsClick}>자기 관리 (PMS)</GoButton>
          <GoButton onClick={handleDepression1Click}>우울증 완화</GoButton>
          <GoButton onClick={handleFrustrationClick}>좌절감이 들 때</GoButton>
          <GoButton onClick={handleRestClick}>일과 후 휴식</GoButton>
        </>
      )}
    </Gotoroutine>
  );