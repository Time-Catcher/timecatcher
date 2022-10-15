import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";

const Router = () => {
  // const navigate = useNavigate();
  console.log("라우터 실행됨");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem("a", "11111");
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 로그인 페이지로 변경 부탁드립니다. */}

        {/* <Route path="/" element={user ? <App /> : <SignUpPage />} /> */}
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
