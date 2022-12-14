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
import { todoState } from "../atoms";
import { OnMainTodo } from "../../components/main/OnMainTodo";
import { firebaseConfig } from "../../firebaseConfig";
import { Navigate } from "react-router";
import { firestore } from "../../firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { authState } from "../../atoms/atoms";

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
  //* ????????? ??? ????????? ?????? ?????? ?????? ??????;
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
  /* ????????? ??????????????? ????????? ???  ????????? ??????
  useEffect(() => {
    async function loadTodos() {
      const q = query(collection(firestore, authData.uid));
      const querySnapshot = await getDocs(q);

    async function loadTodos() {
      const q = query(collection(firestore, uid));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      if (querySnapshot) {
        const todosInFirestore: ITodo[] = querySnapshot.docs.map((doc) => ({
          id: doc.data().id,
          text: doc.data().text,
          min: doc.data().min,
          sec: doc.data().sec,
        }));
        console.log(11111111111111);
        setTodolist(todosInFirestore);
      }
    }
    if (uid) {
      loadTodos();
    }
  }, [authState]);

  * ??????
*/
  //*---------------------------------------------------------------------

  const { seconds, minutes, isRunning, start, pause, restart, resume } =
    useTimer({
      expiryTimestamp: minutesToDate(sessionAndBreak[timerMode]),
      autoStart: false,
      onExpire: () => {
        if (timerMode === "breakTime") {
          whenTimerModeChanged(
            "??????????????? ????????????!",
            "???????????? ????????? ????????? ?????????~!",
            "????????? ????????? ???????????? ????????????????????????~~"
          );

          setTimerMode("session");
        } else if (timerMode === "session") {
          whenTimerModeChanged(
            "?????????????????? ???!",
            "?????? ?????? ?????? ???????????? ????????? ???????????????!!",
            "????????? ?????? ??????????????????.???????????????!"
          );

          setTimerMode("breakTime");
        }
      },
    });

    useEffect(() => {
      const titleElement = document.getElementsByTagName("title")[0];
      titleElement.innerHTML = `?????? | ???????????? ???????????? ?????????, ????????????`;
    }, []);

  useEffect(() => {
    restart(minutesToDate(sessionAndBreak[timerMode]), false);
  }, [timerMode, sessionAndBreak]);

  useEffect(() => {
    setTimerData({ seconds, minutes, isRunning });
    setTimerFunction({ start, pause, restart, resume });
  }, [seconds, minutes, isRunning, start, pause, restart, resume]);

  useEffect(() => {
    if (isRunning && activeId.id) {
      //??????????????? ?????? ?????? ???????????? second?????? +1;

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
      {/* <button onClick={toggleLeftDrawer}>?????????</button> */}
      <LeftDrawer
        className="left-drawer"
        open={leftDrawerOpen}
        onClose={toggleLeftDrawer}
        direction="left"
        size={452}
        style = {{maxWidth:"80vw"}}
      >
        <Preference onClose={toggleLeftDrawer} />
      </LeftDrawer>
      <Drawer
        className="right-drawer"
        open={rightDrawerOpen}
        onClose={toggleRightDrawer}
        direction="right"
        size={452}
        style ={{maxWidth:"80vw"}}
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
          <MainTimer openModal={handleActiveQuestion} nickname={authData.displayName} />
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
                {`Time Cat'cher`}??? ?????? ???????????????????
              </BBoMoDescTitle>
              <BBoMoModalQuitButton
                src="images/close.png"
                onClick={closeActiveQuestion}
              />
            </BBoMoDescTitleWrapper>
            <BBoMoDescHr />
            <BBoMoDesc>
              <p>?????????????????????.</p>
              <p>
                Time Catcher??? ????????? ????????? ??????????????? ???????????? ???????????????.
              </p>
              <br />
              <p>????????? ???????????????.</p>
              <p>
                ????????? ????????? ????????? 25???, 5??? ?????? 50???,10????????? <br /> ??????
                ???????????? ????????????.
              </p>{" "}
              <br /> <p> ??? ??? ????????? ??????????????????.</p>
              <p>??? ???????????? ????????? ???????????? ???????????????.</p>
              <br />
              <p>?????? ??? ?????? ?????????</p>
              <p>????????? ???????????? ????????? ?????????.</p> <br />
              <p>????????? ????????? ????????? ??????</p>
              <p>????????? ??????????????????.</p> <br />
              <p>?????? ??? ????????????</p>
              <p>????????? ????????? ????????????????????????.</p>
              <br />
              <p>????????????.</p>
            </BBoMoDesc>
            <BBoMoDescCat src="images/wizardCat.png" />
          </BBoMoDescModal>
        ) : (
          <></>
        )}
      </>
    );
  }
}
export default MainPage;