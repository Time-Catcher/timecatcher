import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  /*activeTodoSpendTimeState,*/ completedTodoCount,
  ITodo,
  todoState,
} from "./atoms";
import PomoCount from "./img/Pomocounter.png";
import Dots from "./img/Dot.png";
import Chk from "./img/checkbox.png";
import {
  activeTodoSelector,
  activeTodoState,
  timerDataState,
} from "../atoms/atoms";
import useFireReq from "../hooks/useFireReq";

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 421px;
  height: 543px;
  gap: 16px;
  padding: 16px;
  background: #fffbff;
  border-radius: 15px;
`;

const TodoItem = styled.div<IsChecked>`
  text-decoration: ${(props) => (props.isChecked ? "line-through" : null)};
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  margin-bottom: 15px;
  width: 389px;
  height: 64px;
  color: ${(props) => (props.isChecked ? "#282828" : "#7150B4")};
  background-color: ${(props) => (props.isChecked ? "#4b4b4cbe" : "#fffbff")};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const ChkBox = styled.div`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
  margin-left: 10px;
  background: url(${Chk}) center;
  background-size: cover;
`;

const PomoCounter = styled.div`
  border: none;
  width: 24px;
  height: 18px;
  background: url(${PomoCount}) center;
`;

const EditBtn = styled.button`
  position: absolute;
  right: 10px;
  border: none;
  width: 24px;
  height: 24px;
  background: url(${Dots}) center;
  &:hover {
    cursor: pointer;
  }
`;

const EditGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 150px;
  height: 20px;
  bottom: 1px;
  padding-bottom: 5px;
  right: 30px;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 10px;

    position: relative;
    width: 60px;
    height: 20px;
    background: #fffbff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    border-color: white;
  }
`;

interface IsChecked {
  isChecked: boolean;
}

type Count = (test: number) => void;

export default function Todo({ text, id, min, sec }: ITodo) {
  const [editOpen, setEditOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const setCount = useSetRecoilState(completedTodoCount);
  const setTodo = useSetRecoilState(todoState);
  const [editMode, setEditMode] = useState(false);
  const editInputRef = useRef<HTMLInputElement>(null);
  const { editTodoFireBase, removeTodoFireBase } = useFireReq();

  const [activateTodo, setActivateTodo] = useRecoilState(activeTodoState);
  const { seconds } = useRecoilValue(timerDataState);
  //  const[activeTodoSpendTime,setActivateTodoSpendTime] = useRecoilState(activeTodoSpendTimeState);

  //  useEffect(()=>{
  //   if(activeTodoSpendTime){
  //     setActivateTodoSpendTime(activeTodoSpendTime+1);
  //     console.log(activeTodoSpendTime);
  //   }

  //  },[seconds])
  const onActivated = () => {
    if (id === activateTodo.id) {
      setActivateTodo({ id: undefined });
    } else {
      setActivateTodo({ id });
    }
  };

  const onChecked = () => {
    setIsChecked((prev) => !prev);
    setCount((prevCount) => (isChecked ? prevCount - 1 : prevCount + 1));
    setEditOpen(false);
  };
  const onDelete = () => {
    if (isChecked) {
      setCount((prevCount) => prevCount - 1);
    }

    setTodo((oldToDos) => {
      const deleteIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, deleteIndex),
        ...oldToDos.slice(deleteIndex + 1),
      ];
    });
    removeTodoFireBase(id);
  };

  const handleEdit = () => {
    console.log(editInputRef);
    const newText = editInputRef.current?.value;
    const newTodo: ITodo = {
      id,
      text: newText as any,
      min,
      sec,
    };

    setTodo((oldToDos) => {
      const editIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, editIndex),
        newTodo,
        ...oldToDos.slice(editIndex + 1),
      ];
    });

    editTodoFireBase(newTodo);
    setEditMode(false);
  };

  const onEditOpen = () => {
    setEditOpen((prev) => !prev);
  };
  const onEditMode = () => {
    setEditMode(true);
    setEditOpen(false);
  };

  const onCancel = () => {
    // 수정 취소를 누르면 다시 {text}를 보여주고 input을 없앤다.
    // text = prop 에서
    // input 없애기는 editmode 변경으로
    setEditMode((prev) => !prev);
  };

  return (
    <TodoItem
      isChecked={isChecked}
      onClick={() => {
        onActivated();
      }}
    >
      {editMode ? (
        <>
          <input type="text" ref={editInputRef} />
          <button onClick={handleEdit}>수정</button>
          <button onClick={onCancel}>취소</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            placeholder={text}
            onClick={onChecked}
            key={id}
          />
          {text}
          <PomoCounter />
        </>
      )}

      {!isChecked && !editMode && <EditBtn onClick={onEditOpen} />}
      {!isChecked && editOpen ? (
        <EditGroup>
          <button
            onClick={onDelete}
            style={{ backgroundColor: "#BA1A1A", color: "#fffbff" }}
          >
            삭제
          </button>
          <button onClick={onEditMode}>수정</button>
        </EditGroup>
      ) : null}
    </TodoItem>
  );
}

{
  /* <input
  type='checkbox'
  placeholder='January'
  checked={true/false}
  onChange={changeHandler}
  className='mx-3'
  checked
/> */
}
/*

export default function Todo({ text, id }: ITodo) {
  //할일텍스트
  //체크박스
  //수정버튼
  //수정버튼 > 3개의 버튼
  //뽀모도로 카운트
  const setTodo = useSetRecoilState(todoState);
  const [editOpen, setEditOpen] = useState(false);

  const onEdit = () => {
    setEditOpen((prev) => !prev);
  };

  const onDelete = () => {
    setTodo((oldToDos) => {
      const deleteIndex = oldToDos.findIndex((toDo) => toDo.id === id);

      return [
        ...oldToDos.slice(0, deleteIndex),
        ...oldToDos.slice(deleteIndex + 1),
      ];
    });
  };

  return (
    <>
      <TodoContainer>
        <TodoItem>
          {ChkBox}
          <div>check</div>

          <span>{text}</span>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <PomoCounter />
            <EditBtn onClick={onEdit} />
          </div>
        </TodoItem>
        {editOpen ? (
          <div>
            <button onClick={onDelete}>삭제</button>
            <button>삭제</button>
            <button>취소</button>
            <button>수정</button>
          </div>
        ) : null}
      </TodoContainer>
    </>
  );
}
*/
