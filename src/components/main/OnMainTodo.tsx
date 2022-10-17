import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { activeTodoSelector } from "../../atoms/atoms";
import { ITodo } from "../../pages/atoms";
import { TodoDivide, TodoNotification, HowMaySpendTime, OnMainTodoWrapper, WhatTodoNow, WhatTodoWrapper } from "../../pages/main/MainStyle";
import { fillZeroFromStart } from "../../util/fillZero";

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
        <HowMaySpendTime>{`${fillZeroFromStart(activeTodo.min,2)} : ${fillZeroFromStart(activeTodo.sec,2)}`}</HowMaySpendTime>
        </WhatTodoWrapper>
      </OnMainTodoWrapper> 
    )
  }
  else{
    return <></>;
  }
}
