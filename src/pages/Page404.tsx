import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Page404() {
  return (
    <>
      <head>
        <title>{`Time Cat'cher : 에러페이지`}</title>
      </head>
      <GlobalContainer>
        <MainLogoTitle>{`Cat'cher`}</MainLogoTitle>
        <MainLogo>
          <MainCat src="/images/wizardCat.png" />
        </MainLogo>
        <NotFound>
          <p>9와 3/4 승강장</p>
          <p>페이지가 없다냥!!!</p>
        </NotFound>
        <Link to="/">
          <ReturnLink>다시 돌아가랏!!</ReturnLink>
        </Link>
      </GlobalContainer>
    </>
  );
}

const GlobalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  background-repeat: no-repeat;
  background-size: 400% 400%;
  animation: backgroundChange 20s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @keyframes backgroundChange {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

const MainLogo = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainLogoTitle = styled.span`
  font-weight: 400;
  font-size: 46px;
  color: #ffffff;
  font-family: "Splash", cursive;
  margin-top: 200px;
`;

const MainCat = styled.img`
  width: 100%;
  margin: 10px;
`;

const NotFound = styled.div`
  margin-top: 5s0px;
  font-size: 36px;
  color: white;
  text-align: center;
  line-height: 60px;
  font-family: "Single Day", cursive;
`;

const ReturnLink = styled.span`
  display: inline-block;
  margin-top: 20px;
  font-size: 24px;
  color: blue;
  text-decoration: underline;
  font-family: "Single Day", cursive;
`;
