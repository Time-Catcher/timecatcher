import { useState } from "react";
import { SideBarRightToggle, SideBarWrapper } from "./style";

const SideToggleBar = ({ onToggle }: { onToggle: () => void }) => {
  const [sideBarActive, setSideBarActive] = useState<boolean>(false);

  const handleActiveSideBar = () => {
    setSideBarActive(!sideBarActive);
    onToggle();
  };

  return (
    <SideBarWrapper onClick={handleActiveSideBar} sideBarActive={sideBarActive}>
      <SideBarRightToggle
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#ffffff"
        //   isDarkMode={isDarkMode}
        sideBarActive={sideBarActive}
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
      </SideBarRightToggle>
    </SideBarWrapper>
  );
};

export default SideToggleBar;
