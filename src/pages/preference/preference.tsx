import DropDown from "../../components/DropDown";
import SideToggleBar from "../../components/SideToggleBar";
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
  ModeWrapper,
} from "./style";

const Preference = () => {
  return (
    <Background>
      <PrefContainer>
        <HeaderBar>
          <OptionImage src="/settings_image.png"></OptionImage>
          <Title>설정</Title>
          <ExitButton src="/close_button.png"></ExitButton>
        </HeaderBar>
        <RowLine />

        <OptionContainer>
          <OptionTitle>휴식 시간 설정</OptionTitle>
          <DropDown width={70} list={["25-5", "50-10"]}></DropDown>

          <ModeWrapper>
            <OptionTitle>엄격 기록모드 On/Off</OptionTitle>
            <HelpLabel src="/mode_help_label.png"></HelpLabel>
          </ModeWrapper>

          <SideToggleBar></SideToggleBar>

          <OptionTitle>다크모드 On/Off</OptionTitle>
          <SideToggleBar></SideToggleBar>

          <OptionTitle>화이트노이즈 설정</OptionTitle>
          <DropDown
            width={120}
            list={["장작 타는 소리", "숲 속의 새 소리"]}
          ></DropDown>

          <LogoutButton type="button">로그아웃</LogoutButton>
        </OptionContainer>
      </PrefContainer>
    </Background>
  );
};

export default Preference;
