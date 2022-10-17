import React, { useEffect } from "react";
import SignIn from "../components/auth/SignIn";
import { Navigate } from "react-router";
import styled from "styled-components";
import { firebaseConfig } from "../firebaseConfig";

export default function SignInPage() {
  const _session_key = `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`;
  if (sessionStorage.getItem(_session_key)) {
    return <Navigate to="/main" />;
  }

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `로그인 | 효율적인 시간관리 서비스, 타임캣처`;
  }, []);

  return (
    <>
      <head>
        <title>{`Time Cat'cher : 로그인`}</title>
      </head>
      <AuthContainer>
        <AuthLogo>
          <img src="images/wizardCat.png" alt="위자드캣 logo" />
          <h1>Cat`cher</h1>
        </AuthLogo>
        <SignIn />
      </AuthContainer>
    </>
  );
}

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #6750a4;
  height: 100vh;

  & h2 {
    font-size: 20px;
  }
  `;

  const AuthLogo = styled.div`
  text-align: center;
  
  & img {
    display: inline-block;
    width: 100px;
    margin-bottom: 12px;
  }
  
  & h1 {
    font-family: "Splash", cursive;
    font-size: 34px;
    margin-top: px;
    color: #fff;
    text-align: center;
  }
`;

export { AuthContainer, AuthLogo };
