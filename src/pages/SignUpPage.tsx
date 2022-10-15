import React from "react";
import SignUp from "../components/auth/SignUp";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router";

export default function SignUpPage() {
  const navigate = useNavigate();

  if (auth.currentUser) {
    navigate("/main");
  }

  return <SignUp />;
}
