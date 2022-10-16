import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { completedTodoCount, ITodo, todoState } from "./atoms";
import PomoCount from "./img/Pomocounter.png";
import Dots from "./img/Dot.png";
import Chk from "./img/checkbox.png";

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
  min-height: 64px;
  color: ${(props) => (props.isChecked ? "grey" : "#280866")};
  background-color: ${(props) =>
    props.isChecked ? "rgba(153, 121, 173,0.5)" : "rgba(122, 54, 212, 0.5)"};
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
  flex-direction: column;
  justify-content: space-between;
  height: 54px;
  bottom: 50%;
  transform: translate(0, 50%);
  right: 40px;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;

    gap: 10px;

    position: relative;
    width: 60px;
    height: 20px;
    background: #fffbff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    border: none;
    outline: none;
  }
`;

const TodoSpan = styled.span`
  display: inline-block;
  width: 75%;
  padding: 20px;
  overflow: visible;
`;

const EditTodo = styled.div`
  margin-left: 20px;
  & input {
    display: inline-block;
    height: 30px;
    width: 120%;
    border: none;
    border-radius: 2px;
    font-size: 14px;
  }
`;

const CheckInput = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 4px;
`;

interface IsChecked {
  isChecked: boolean;
}

type Count = (test: number) => void;

export default function Todo({ text, id }: ITodo) {
  const [editOpen, setEditOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const setCount = useSetRecoilState(completedTodoCount);
  const setTodo = useSetRecoilState(todoState);
  const [editMode, setEditMode] = useState(false);
  const editInputRef = useRef<HTMLInputElement>(null);

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
  };

  const handleEdit = () => {
    console.log(editInputRef);
    const newText = editInputRef.current?.value;
    const newTodo = { id: Date.now(), text: newText as any };

    setTodo((oldToDos) => {
      const editIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, editIndex),
        newTodo,
        ...oldToDos.slice(editIndex + 1),
      ];
    });
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
    <>
      <TodoItem isChecked={isChecked}>
        {editMode ? (
          <EditTodo>
            <input type="text" defaultValue={text} ref={editInputRef} />
            <EditGroup>
              <button
                onClick={handleEdit}
                style={{ color: "white", backgroundColor: "#6C119C" }}
              >
                완료
              </button>
              <button onClick={onCancel} style={{ backgroundColor: "#fcddd9" }}>
                취소
              </button>
            </EditGroup>
          </EditTodo>
        ) : (
          <>
            <CheckInput
              type="checkbox"
              placeholder={text}
              onClick={onChecked}
              key={id}
            />
            <TodoSpan>{text}</TodoSpan>
            <PomoCounter />
          </>
        )}

        {!isChecked && !editMode && <EditBtn onClick={onEditOpen} />}
        {!isChecked && editOpen ? (
          <EditGroup>
            <button
              onClick={onDelete}
              style={{ backgroundColor: "#6C119C", color: "#fffbff" }}
            >
              삭제
            </button>
            <button onClick={onEditMode} style={{ backgroundColor: "#fcddd9" }}>
              수정
            </button>
          </EditGroup>
        ) : null}
      </TodoItem>
    </>
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
