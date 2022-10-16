import { atom } from "recoil";

export const restTimeState = atom({
  key: "restTimeState",
  default: {
    restTimeSet: "25-2",
  },
});

export const whiteNoiseState = atom({
  key: "whiteNoiseState",
  default: {
    whiteNoiseSet: "장작 타는 소리",
  },
});

export const strictModeState = atom({
  key: "strictModeState",
  default: {
    strictMode: false,
  },
});

export const darkModeState = atom({
  key: "darkModeState",
  default: {
    darkMode: false,
  },
});
