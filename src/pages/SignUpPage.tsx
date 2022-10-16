import React from "react";
import SignUp from "../components/auth/SignUp";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router";
import { AuthContainer, AuthLogo } from "./SignInPage";

export default function SignUpPage() {
  const navigate = useNavigate();

  if (auth.currentUser) {
    navigate("/main");
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
