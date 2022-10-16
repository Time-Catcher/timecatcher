import styled from "styled-components";
import Drawer from 'react-modern-drawer';
import backgroundImg from '../img/pot.png';

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

export const MainBBomodoro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-size: 32px;
    color: #ffffff;
    background-image: url(${backgroundImg});
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


export const MainTodoListWrapper = styled.div``

export const TodoListNotification = styled.p``

export const TodoListOne = styled.div``