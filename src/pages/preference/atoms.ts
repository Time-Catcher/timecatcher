import { atom } from "recoil";

// export const restTimeState = atom({
//   key: "restTimeState",
//   default: {
//     restTimeSet: "25-5",
//   },
// });

export const whiteNoiseState = atom({
  key: "whiteNoiseState",
  default: {
    whiteNoiseSet: "소리 없음"
  }
});

export const volumeState = atom<any>({
  key: "volumeState",
  default: 1
});

export const strictModeState = atom({
  key: "strictModeState",
  default: {
    strictMode: false
  }
});

export const darkModeState = atom({
  key: "darkModeState",
  default: {
    darkMode: false
  }
});
