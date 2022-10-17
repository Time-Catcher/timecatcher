import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    primaryColor: string;
    inputBox: string;
    todoItem: string;
    textColorBK: string;
  }
}
