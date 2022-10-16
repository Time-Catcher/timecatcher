import styled from "styled-components";

const SideBarWrapper = styled.div`
  cursor: pointer;
  width: 52px;
  height: 32px;
  border-radius: 30px;
  background-color: ${({ sideBarActive }: { sideBarActive: boolean }) =>
    sideBarActive ? "#6750a4" : "lightgray"};
`;

const SideBarRightToggle = styled.svg`
  position: relative;
  top: 4px;
  left: ${({ sideBarActive }: { sideBarActive: boolean }) =>
    sideBarActive ? "2px" : "26px"};
  background-color: #ffffff;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
`;
/* background-color: ${props => (props.isDarkMode ? '#3a3b3d' : '#43b1fe')}; */

export { SideBarRightToggle, SideBarWrapper };
