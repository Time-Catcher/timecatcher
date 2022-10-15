import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { RecoilRoot } from "recoil";
import MainPage from "./pages/main/MainPage";
import GlobalStyle from "./styles/GlobalStyles";
import Preference from "./pages/preference/preference";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Routes>
          {/* 메인 페이지 로그인 페이지로 변경 부탁드립니다. */}
          <Route path="/" element={<App />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/preference" element={<Preference />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
