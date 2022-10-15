import styled from "styled-components";

const DropDownContainer = styled.div`
  width: ${({ width }: { width: number }) => width}px;
  position: relative;
`;

const DropDownSelectWrapper = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffbff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  height: 25px;
  padding: 0px;
  margin: 2px 0;
`;

const DropDownName = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #1c1b1e;
`;

const DropDownArrow = styled.img`
  width: 7px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  transform: ${({ state }: { state: boolean }) =>
    state ? "rotate( 180deg )" : "rotate( 0deg )"};
  transition: all 0.5s ease-in-out;
`;

const SubDropDownWrapper = styled.ul`
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  background-color: white;
`;

const SubDropDown = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 25px;
  font-size: 12px;

  &:hover {
    background-color: lightgray;
  }
`;

export {
  DropDownContainer,
  DropDownSelectWrapper,
  DropDownName,
  DropDownArrow,
  SubDropDownWrapper,
  SubDropDown,
};
