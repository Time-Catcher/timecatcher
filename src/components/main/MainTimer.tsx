import React, { useState } from 'react'
import { useTimer } from 'react-timer-hook';
import { useRecoilState } from 'recoil';
import { 뽀모도로_휴식state } from '../../atoms/atoms';
import { MainBBomodoro, MainCat, MainLogo, MainLogoTitle, MainQuestion, MainTimerButton, MainTimerWrapper, PauseButton, PlayButton, StopButton } from '../../pages/main/MainStyle'


interface MainTimerProps{
    handleActiveQuestion:(()=>void);
}
const MainTimer = ({handleActiveQuestion}:MainTimerProps) => {

    const [time, setTime] = useRecoilState(뽀모도로_휴식state);
    

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        restart,
    } = useTimer({expiryTimestamp:new Date(time.뽀모도로),autoStart:false, onExpire: () => console.warn('onExpire called') });
  
return (
    <MainTimerWrapper>
        <MainLogo>
            <MainLogoTitle>{`Cat'cher`}</MainLogoTitle>
            <MainQuestion onClick={handleActiveQuestion}>?</MainQuestion>
        </MainLogo>
        <MainCat src='/images/wizardCat.png'/>
        <MainBBomodoro>{minutes}:{seconds}</MainBBomodoro>
        <MainTimerButton>
            {isRunning ? 
            <><PauseButton src='images/pause.png' onClick={pause}/>
            <StopButton src='images/stop.png' onClick={() => {
                const time = new Date();
                time.setSeconds(time.getSeconds() + 1500);
                restart(time);
                pause();
            }}/></> : <PlayButton src='images/play.png' onClick={start}/>}
            
            
        </MainTimerButton>
      </MainTimerWrapper>
  )
}

export default MainTimer;