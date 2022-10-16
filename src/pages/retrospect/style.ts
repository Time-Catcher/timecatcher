import styled from "styled-components";

const RetroContainer = styled.div`
  width: 320px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
`;

const RetroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
`;

const RetroTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
`;

const RetroExitButton = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MiddleContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const TextArea = styled.input`
  width: 100%;
  height: 35px;
  background-color: #fffbff;
  border: 1px solid #7a757f;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-size: 12px;
  color: #7a757f;
  padding: 0;
  margin: 20px 0;
`;

const SatisfyContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
`;

const SatisfyWrapper = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StarCountWrapper = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const StarCount = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid #1c1b1e;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  background-color: ${({ selected }: { selected: boolean }) =>
    selected ? "lightcoral" : "white"};
`;

const CommonButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 12px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: #6750a4;
  margin: 5px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export {
  RetroContainer,
  RetroHeader,
  RetroTitle,
  RetroExitButton,
  MiddleContainer,
  SatisfyContainer,
  SatisfyWrapper,
  StarCountWrapper,
  StarCount,
  CommonButton,
  TextArea,
};
