import React from "react";
import SignUp from "../components/auth/SignUp";
import { firebaseConfig } from "../firebaseConfig";
import { Navigate } from "react-router";
import { AuthContainer, AuthLogo } from "./SignInPage";

export default function SignUpPage() {
  const _session_key = `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`;
  if (sessionStorage.getItem(_session_key)) {
    return <Navigate to="/main" />;
  }

  return (
    <AuthContainer>
      <AuthLogo>
        <img src="images/wizardCat.png" alt="위자드캣 logo" />
        <h1>Cat`cher</h1>
      </AuthLogo>
      <SignUp />
    </AuthContainer>
  );
}
