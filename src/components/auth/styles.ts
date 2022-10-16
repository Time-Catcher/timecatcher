import styled from "styled-components";

const Global = styled.div`
  /* display: flex;
  justify-content: center;
  background: #fffbff;
  height: 100vh; */
`;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 30px 0;
  margin-top: 20px;
  border: 1px solid #7a757f;
  border-radius: 8px;
  background-color: #fff;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 8px;
  gap: 32px;
  position: relative;
  width: 320px;
  border-radius: 16px;
`;

const AuthInputBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 304px;
  height: 60px;

  & label {
    margin: 4px 0;
    font-size: 14px;
    height: 20px;
  }

  & input {
    box-sizing: border-box;
    padding: 10px;
    width: 304px;
    height: 32px;
    background: #fffbff;
    border: 1px solid #7a757f;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
`;

const ValidateError = styled.p`
  position: absolute;
  font-size: 12px;
  bottom: -22px;
  color: red;
`;

const SubmitBtn = styled.button`
  margin-top: 20px;
  padding: 8px;
  width: 304px;
  height: 48px;
  background: #6750a4;
  border: none;
  border-radius: 8px;

  & span {
    font-size: 14px;
    color: #ffffff;
  }
`;

const ToggleAuth = styled.div`
  font-size: 12px;

  & span {
    color: #727070;
    margin-right: 8px;
  }
`;

export {
  Global,
  AuthContainer,
  AuthForm,
  AuthInputBox,
  ValidateError,
  SubmitBtn,
  ToggleAuth,
};
