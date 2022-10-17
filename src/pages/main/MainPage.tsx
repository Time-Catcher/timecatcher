import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { CircleMenu, CircleMenuItem, TooltipPlacement } from "react-circular-menu";
import { FaMountain, FaCloudShowersHeavy, FaMoon, FaHome } from 'react-icons/fa';
import { BsSunsetFill } from 'react-icons/bs';
import { useState, useEffect, useRef } from "react";
import { useTimer } from "react-timer-hook";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
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
  MainCircleTheme,
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
import { ITodo, todoState } from "../atoms";
import { OnMainTodo } from "../../components/main/OnMainTodo";
import { firebaseConfig } from "../../firebaseConfig";
import { Navigate } from "react-router";
import { firestore } from "../../firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { authState } from "../../atoms/atoms";
import styled from "styled-components";

// import NotificationSound from "../../asset/notification-sound.mp3"
// import React, { useState } from 'react'
// import MainTimer from '../../components/main/MainTimer';
// import MainTodoList from '../../components/main/MainTodoList';
// import { BBoMoDesc, BBoMoDescCat, BBoMoDescHr, BBoMoDescModal, BBoMoDescTitle, BBoMoDescTitleWrapper, BBoMoModalQuitButton, Main, MainDropDown, MainDropUp, MainPageWrapper } from './MainStyle';
// import Mocktest from "./Mocktest";


const MainPage = () => {
  const _session_key = `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`;
  if (!sessionStorage.getItem(_session_key)) {
    return <Navigate to="/" />;
  }
  const activeId = useRecoilValue(activeTodoState);
  const [, setTodolist] = useRecoilState(todoState);

  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const sessionAndBreak = useRecoilValue(sessionAndBreakState);
  const setTimerFunction = useSetRecoilState(timerFunctionState);
  const setTimerData = useSetRecoilState(timerDataState);
  const [timerMode, setTimerMode] = useRecoilState(timerModeState);
  const [themeValue, setThemeValue] = useState('');
  //* 로그인 시 세션에 담긴 유저 정보 담기;
  const [authData, setAuthData] = useRecoilState(authState);
  useEffect(() => {
    const _session_key = `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`;
    const userData = sessionStorage.getItem(_session_key);
    if (userData) {
      const { uid, email, displayName } = JSON.parse(userData).providerData[0];
      setAuthData({ uid, email, displayName });
    }
  }, []);

  const handleSetTheme = (themeValue:string) => {
    setThemeValue(themeValue);
  }
  //* 파이어 베이스에서 로그인 시  데이터 요청
  useEffect(() => {
    async function loadTodos() {
      const q = query(collection(firestore, authData.uid));
      const querySnapshot = await getDocs(q);

      if (querySnapshot) {
        const todosInFirestore: ITodo[] = querySnapshot.docs.map((doc) => ({
          id: doc.data().id,
          text: doc.data().text,
          min: doc.data().min,
          sec: doc.data().sec,
        }));
        setTodolist(todosInFirestore);
      }
    }

    if (authData.uid) {
      loadTodos();
    }
  }, [setTodolist]);

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

  useEffect(() => {
    restart(minutesToDate(sessionAndBreak[timerMode]), false);
  }, [timerMode, sessionAndBreak]);

  useEffect(() => {
    setTimerData({ seconds, minutes, isRunning });
    setTimerFunction({ start, pause, restart, resume });
  }, [seconds, minutes, isRunning, start, pause, restart, resume]);

  useEffect(() => {
    if (isRunning && activeId.id) {
      //포커스되고 있는 투두 아이디의 second값을 +1;

      setTodolist((prev) =>
        prev.map((todo) =>
          todo.id === activeId.id
            ? {
                ...todo,
                min: todo.sec === 59 ? todo.min + 1 : todo.min,
                sec: todo.sec === 59 ? 0 : todo.sec + 1,
              }
            : todo
        )
      );
    }
  }, [isRunning, activeId.id, seconds]);

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

  return (
    <Main>
      <MainCircleTheme
        startAngle={-90}
        rotationAngle={180}
        itemSize={2}
        radius={5}>
        <CircleMenuItem
          tooltip="Mountain"
          tooltipPlacement={TooltipPlacement.Right}
          onClick={()=>{handleSetTheme("Mountain")}}
        >
          <FaMountain/>
        </CircleMenuItem>
        <CircleMenuItem
          tooltip="SunSet"
          onClick={()=>{handleSetTheme("SunSet")}}>
          <BsSunsetFill/>
        </CircleMenuItem>
        <CircleMenuItem
          tooltip="Night"
          onClick={()=>{handleSetTheme("Night")}}>
          <FaMoon/>
        </CircleMenuItem>
        <CircleMenuItem
          tooltip="Default"
          onClick={()=>{handleSetTheme("Default")}}
          >
            <FaHome/>
        </CircleMenuItem>
      </MainCircleTheme>
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
        themeValue={themeValue}
        onClick={(e) => {
          if (outModal.current === e.target) {
            setIsActiveQuestion(false);
          }
        }}
      >
        <OnMainTodo />
        <InfoModal />
        <MainDropRight
          src="images/dropUpButton.png"
          onClick={toggleLeftDrawer}
        />
        <TimerTodoWrapper>
          <MainTimer openModal={handleActiveQuestion} nickname={authData.displayName}/>
        </TimerTodoWrapper>

        <MainDropLeft
          src="images/dropDownButton.png"
          onClick={toggleRightDrawer}
        />
      </MainPageWrapper>
      {/* <Mocktest /> */}
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


