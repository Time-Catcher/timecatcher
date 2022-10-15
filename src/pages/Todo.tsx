import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IForm, ITodo, todoState } from "./atoms";
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

const TodoItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 15px;
  width: 389px;
  height: 64px;
  background-color: ${(props) => props.color};
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
  border: none;
  width: 24px;
  height: 24px;
  background: url(${Dots}) center;
  &:hover {
    cursor: pointer;
  }
`;

//"#7150B4" : "#fffbff"
export default function Todo({ text, id }: ITodo) {
  const [color, setColor] = useState("#fffbff");
  const [editOpen, setEditOpen] = useState(false);

  const onEdit = () => {
    setEditOpen((prev) => !prev);
  };
  const backgroundChange = () => {
    color === "#fffbff" ? setColor("#B393F2") : setColor("#fffbff");
  };
  return (
    <TodoItem color={color}>
      <ChkBox onClick={backgroundChange} />
      {text}
      {id}
      <PomoCounter />
      <EditBtn onClick={onEdit} />
      {editOpen ? (
        <div>
          <button>삭제</button>
          <button>삭제</button>
          <button>취소</button>
          <button>수정</button>
        </div>
      ) : null}
    </TodoItem>
  );
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
