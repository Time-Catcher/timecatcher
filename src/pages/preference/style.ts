import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  // height: 100vh;
  display: flex;
  justify-content: center;
`;

const PrefContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  // background-color: #fffbff;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderBar = styled.div`
  width: 95%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // color: black;
  color: ${(props) => props.theme.textColorBK};
`;

const OptionImage = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 22px;
  // color: black;
  color: ${(props) => props.theme.textColor};
  font-weight: 400;
`;

const ExitButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: none;
  background-color: inherit;
`;

const RowLine = styled.hr`
  width: 95%;
  border: 1px solid #8d8b8e;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionTitle = styled.span`
  font-size: 16px;
  margin: 10px 0;
  color: ${(props) => props.theme.textColorBK};
`;

const HelpLabel = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  margin-left: 10px;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  width: 65px;
  height: 32px;
  background-color: #6750a4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 12px;
  margin-top: 20px;
`;

export {
  Background,
  PrefContainer,
  HeaderBar,
  OptionImage,
  Title,
  ExitButton,
  RowLine,
  OptionContainer,
  ModeWrapper,
  OptionTitle,
  HelpLabel,
  LogoutButton
};
