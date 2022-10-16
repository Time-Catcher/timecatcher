import { atom, selector } from "recoil";
import { activeTodoSelector, activeTodoState } from "../atoms/atoms";

export interface IForm {
  todo: string;
}
export interface ITodo {
  text: string;
  id: number;
  min:number;// 초기준입니다. util함수로 변환해서 사용해야 합니다.
  sec:number;// 초기준입니다. util함수로 변환해서 사용해야 합니다.
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

// export const activeTodoSpendTimeState = selector({
//   key: "todoSpendTimeSelector",
//   get:({get}) =>{
//     const activeTodo = get(activeTodoSelector);
//     if(activeTodo){
//       return activeTodo.spendTime;
//     }
//     else{
//       return undefined;
//     }
//   },
//   set:({set,get},newValue)=>{
//       const activeTodo = get(activeTodoSpendTimeState);
//       if(activeTodo){
//           set(activeTodoSpendTimeState,newValue);
//       }
//   }
// })