import { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  sessionAndBreakState,
  timerDataState,
  timerFunctionState,
  timerModeState,
} from "../../atoms/atoms";
import MainTimer from "../../components/main/MainTimer";
import MainTodoList from "../../components/main/MainTodoList";
import { minutesToDate } from "../../util/minutesToDate";
import {
  BBoMoDesc,
  BBoMoDescCat,
  BBoMoDescHr,
  BBoMoDescModal,
  BBoMoDescTitle,
  BBoMoDescTitleWrapper,
  BBoMoModalQuitButton,
  Main,
  MainDropDown,
  MainDropUp,
  MainPageWrapper,
} from "./MainStyle";

const MainPage = () => {
  const [todoId, setTodoId] = useState<string | null>(null);

  const ssionAndBreak = useRecoilValue(sessionAndBreakState);
  const [sessionAndBreakTime, setSessionAndBreakTime] = useState(ssionAndBreak);
  const setTimerFunction = useSetRecoilState(timerFunctionState);
  const setTimerData = useSetRecoilState(timerDataState);
  const [timerMode, setTimerMode] = useRecoilState(timerModeState);
  const { seconds, minutes, isRunning, start, pause, restart, resume } =
    useTimer({
      expiryTimestamp: minutesToDate(sessionAndBreakTime[timerMode]),
      autoStart: false,
      onExpire: () => {
        if (timerMode === "breakTime") {
          setTimerMode("session");
        } else if (timerMode === "session") {
          setTimerMode("breakTime");
        }
      },
    });
  useEffect(()=>{
    restart(minutesToDate(sessionAndBreakTime[timerMode]),false);
  },[timerMode])
  useEffect(() => {
    setTimerData({ seconds, minutes, isRunning });
    setTimerFunction({ start, pause, restart, resume });
  }, [seconds, minutes, isRunning, start, pause, restart, resume]);

  const [isActiveQuestion, setIsActiveQuestion] = useState(false);

  const handleActiveQuestion = () => {
    setIsActiveQuestion(true);
  };

  const closeActiveQuestion = () => {
    setIsActiveQuestion(false);
  };

  return (
    <Main>
      <MainPageWrapper>
        <InfoModal />
        <MainDropUp src="images/dropUpButton.png" />
        <MainTimer openModal={handleActiveQuestion} />
        <MainTodoList />
        <MainDropDown src="images/dropDownButton.png" />
      </MainPageWrapper>
    </Main>
  );

  function InfoModal() {
    return (
      <>
        {isActiveQuestion ? (
          <BBoMoDescModal>
            <BBoMoDescTitleWrapper>
              <BBoMoDescTitle>
                {`Time Cat'cher`}는 무슨 서비스인가요?
              </BBoMoDescTitle>
              <BBoMoModalQuitButton
                src="images/close.png"
                onClick={closeActiveQuestion}
              />
            </BBoMoDescTitleWrapper>
            <BBoMoDescHr />
            <BBoMoDesc>
              <p>안녕하시렵니냥.</p>
              <p>
                Time Catcher는 당신의 시간을 효율적으로 관리하는 서비스다냥.
              </p>
              <br />

              <p>할일을 적어주라냥.</p>
              <p>
                집중과 휴식의 시간을 25분, 5분 또는 50분,10분으로 무한 반복되게
                할거다냥. 둘 중 하나를 선택해주라냥.
              </p>
              <p>각 할일마다 새로운 사이클이 적용된다냥.</p>
              <br />

              <p>모든 할 일이 끝나면</p>
              <p>오늘을 기록하는 시간을 줄고냥.</p>
              <p>일주일 뒤에는 기록을 모아</p>
              <p>메일을 보내주겠다냥.</p>
              <p>그저 날 따라오면</p>
              <p>어느새 목표는 달성해있을거다냥.</p>
              <br />

              <p>가보자냥.</p>
            </BBoMoDesc>
            <BBoMoDescCat src="images/wizardCat.png" />
          </BBoMoDescModal>
        ) : (
          <></>
        )}
      </>
    );
  }
};

export default MainPage;
