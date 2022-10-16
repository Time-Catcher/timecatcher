import { TimerResult } from "react-timer-hook";
import { atom } from "recoil";
import { ITodo } from "../pages/atoms";

export interface activeTodo{
  id:Pick<ITodo, "id">
}
export interface SessionAndBreak {
  session: number;
  breakTime: number;
}

export const sessionAndBreakState = atom<SessionAndBreak>({
  key: "SessionAndBreak",
  default: {
    // session: 25,
    // breakTime: 5
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
