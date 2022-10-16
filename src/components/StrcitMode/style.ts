import styled from "styled-components";

const HelpContainer = styled.div`
  width: 320px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
`;

const HelpHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
`;

const HelpTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const HelpExitButton = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MiddleContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const TextTitle = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: black;
  margin: 20px 0;
`;

const TextArea = styled.p`
  font-size: 12px;
  text-align: left;
  color: black;
  line-height: 2;
`;

export {
  HelpContainer,
  HelpHeader,
  HelpTitle,
  HelpExitButton,
  MiddleContainer,
  TextTitle,
  TextArea,
};
