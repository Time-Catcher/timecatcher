import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { completedTodoCount, todoState } from "./atoms";
import styled from "styled-components";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import Modal from "../components/Modal";
import Retrospect from "./retrospect/retrospect";
import { strictModeState } from "./preference/atoms";
import { retroModal } from "../atoms/atoms";

const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TodoBody = styled.div`
  display: flex;
  // width:100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 16px 16px 16px;
  gap: 16px;
  //#575657
  //background: #fffbff;
  background-color: ${(props) => props.theme.bgColor};

  box-sizing: border-box;
`;


const TodoBox = styled.div`
  padding-right: 10px;
  overflow: scroll;
  height: 70%;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 13px;
    height: 8px;
    border-radius: 6px;
    background: rgb(160, 160, 160, 025);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: #8070d4;
    border: 3px solid rgba(0, 0, 0, 0.2);
  }
  border-radius: 16px;
`;


const RecordBtn = styled.button`
  position: fixed;
  bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 405px;
  height: 64px;
  border: none;
  // background: #6750a4;
  // color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.inputBox};
  &:disabled {
    background-color: #ccc;
    color: #999999;
  }
`;

const TodoScroll = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;

type ICount = number;

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [checkCount, setCheckCount] = useState<ICount>(0);
  const completedCount = useRecoilValue(completedTodoCount);

  const setCount = () => {
    setCheckCount((prevCount) => prevCount + 1);
  };

  const [retrospectModalState, setRetrospectModalState] =
    useRecoilState(retroModal);

  const handleChangeRetroModalState = () => {
    setRetrospectModalState(!retrospectModalState);
  };

  return (
    <>
      {/* <GlobalContainer>
      </GlobalContainer> */}
      <TodoBody>
        <CreateTodo />
        <TodoBox>
          {todos.length
            ? todos.map((toDo) => (
                <Todo key={toDo.id} text={toDo.text} id={toDo.id} min={toDo.min} sec={toDo.sec}/>
              ))
            : null}
        </TodoBox>
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
