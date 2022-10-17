import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Router from "./Router";
import { Notifications } from "react-push-notification";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useRecoilState } from "recoil";
import { darkModeState } from "./pages/preference/atoms";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// const darkMode = useRecoilState(darkModeState); APP에ㅓ서 해야 할 거 같아요 .... ㅇ
root.render(
  <React.StrictMode>
    <Notifications />
    {/* <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> */}
    <ThemeProvider theme={darkTheme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
