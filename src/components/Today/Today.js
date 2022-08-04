import styled from "styled-components";
import locale from "../services/pt-br";
import dayjs from "dayjs";
import Top from "../../styles/Top";
import Container from "../../styles/Container";
import { useContext } from "react";
import UserContext from '../../contexts/UserContext'
import Footer from "../Footer/Footer";

export default function Today(){

    const {loginData, setLoginData}  =  useContext(UserContext);

    dayjs.locale('pt-br');

    const day = (dayjs().format('dddd, DD/MM'));

    return (
        <>
            <Container color='#f2f2f2'>
            <Top>
                <p>TrackIt</p>
                <img src={loginData.image}/>
            </Top>
            <Habits>
                {day}
                <p>Nenhum hábito concluído ainda</p>
            </Habits>
            <Footer></Footer>
            </Container>
        </>
    );
}

const Habits = styled.div`
    padding-top: 100px;
    padding-left: 18px;
    color: #126BA5;
    font-size: 22px;

    p{
        margin-top: 5px;
        color: #BABABA;
        font-size: 18px;
    }
`;
