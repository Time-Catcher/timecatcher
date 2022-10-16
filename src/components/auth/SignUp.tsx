import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import {
  Global,
  AuthContainer,
  AuthForm,
  AuthInputBox,
  ValidateError,
  SubmitBtn,
  ToggleAuth
} from "./styles";
interface IFormInput {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: data.nickname
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Global>
      <AuthContainer>
        <h2>SIGNUP</h2>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthInputBox>
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              {...register("email", {
                required: "필수 입력값입니다.",
                validate: (email) =>
                  (email.includes("@") && email.includes(".")) ||
                  "이메일 형식을 지켜주세요."
              })}
            />
            {errors.email && (
              <ValidateError>{errors.email?.message}</ValidateError>
            )}
          </AuthInputBox>
          <AuthInputBox>
            <label htmlFor="nickname">별명</label>
            <input
              {...register("nickname", {
                required: "필수 입력값입니다.",
                validate: (nickname) =>
                  nickname.trim().length >= 3 || "닉네임 형식을 지켜주세요."
              })}
            />
            {errors.nickname && (
              <ValidateError>{errors.nickname?.message}</ValidateError>
            )}
          </AuthInputBox>
          <AuthInputBox>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              {...register("password", {
                required: "필수 입력값입니다.",
                validate: (password) =>
                  password.length >= 8 || "패스워드 형식을 지켜주세요."
              })}
            />
            {errors.password && (
              <ValidateError>{errors.password?.message}</ValidateError>
            )}
          </AuthInputBox>
          <AuthInputBox>
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <input
              type="password"
              {...register("passwordCheck", {
                required: true,
                validate: (passwordCheck) =>
                  passwordCheck === watch("password") ||
                  "비밀번호가 일치하지 않습니다."
              })}
            />
            {errors.passwordCheck && (
              <ValidateError>{errors.passwordCheck?.message}</ValidateError>
            )}
          </AuthInputBox>
          <SubmitBtn>
            <span>회원가입</span>
          </SubmitBtn>
        </AuthForm>
        <ToggleAuth>
          <span>로그인 하러가기</span> <Link to="/">로그인</Link>
        </ToggleAuth>
      </AuthContainer>
    </Global>
  );
}
