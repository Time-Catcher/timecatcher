import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  bgColor: "#49454E",
  textColor: "#E8DEF8",
  textColorBK: "#E8DEF8",
  primaryColor: "#D0BCFF",
  inputBox: "rgb(51, 45, 65)",
  todoItem: "#5c5175",
};

export const lightTheme: DefaultTheme = {
  bgColor: "#fffbff",
  textColor: "white ",
  textColorBK: "black",
  primaryColor: "#6750a4",
  inputBox: "#6750a4",
  todoItem: "#5c5175",
};

export const theme = {
  lightTheme,
  darkTheme,
};
