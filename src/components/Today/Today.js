import styled from "styled-components";
import locale from "../services/pt-br";
import dayjs from "dayjs";
import Top from "../../styles/Top";
import { useContext } from "react";
import UserContext from '../../contexts/UserContext'

export default function Today(){

    const {loginData, setLoginData}  =  useContext(UserContext);

    dayjs.locale('pt-br');

    const day = (dayjs().format('dddd, DD/MM'));

    return (
        <>
            <Top>
                <p>TrackIt</p>
                <img src={loginData.image}/>
            </Top>
            <Habits>
                {day}
                <p>Nenhum hábito concluído ainda</p>
            </Habits>
        </>
    );
}

const Habits = styled.div`
    margin-top: 100px;
    padding-left: 18px;
    color: #126BA5;
    font-size: 22px;

    p{
        margin-top: 5px;
        color: #BABABA;
        font-size: 18px;
    }
`;
