import React, { useEffect } from "react";
import SignIn from "../components/auth/SignIn";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";

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

  return <SignIn />;
}
