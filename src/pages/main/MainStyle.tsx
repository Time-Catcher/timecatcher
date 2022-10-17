import styled from "styled-components";
import Drawer from 'react-modern-drawer';

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MainPageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    background-repeat: no-repeat;
    background-size: 400% 400%;
    animation: backgroundChange 20s ease-in-out infinite;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @keyframes backgroundChange {
        0% {
          background-position: 0 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0 50%;
        }
      }
`
export const TimerTodoWrapper = styled.div`
    display:flex; 
    align-items: center; 
    flex-direction:column;
`
export const MainTimerWrapper = styled.div`
    width: 196px;
    height: 298px;
    display: flex;
    flex-direction: column;
`

export const MainLogo = styled.div`
    width: 196px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MainLogoTitle = styled.span`
    font-weight: 400;
    font-size: 46px;
    line-height: 52px;
    color: #ffffff;
    font-family: 'Splash', cursive;
`

export const MainQuestion = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
        background-color: #EFEFEF;
    }
    
`

export const MainCat = styled.img`
    margin: 10px;
`


export const MainTimerChat = styled.span`
    display: inline-block;
    padding: 5px;
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
    font-family: 'Single Day', cursive;
    color: #790087;
    position: relative;
	background: #ffffff;
	border-radius: .4em;


    &:after {
        content: '';
	position: absolute;
	top: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 10px solid transparent;
	border-bottom-color: #ffffff;
	border-top: 0;
	border-left: 0;
	margin-left: -5px;
	margin-top: -10px;
    }
`

export const MainBBomodoro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    font-size: 40px;
    color: #ffffff;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    `

export const MainTimerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PlayButton = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
`
export const PauseButton = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
`
export const StopButton = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
`

export const MainDropRight = styled.img`
    width: 64px;
    height: 64px;
    cursor: pointer;
    transform:rotate(0.25turn);
`

export const MainDropLeft = styled.img`
    width: 64px;
    height: 64px;
    cursor: pointer;
    transform:rotate(0.25turn);


`

export const BBoMoDescModal = styled.div`
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    right:auto;
    z-index: 10000;
    width: 600px;
    height: 672px;
    background-color: #FFFBFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    justify-content : space-evenly;
    align-items: center;
    padding: 16px 0;
`

export const BBoMoDescTitleWrapper = styled.div`
    width: 530px;
    height: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BBoMoDescTitle = styled.span`
    font-weight: 500;
    font-size: 30px;
`

export const BBoMoModalQuitButton = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`

export const BBoMoDescHr = styled.hr`
    width: 550px;
    border: 1px solid #7A757F;
`

export const BBoMoDesc = styled.div`
    padding: 10px;
    // width: 256px;
    // height: 444px;
    text-align: center;    

`

export const BBoMoDescCat = styled.img`
    width: 170px;
    height: 170px;
`

export const LeftDrawer = styled(Drawer)`
    display: flex;
    font-size:0;
`

export const TodoNotification = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const TodoNotiTitle = styled.span`
    color: #ffffff;
    margin-right: 10px;

`
export const TodoNotiImg = styled.img`
    width: 30px;
    height: 30px;
`

export const WhatTodoWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-around;
    overflow: hidden;
    margin-top: 10px;
`

export const OnMainTodoWrapper = styled.div`
  position: fixed;
  width: 500px;
  height: 300px;
  top:15%;
  left: 50%;
  padding: 10px;
  transform: translate(-50%,-50%);
  background: #444444;
  border-radius: 16px;
  height: 100px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border: 10px solid #000000;
  text-align:center;
`;
export const TodoDivide = styled.hr`
    width: 100%;
    border: dotted 2px #ffffff;
`
export const WhatTodoNow = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(222,168,248,1) 0%, rgba(168,222,248,1) 21.8%, rgba(189,250,205,1) 35.6%, rgba(243,250,189,1) 52.9%, rgba(250,227,189,1) 66.8%, rgba(248,172,172,1) 90%, rgba(254,211,252,1) 99.7% );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-overflow: ellipsis;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

`;
export const HowMaySpendTime = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: #ffffff;

`;