import { atom, selector } from "recoil";

export interface IForm {
  todo: string;
}
export interface ITodo {
  text: string;
  id: number;
}

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const completedTodoCount = atom({
  key: "count",
  default: 0,
});
// export const todoSelector = selector({
//   key: "todoSelector",
//   get: ({ get }) => {
//     const todos = get(todoState);
//     return todos;
//   },
// });
