import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
    body{
        transition: all 0.5s ease-in-out;
        font-family: 'Roboto', sans-serif;
    };
    button{
        cursor: pointer;
        outline: none;
    };
    input{
        display: flex;
        padding-left: 10px;
        outline: none;
    };
    input:focus {
      outline: none;
    };
    
    a {
      text-decoration: none;
      color: black;
    };
`;
export default GlobalStyle;
