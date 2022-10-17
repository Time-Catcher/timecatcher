import React from "react";
import { useRecoilValue } from "recoil";
import { activeTodoSelector } from "../../atoms/atoms";
import { TodoDivide, TodoNotification, HowMaySpendTime, OnMainTodoWrapper, WhatTodoNow, WhatTodoWrapper, TodoNotiTitle, TodoNotiImg } from "../../pages/main/MainStyle";
import { fillZeroFromStart } from "../../util/fillZero";

export const OnMainTodo = () => {
  const activeTodo = useRecoilValue(activeTodoSelector);
 
  if(activeTodo){
    return(
    <OnMainTodoWrapper>
        <TodoNotification>
          <TodoNotiTitle>지금 하고있다냥!</TodoNotiTitle>
          <TodoNotiImg src="/images/movingCat.gif"/>
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
