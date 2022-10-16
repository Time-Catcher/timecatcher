import { atom } from "recoil";

export interface 뽀모도로_휴식 {
  뽀모도로: number;
  휴식: number;
}

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