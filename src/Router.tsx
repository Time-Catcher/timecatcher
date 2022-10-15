import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        {/* 메인 페이지 로그인 페이지로 변경 부탁드립니다. */}
        <Route path='/' element={<App/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router