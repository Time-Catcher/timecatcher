import React from 'react'
import { MainTodoListWrapper, TodoListNotification, TodoListOne } from '../../pages/main/MainStyle'


const MainTodoList = () => {
  return (
    <MainTodoListWrapper>   
        <TodoListNotification></TodoListNotification>
        <TodoListOne></TodoListOne>
      </MainTodoListWrapper>
  )
}

export default MainTodoList