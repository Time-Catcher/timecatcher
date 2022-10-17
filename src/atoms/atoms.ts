import { TimerResult } from "react-timer-hook";
import { atom, selector } from "recoil";
import { ITodo, todoState } from "../pages/atoms";

export interface activeTodo {
  id: Pick<ITodo, "id"> | number | undefined;
}

export const activeTodoState = atom<activeTodo>({
  key: "activeTodo",
  default: { id: undefined },
});

export interface SessionAndBreak {
  session: number;
  breakTime: number;
}

export const sessionAndBreakState = atom<SessionAndBreak>({
  key: "SessionAndBreak",
  default: {
    session: 25,
    breakTime: 5,
  },
});

export const timerDataState = atom<
  Pick<TimerResult, "minutes" | "seconds" | "isRunning">
>({
  key: "timerData",
  default: {
    seconds: 0,
    minutes: 0,
    isRunning: false,
  },
});
export const timerFunctionState = atom<
  Pick<TimerResult, "start" | "pause" | "restart" | "resume">
>({
  key: "timerFunction",
  default: {
    start: () => {
      return;
    },
    pause: () => {
      return;
    },
    restart: (newExpiryTimestamp: Date, autoStart?: boolean) => {
      return;
    },
    resume: () => {
      return;
    },
  },
});
type timerMode = "session" | "breakTime";
export const timerModeState = atom<timerMode>({
  key: "timerMode",
  default: "session",
});
// export const breakTimerState = atom<BreakTimerState>({
//     key:"breakTimer",
//     default:{
//     }
// })

export const activeTodoSelector = selector({
  key: "ActiveTodoSelector",
  get: ({ get }) => {
    const activeTodoId = get(activeTodoState);
    if (activeTodoId.id != undefined) {
      const todoList = get(todoState);
      return todoList.find((element) => element.id === activeTodoId.id);
    } else {
      return undefined;
    }
  },
  set: ({ set, get }, newValue) => {
    const activeTodo = get(activeTodoSelector);
    set(activeTodoSelector, newValue);
  },
});

type Auth = {
  uid: string;
  email: string;
  displayName: string;
};

export const authState = atom<Auth>({
  key: "auth-state",
  default: { uid: "", email: "", displayName: "" } as Auth,
});

export const retroModal = atom({
  key: "show-atom",
  default: false,
});
