
import { TimerResult } from "react-timer-hook";
import { atom } from "recoil";
import { ITodo } from "../pages/atoms";

export interface activeTodo{
  id:Pick<ITodo, "id">

export interface 뽀모도로_휴식 {
  뽀모도로: number;
  휴식: number;
}
export interface SessionAndBreak {
  session: number;
  breakTime: number;
}

export const sessionAndBreakState = atom<SessionAndBreak>({
  key: "SessionAndBreak",
  default: {
    session:1,
    breakTime:5
  },
});

export const timerDataState = atom<Pick<TimerResult, "minutes"|"seconds"|"isRunning">>({
  key: "timerData",
  default: {
    seconds: 0,
    minutes: 0,
    isRunning: false,

  },
});
export const timerFunctionState = atom<Pick<TimerResult, "start" |"pause" | "restart"|"resume" >>({
  key:"timerFunction",
  default:{
    start: () => {return},
    pause: () => {return},
    restart: (newExpiryTimestamp: Date, autoStart?: boolean) => {return},
    resume:()=> {return}
  }
})
type timerMode ="session"|"breakTime"
export const timerModeState = atom<timerMode>({
  key:"timerMode",
  default:"session"
})
// export const breakTimerState = atom<BreakTimerState>({
//     key:"breakTimer",
//     default:{
//     }
// })

export const 뽀모도로_휴식state = atom<뽀모도로_휴식>({
  key: "뽀모도로_휴식",
  default: {
    뽀모도로: new Date().setSeconds(new Date().getSeconds() + 1500),
    휴식: new Date().setSeconds(new Date().getSeconds() + 600),
  },
});

type Auth = {
  uid: string;
  email: string;
  displayName: string;
  isLogined: boolean;
};

export const authState = atom<Auth>({
  key: "auth-state",
  default: { uid: "", displayName: "", isLogined: false } as Auth,
});