import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { text } from "stream/consumers";
import { todoState } from "./atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoState);

  return (
    <div>
      <CreateTodo />
      {todos.length
        ? todos.map((toDo) => (
            <Todo key={toDo.id} text={toDo.text} id={toDo.id} />
          ))
        : null}
    </div>
  );
}

// <ToDo  text={toDo.text}  id={toDo.id}/> 이걸 간단하게 줄이면 밑의 코드.
//key안주면 에러남.
// <ToDo key={toDo.id} {...toDo} />
