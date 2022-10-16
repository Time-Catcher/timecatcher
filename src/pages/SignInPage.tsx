import React, { useEffect } from "react";
import SignIn from "../components/auth/SignIn";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";

export default function SignInPage() {
  const navigate = useNavigate();

  const auth = getAuth();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigate("/main");
  //     }
  //   });
  // }, []);

  return (
    <AuthContainer>
      <AuthLogo>
        <img src="images/wizardCat.png" alt="위자드캣 logo" />
        <h1>Cat`cher</h1>
      </AuthLogo>
      <SignIn />
    </AuthContainer>
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
  & img {
    width: 150px;
  }

  & h1 {
    font-size: 32px;
    margin-top: 4px;
    color: #fff;
    text-align: center;
  }
`;

export { AuthContainer, AuthLogo };
