import {
  HelpContainer,
  HelpExitButton,
  HelpHeader,
  HelpTitle,
  MiddleContainer,
  TextArea,
  TextTitle,
} from "./style";

const StrictMode = ({ handleExit }: { handleExit: () => void }) => {
  return (
    <HelpContainer>
      <HelpHeader>
        <HelpTitle>엄격 모드란?</HelpTitle>
        <HelpExitButton
          src="/close_button.png"
          onClick={handleExit}
        ></HelpExitButton>
      </HelpHeader>
      <MiddleContainer>
        <TextTitle>엄격 모드가 On 상태</TextTitle>

        <TextArea>
          회고를 제출하는 습관을 들일 수 있도록
          <br />
          회고를 넘어갈 수 없게 합니다.
        </TextArea>

        <TextTitle>엄격 모드가 Off 상태</TextTitle>

        <TextArea>회고를 제출하지 않아도 회고를 넘길 수 있습니다.</TextArea>
      </MiddleContainer>
    </HelpContainer>
  );
};

export default StrictMode;
