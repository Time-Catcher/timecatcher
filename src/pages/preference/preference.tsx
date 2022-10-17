
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import DropDown from "../../components/DropDown";
import SideToggleBar from "../../components/SideToggleBar";
import VolumeBar from "../../components/VolumeBar";
import { volumeState } from "./atoms";
import { getAuth, signOut } from "firebase/auth";
import StrictMode from "../../components/StrcitMode";
import {
  darkModeState,
  // restTimeState,
  strictModeState,
  whiteNoiseState
} from "./atoms";
import {
  Background,
  ExitButton,
  HeaderBar,
  LogoutButton,
  OptionContainer,
  OptionImage,
  OptionTitle,
  HelpLabel,
  PrefContainer,
  RowLine,
  Title,
  ModeWrapper
} from "./style";
import { useNavigate } from "react-router";
import Modal from "../../components/Modal";
import { sessionAndBreakState } from "../../atoms/atoms";

import { Howl, Howler } from "howler";

interface PreferenceProps {
  onClose: () => void;
}
interface ObjType {
  [key: string]: Howl;
}

const Preference = ({ onClose }: PreferenceProps) => {
  const navigate = useNavigate();

  const [, setSessionAndBreakTime] = useRecoilState(sessionAndBreakState);
  const handleChangeRestTimeSet = (value: string) => {
    const [session, breakTime] = value.split("-").map(Number);
    setSessionAndBreakTime({ session, breakTime });
  };
  const volume = useRecoilValue(volumeState);
  // console.log(volume);
  Howler.volume(volume);
  const [, setWhiteNoiseSet] = useRecoilState(whiteNoiseState);
  const handleChangeWhiteNoiseSet = (value: string) => {
    setWhiteNoiseSet({ whiteNoiseSet: value });
    const fire = new Howl({
      src: ["audio/fire.wav"],
      volume: 1,
      loop: true
    });
    const bird = new Howl({
      src: ["audio/bird.wav"],
      volume: 1,
      loop: true
    });

    if (value === "소리 없음") {
      Howler.stop();
    } else if (value === "장작 타는 소리") {
      // console.log("장작이야");
      Howler.stop();
      fire.play();
    } else if (value === "숲 속의 새 소리") {
      // console.log("새 소리야");
      Howler.stop();
      bird.play();
    }
    // const noiseList: ObjType = {
    //   "장작 타는 소리": fire,
    //   "숲 속의 새 소리": bird
    // };
    // noiseList[value].play();
  };

  const [strictMode, setStrictMode] = useRecoilState(strictModeState);
  const handleToggleStrictMode = () => {
    setStrictMode({ strictMode: !strictMode.strictMode });
  };

  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const handleToggleDarkMode = () => {
    setDarkMode({ darkMode: !darkMode.darkMode });
  };

  const [helpModalState, setHelpModalState] = useState(false);

  const handleChangeHelpModalState = () => {
    setHelpModalState(!helpModalState);
  }
  
  const handleSignOutClick = () => {
    const auth = getAuth();
    signOut(auth);
    navigate("/");
  };

  return (
    <Background>
      <PrefContainer>
        <HeaderBar>
          <OptionImage src="/settings_image.png"></OptionImage>
          <Title>설정</Title>
          <ExitButton src="/close_button.png" onClick={onClose}></ExitButton>
        </HeaderBar>
        <RowLine />

        <OptionContainer>
          <OptionTitle>휴식 시간 설정</OptionTitle>
          <DropDown
            width={70}
            list={["25-5", "50-10"]}
            onChange={handleChangeRestTimeSet}
          ></DropDown>

          <ModeWrapper>
            <OptionTitle>엄격 기록모드 On/Off</OptionTitle>
            <HelpLabel
              src="/mode_help_label.png"
              onClick={handleChangeHelpModalState}
            ></HelpLabel>

            <Modal modalState={helpModalState}>
              <StrictMode handleExit={handleChangeHelpModalState}></StrictMode>
            </Modal>
          </ModeWrapper>

          <SideToggleBar onToggle={handleToggleStrictMode}></SideToggleBar>

          <OptionTitle>다크모드 On/Off</OptionTitle>
          <SideToggleBar onToggle={handleToggleDarkMode}></SideToggleBar>

          <OptionTitle>화이트노이즈 설정</OptionTitle>
          <DropDown
            width={120}
            list={["소리 없음", "장작 타는 소리", "숲 속의 새 소리"]}
            onChange={handleChangeWhiteNoiseSet}
          ></DropDown>

          <VolumeBar></VolumeBar>

          <LogoutButton type="button" onClick={handleSignOutClick}>
            로그아웃
          </LogoutButton>
        </OptionContainer>
      </PrefContainer>
    </Background>
  );
};

export default Preference;
