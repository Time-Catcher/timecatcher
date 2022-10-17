import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { RecoilRoot, useRecoilValue } from 'recoil';
import MainPage from './pages/main/MainPage';
import GlobalStyle from './styles/GlobalStyles';
import SignInPage from './pages/SignInPage';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { darkModeState } from './pages/preference/atoms';
import SignUpPage from './pages/SignUpPage';
import Page404 from './pages/Page404';



const Router = () => {
  const darkMode = useRecoilValue(darkModeState);
  
  return (
    
    <BrowserRouter>
      
        <GlobalStyle/>
        <ThemeProvider theme={darkMode.darkMode ? darkTheme : lightTheme}>
        <Routes>
            {/* 메인 페이지 로그인 페이지로 변경 부탁드립니다. */}
            <Route path='/' element={<SignInPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path='/main' element={<MainPage />}/>
            <Route path="/*" element={<Page404/>}/>
        </Routes>
        </ThemeProvider>
      
    </BrowserRouter>

    
    

  )
}

export default Router