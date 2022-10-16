import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  sessionAndBreakState,
  timerDataState,
  timerFunctionState,
  timerModeState,
} from "../../atoms/atoms";
import {
  MainBBomodoro,
  MainCat,
  MainLogo,
  MainLogoTitle,
  MainQuestion,
  MainTimerButton,
  MainTimerWrapper,
  PauseButton,
  PlayButton,
  StopButton,
} from "../../pages/main/MainStyle";
import { fillZeroFromStart } from "../../util/fillZero";
import { minutesToDate } from "../../util/minutesToDate";
type PlayButtonType = "play" | "pause" | "playAndReset";
interface MainTimerProps {
  openModal: () => void;
}
const MainTimer = ({ openModal }: MainTimerProps) => {
  const { minutes, seconds, isRunning } = useRecoilValue(timerDataState);
  const { start, restart, pause, resume } = useRecoilValue(timerFunctionState);
  const sessionAndBreakTime = useRecoilValue(sessionAndBreakState);
  const [timerMode,setTimerMode ] = useRecoilState(timerModeState);
  const [playButtonType, setPlayButtonType] =
    React.useState<PlayButtonType>("play");
  React.useEffect(() => {
    if (isRunning) {
      setPlayButtonType("pause");
    } else if (sessionAndBreakTime[timerMode] === minutes) {
      setPlayButtonType("play");
    } else {
      setPlayButtonType("playAndReset");
    }
  }, [minutes,isRunning]);
  return (
    <MainTimerWrapper>
      <MainLogo>
        <MainLogoTitle>{`Cat'cher`}</MainLogoTitle>
        <MainQuestion onClick={openModal}>?</MainQuestion>
      </MainLogo>
      <MainCat src="/images/wizardCat.png" />
      <MainBBomodoro>
        {fillZeroFromStart(minutes, 2)}:{fillZeroFromStart(seconds, 2)}
      </MainBBomodoro>
      <MainTimerButton>
        {
          {
            play: <PlayButton src="images/play.png" onClick={start} />,
            pause: <PauseButton src="images/pause.png" onClick={pause} />,
            playAndReset: (
              <>
                <PlayButton src="images/play.png" onClick={resume} />
                <StopButton
                  src="images/stop.png"
                  onClick={() => {
                    if(timerMode==="breakTime"){
                        setTimerMode("session");
                    }
                    restart(minutesToDate(sessionAndBreakTime[timerMode]),false);
                }}
                />
              </>
            ),
          }[playButtonType]
        }
      </MainTimerButton>
    </MainTimerWrapper>
  );
};

export default MainTimer;
