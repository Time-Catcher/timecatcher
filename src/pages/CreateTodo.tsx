import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IForm, todoState } from "./atoms";
import ImgSrc from "./img/AddImg.png";

//css

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 15px;
  width: 405px;
  height: 64px;
  gap: 10px;
  box-sizing: border-box;
  background-color: "#fffbff";
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

const AddBtn = styled.button`
  border: none;
  width: 16px;
  height: 16px;
  background: url(${ImgSrc}) center;
  background-size: cover;
  margin-left: 8px;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: none;
  padding: 8px;
  gap: 4px;
  background: #fffbff;
  width: 365px;
  height: 34px;
  border-radius: 15px;
  box-sizing: border-box;
`;

export default function CreateTodo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodo = useSetRecoilState(todoState);
  const [할일, 셋함수] = useRecoilState(todoState);
  console.log(할일);
  const handleTodo = ({ todo }: IForm) => {
    setTodo((preTodo) => [{ text: todo, id: Date.now() }, ...preTodo]);
    setValue("todo", "");
  }; //투두값을 리코일 스테이트(버블)에 추가하는 함수

  return (
    <>
      <Form onSubmit={handleSubmit(handleTodo)}>
        <AddBtn />
        <Input
          placeholder="할일에 작업 추가하기"
          {...register("todo", {
            required: "빈칸입니다! 할 일을 채워주세요!"
          })}
        />
      </Form>
    </>
  );
}
