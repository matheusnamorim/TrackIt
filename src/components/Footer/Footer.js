import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer(){
    const percentage = 50;
    return (
        <>
        <FooterBar>
            <p>Hábitos</p>
            <Progress>
            <CircularProgressbar value={percentage} text='Hoje' background backgroundPadding={6} styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
        })}
      />
            </Progress>
            <p>Histórico</p>
        </FooterBar>
        </>
    );
}

const FooterBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 35px;
    background-color: #fff;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-size: 18px;
        color: #52B6FF;
    }
`;

const Progress = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    margin-bottom: 40px;
    color: #FFFFFF;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`;