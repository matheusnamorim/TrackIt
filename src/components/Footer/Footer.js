import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function Footer({percentage}){

    return (
        <>
        <FooterBar>
            <Link to='/habitos' style={{ textDecoration: 'none' }}>
                <p>Hábitos</p>
            </Link>
            <Link to='/hoje' style={{ textDecoration: 'none' }}>
                <Progress>
                <CircularProgressbar value={percentage} text='Hoje' background backgroundPadding={6} styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })}
                />
                </Progress>
            </Link>
            <Link to='/historico' style={{ textDecoration: 'none' }}>
                <p>Histórico</p>
            </Link>
        </FooterBar>
        </>
    );
}

const FooterBar = styled.div`
    position: fixed;
    z-index: 1;
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
        cursor: pointer;
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
    cursor: pointer;
`;