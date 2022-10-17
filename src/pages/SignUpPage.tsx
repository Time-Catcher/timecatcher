import React, { useEffect } from "react";
import SignUp from "../components/auth/SignUp";
import { firebaseConfig } from "../firebaseConfig";
import { Navigate } from "react-router";
import { AuthContainer, AuthLogo } from "./SignInPage";

export default function SignUpPage() {
  const _session_key = `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`;
  if (sessionStorage.getItem(_session_key)) {
    return <Navigate to="/main" />;
  }

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `회원가입 | 효율적인 시간관리 서비스, 타임캣처`;
  }, []);

  return (
    <>
      <head>
        <title>{`Time Cat'cher : 회원가입`}</title>
      </head>
      <AuthContainer>
        <AuthLogo>
          <img src="images/wizardCat.png" alt="위자드캣 logo" />
          <h1>Cat`cher</h1>
        </AuthLogo>
        <SignUp />
      </AuthContainer>
    </>
  );
}
