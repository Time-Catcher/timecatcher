import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState, useEffect, useRef } from "react";
import { useTimer } from "react-timer-hook";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  activeTodoSelector,
  activeTodoState,
  sessionAndBreakState,
  timerDataState,
  timerFunctionState,
  timerModeState,
} from "../../atoms/atoms";
import MainTimer from "../../components/main/MainTimer";
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
  MainDropLeft,
  MainDropRight,
  MainPageWrapper,
  TimerTodoWrapper,
} from "./MainStyle";
import addNotification from "react-push-notification";
import Preference from "../preference/preference";
import { LeftDrawer } from "./MainStyle";
import TodoList from "../TodoList";
import Todo from "../Todo";
import { ITodo } from "../atoms";
import { OnMainTodo } from "../../components/main/OnMainTodo";
const MainPage = () => {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [todoId, setTodoId] = useState<string | null>(null);
  const sessionAndBreak = useRecoilValue(sessionAndBreakState);
  const setTimerFunction = useSetRecoilState(timerFunctionState);
  const setTimerData = useSetRecoilState(timerDataState);
  const [timerMode, setTimerMode] = useRecoilState(timerModeState);
  const { seconds, minutes, isRunning, start, pause, restart, resume } =
    useTimer({
      expiryTimestamp: minutesToDate(sessionAndBreak[timerMode]),
      autoStart: false,
      onExpire: () => {
        if (timerMode === "breakTime") {
          whenTimerModeChanged(
            "휴식시간이 끝났다냥!",
            "뽀모도로 타이머 돌리러 가라냥~!",
            "앞으로 정해진 시간동안 열중하길바란다냥~~"
          );

          setTimerMode("session");
        } else if (timerMode === "session") {
          whenTimerModeChanged(
            "휴식시간이다 냥!",
            "얼마 되지 않는 시간이니 소중히 소비하라냥!!",
            "시간이 될때 돌아오겠다냥.그때보자냥!"
          );

          setTimerMode("breakTime");
        }
      },
    });
    const[time,setTime] = useState(0);
  // useEffect(()=>{
  //   console.log(time);
  //   setTime(time+1);
  // },[seconds])
  useEffect(() => {
    restart(minutesToDate(sessionAndBreak[timerMode]), false);
  }, [timerMode, sessionAndBreak]);
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
  const activeTodoId = useRecoilValue(activeTodoState);
  const outModal = useRef<any>();
  const audioPlayer = useRef<any>(null);

  const whenTimerModeChanged = (
    title: string,
    subtitle: string,
    message: string
  ) => {
    addNotification({
      title: title,
      subtitle: subtitle,
      message: message,
      theme: "darkblue",
      native: true, // when using native, your OS will handle theming.
      icon: "images/wizardCat.png",
    });
    audioPlayer.current?.play();
  };
  const toggleLeftDrawer = () => {
    setLeftDrawerOpen((prevState) => !prevState);
  };
  const toggleRightDrawer = () => {
    setRightDrawerOpen((prevState) => !prevState);
  };

  const activeTodo: ITodo | undefined = useRecoilValue(activeTodoSelector);

  return (
    <Main>
      {/* <button onClick={toggleLeftDrawer}>테스트</button> */}
      <LeftDrawer
        className="left-drawer"
        open={leftDrawerOpen}
        onClose={toggleLeftDrawer}
        direction="left"
        size={452}
      >
        <Preference onClose={toggleLeftDrawer} />
      </LeftDrawer>
      <Drawer
        className="right-drawer"
        open={rightDrawerOpen}
        onClose={toggleRightDrawer}
        direction="right"
        size={452}
      >
        <TodoList />
      </Drawer>
      <audio ref={audioPlayer} src="meow.wav" />

      <MainPageWrapper
        ref={outModal}
        onClick={(e) => {
          if (outModal.current === e.target) {
            setIsActiveQuestion(false);
          }
        }}
        >
          <OnMainTodo/>
        <InfoModal />
        <MainDropRight
          src="images/dropUpButton.png"
          onClick={toggleLeftDrawer}
          />
        <TimerTodoWrapper>
          <MainTimer openModal={handleActiveQuestion} />
        </TimerTodoWrapper>

        <MainDropLeft
          src="images/dropDownButton.png"
          onClick={toggleRightDrawer}
        />
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
                집중과 휴식의 시간을 25분, 5분 또는 50분,10분으로 <br /> 무한
                반복되게 할거다냥.
              </p>{" "}
              <br /> <p> 둘 중 하나를 선택해주라냥.</p>
              <p>각 할일마다 새로운 사이클이 적용된다냥.</p>
              <br />
              <p>모든 할 일이 끝나면</p>
              <p>오늘을 기록하는 시간을 줄고냥.</p> <br />
              <p>일주일 뒤에는 기록을 모아</p>
              <p>메일을 보내주겠다냥.</p> <br />
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
