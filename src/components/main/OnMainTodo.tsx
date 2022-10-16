import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { activeTodoSelector, activeTodoState } from "../../atoms/atoms";
import { ITodo } from "../../pages/atoms";
import { TodoDivide, TodoNotification, HowMaySpendTime, OnMainTodoWrapper, WhatTodoNow, WhatTodoWrapper } from "../../pages/main/MainStyle";

export const OnMainTodo = () => {
  const activeTodo = useRecoilValue(activeTodoSelector);
  if(activeTodo){
    return(
    <OnMainTodoWrapper>
        <TodoNotification>
          <span>지금 하고있다냥!</span>
          <img src="/images/paws.png"/>
        </TodoNotification>
        <TodoDivide/>
        <WhatTodoWrapper>
        <WhatTodoNow>{activeTodo.text}</WhatTodoNow>
        <HowMaySpendTime>123</HowMaySpendTime>
        </WhatTodoWrapper>
      </OnMainTodoWrapper> 
    )
  }
  else{
    return <></>;
  }
}
