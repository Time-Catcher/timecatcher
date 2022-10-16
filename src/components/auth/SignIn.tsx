import { useSetRecoilState } from "recoil";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import {
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import {
  Global,
  AuthContainer,
  AuthForm,
  AuthInputBox,
  ValidateError,
  SubmitBtn,
  ToggleAuth,
} from "./styles";
import { authState } from "../../atoms/atoms";
interface IFormInput {
  email: string;
  password: string;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const setAuthState = useSetRecoilState(authState);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, data.email, data.password)
          .then(() => {
            navigate("/main");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Global>
      <AuthContainer>
        <h2>LOGIN</h2>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthInputBox>
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              {...register("email", {
                required: "필수 입력값입니다.",
                validate: (email) =>
                  (email.includes("@") && email.includes(".")) ||
                  "이메일 형식을 지켜주세요.",
              })}
            />
            {errors.email && (
              <ValidateError>{errors.email?.message}</ValidateError>
            )}
          </AuthInputBox>
          <AuthInputBox>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              {...register("password", {
                required: "필수 입력값입니다.",
                validate: (password) =>
                  password.length >= 8 || "패스워드는 8글자 이상 입력해주세요.",
              })}
            />
            {errors.password && (
              <ValidateError>{errors.password?.message}</ValidateError>
            )}
          </AuthInputBox>
          <SubmitBtn>
            <span>로그인</span>
          </SubmitBtn>
        </AuthForm>
        <ToggleAuth>
          <span>계정이 없으신가요?</span> <Link to="/signup">회원가입</Link>
        </ToggleAuth>
      </AuthContainer>
    </Global>
  );
}
