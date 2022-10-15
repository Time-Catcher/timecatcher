import { atom, selector } from "recoil";

export interface IForm {
  todo: string;
}
export interface IToDo {
  text: string;
  id: number;
}

export const todoState = atom<IToDo[]>({
  key: "todo",
  default: [],
});

// export const todoSelector = selector({
//   key: "todoSelector",
//   get: ({ get }) => {
//     const todo = get(todoState);
//   },
// });
