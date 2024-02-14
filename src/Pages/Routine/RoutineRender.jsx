import ButtonGroup from '../Components/ButtonGroup';
import { MiracleMorning } from "../Components/MiracleMorning";
import { DayStart } from "../Components/DayStart";
import { Cheerful } from "../Components/Cheerful";
import { Jogging } from "../Components/Jogging";
import { DayEnd } from "../Components/DayEnd";
import { Bath } from "../Components/Bath";
import { Meditation } from "../Components/Meditation";
import { Reading } from "../Components/Reading";
import { Myself } from "../Components/Myself";
import { Insomnia } from "../Components/Insomnia";
import { Depression } from "../Components/Depression";
import { Family } from "../Components/Family";
import { Pms } from "../Components/Pms";
import { Depression1 } from "../Components/Depression1";
import { Frustration } from "../Components/Frustration";
import { Rest } from "../Components/Rest";
import { GoToRoutine } from '../Components/GoToRoutine';

const RoutineRender = ({
  activeBtn,
  showMiracleMorning,
  showDayStart,
  showCheerful,
  showJogging,
  showDayEnd,
  showBath,
  showMeditation,
  showReading,
  showMyself,
  showInsomnia,
  showDepression,
  showFamily,
  showPms,
  showDepression1,
  showFrustration,
  showRest,
  handleBtnClick,
  handleMiracleMorningClick,
  handleDayStartClick,
  handleCheerfulClick,
  handleJoggingClick,
  handleDayEndClick,
  handleBathClick,
  handleMeditationClick,
  handleReadingClick,
  handleMyselfClick,
  handleInsomniaClick,
  handleDepressionClick,
  handleFamilyClick,
  handlePmsClick,
  handleDepression1Click,
  handleFrustrationClick,
  handleRestClick,
  user
}) => {
  return (
    <div className="main">
      <div className="txt">
        <div className="txt1">나를 가꾸는 시간</div>
        <div className="txt2">우리 모두에게는 <strong>시간</strong>이라는<br />공평한 것이 주어진다</div>
        <div className="txt3"># {user}값받아오기 님을 위한 추천</div>
      </div>
      <div className="RoutineContainer">
        <ButtonGroup activeBtn={activeBtn} handleBtnClick={handleBtnClick} />

        {!showMiracleMorning && !showDayStart && !showCheerful && !showJogging && !showDayEnd && !showBath && !showMeditation && !showReading && !showMyself && !showInsomnia && !showDepression && !showFamily && !showPms && !showDepression1 && !showFrustration && !showRest && <GoToRoutine activeBtn={activeBtn} handleMiracleMorningClick={handleMiracleMorningClick} handleDayStartClick={handleDayStartClick} handleCheerfulClick={handleCheerfulClick} handleJoggingClick={handleJoggingClick} handleDayEndClick={handleDayEndClick} handleBathClick={handleBathClick} handleMeditationClick={handleMeditationClick} handleReadingClick={handleReadingClick} handleMyselfClick={handleMyselfClick} handleInsomniaClick={handleInsomniaClick} handleDepressionClick={handleDepressionClick} handleFamilyClick={handleFamilyClick} handlePmsClick={handlePmsClick} handleDepression1Click={handleDepression1Click} handleFrustrationClick={handleFrustrationClick} handleRestClick={handleRestClick}/>
          }

        {/* 미라클 모닝 상태에 따른 화면 표시 */}
        {showMiracleMorning && <MiracleMorning />}
        {activeBtn === 'morning' && showDayStart && <DayStart />}
        {activeBtn === 'morning' && showCheerful && <Cheerful />}
        {activeBtn === 'morning' && showJogging && <Jogging />}
        {showDayEnd && <DayEnd />}
        {showBath && <Bath />}
        {showMeditation && <Meditation />}
        {showReading && <Reading />}
        {showMyself && <Myself />}
        {showInsomnia && <Insomnia />}
        {showDepression && <Depression />}
        {showFamily && <Family />}
        {showPms && <Pms />}
        {showDepression1 && <Depression1 />}
        {showFrustration && <Frustration />}
        {showRest && <Rest />}
      </div>
    </div>
  );
};

export default RoutineRender;
