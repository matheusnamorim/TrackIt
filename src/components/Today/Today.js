import styled from "styled-components";
import locale from "../services/pt-br";
import dayjs from "dayjs";
import Container from "../../styles/Container";
import Footer from "../Footer/Footer";
import TopBar from "../TopBar/TopBar";
import { habitsOfToday } from "../services/trackit";
import { useEffect, useState } from "react";

export default function Today(){

    const [habits, setHabits] = useState([]);

    const auth = JSON.parse(localStorage.getItem('trackit'));
    dayjs.locale('pt-br');
    const day = (dayjs().format('dddd, DD/MM'));

    useEffect(() => {
        habitsOfToday()
        .then
            (data => setHabits(data.data))
        .catch
            (data => data)
    }, []);

    console.log(habits);

    return (
        <>
            <Container color='#f2f2f2'>
                <TopBar img={auth.image}/>
                <Habits>
                    {day}
                    <p>Nenhum hábito concluído ainda</p>
                    {habits.map(value => (
                        <BoxHabits>
                            <Infos>
                            <p>{value.name}</p>
                            <h1>Sequência atual: {value.currentSequence} dias</h1>
                            <h1>Seu recorde: {value.highestSequence} dias</h1>
                            </Infos>
                            <BtnIcon>
                                <ion-icon name="checkbox"></ion-icon>
                            </BtnIcon>
                        </BoxHabits>
                    ))}
                </Habits>
                <Footer></Footer>
            </Container>
        </>
    );
}

const Habits = styled.div`
    padding: 100px 0;
    padding-left: 18px;
    color: #126BA5;
    font-size: 22px;

    p{
        margin: 5px 0 28px 0;
        color: #BABABA;
        font-size: 18px;
    }

`;

const BoxHabits = styled.div`
    height: 94px;
    margin: 0 18px 10px 0;
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const BtnIcon = styled.div`
    width: 69px;
    height: 69px;

    ion-icon{
        font-size: 69px;
        color: #EBEBEB;
    }
`;

const Infos = styled.div`
    height: 100%;
    margin-right: 120px;
    padding: 15px 0 15px 15px;

    p{
        padding-bottom: 8px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: #666666;
        font-size: 20px;
        margin: 0 0;
    }

    h1{
        padding-bottom: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: #666666;
        font-size: 12px;
    }

`;
