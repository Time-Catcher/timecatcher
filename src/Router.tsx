import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { RecoilRoot } from "recoil";
import MainPage from "./pages/main/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import GlobalStyle from "./styles/GlobalStyles";
import Preference from "./pages/preference/preference";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Routes>
          {/* 메인 페이지 로그인 페이지로 변경 부탁드립니다. */}
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/preference" element={<Preference />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;

