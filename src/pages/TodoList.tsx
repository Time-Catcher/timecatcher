import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { completedTodoCount, todoState } from "./atoms";
import styled from "styled-components";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import Modal from "../components/Modal";
import Retrospect from "./retrospect/retrospect";
import { strictModeState } from "./preference/atoms";

const GlobalContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoBody = styled.div`
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 16px 16px 16px;
  gap: 16px;
  background: #fffbff;
  border-radius: 15px 15px 0px 0px;
  box-sizing: border-box;
`;

const RecordBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 405px;
  height: 64px;
  background: #6750a4;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  &:disabled {
    background-color: #ccc;
    color: #999999;
  }
`;

type ICount = number;

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [checkCount, setCheckCount] = useState<ICount>(0);
  const completedCount = useRecoilValue(completedTodoCount);

  const setCount = () => {
    setCheckCount((prevCount) => prevCount + 1);
  };

  const [retrospectModalState, setRetrospectModalState] = useState(false);

  const handleChangeRetroModalState = () => {
    setRetrospectModalState(!retrospectModalState);
  };

  return (
    <>
      {/* <GlobalContainer>
      </GlobalContainer> */}
      <TodoBody>
        <CreateTodo />
        {todos.length
          ? todos.map((toDo) => (
              <Todo key={toDo.id} text={toDo.text} id={toDo.id} />
            ))
          : null}
        <RecordBtn
          disabled={!(completedCount === todos.length && todos.length > 0)}
          onClick={handleChangeRetroModalState}
        >
          회고 버튼
        </RecordBtn>

        <Modal modalState={retrospectModalState}>
          <Retrospect handleExit={handleChangeRetroModalState}></Retrospect>
        </Modal>
      </TodoBody>
    </>
  );
}

// <ToDo  text={toDo.text}  id={toDo.id}/> 이걸 간단하게 줄이면 밑의 코드.
//key안주면 에러남.
// <ToDo key={toDo.id} {...toDo} />
