import styled from "styled-components";
import Footer from "../Footer/Footer";
import Container from "../../styles/Container";
import TopBar from "../TopBar/TopBar";
import { habitsList } from "../services/trackit";
import { useEffect, useState } from "react";

export default function Habits(){

    const auth = JSON.parse(localStorage.getItem('trackit'));
    const [text, setText] = useState('');

    useEffect(() => {
        const promise = habitsList({});
        promise.then((data) => listHabits(data.data));
    }, []);

    function listHabits(habits){
        if(habits.length === 0) setText('Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!');
    }

    return (
        <>
            <Container color='#f2f2f2'>
                <TopBar img={auth.image}/>
                <MyHabits>
                    <p>Meus hábitos</p>
                    <div>
                        <ion-icon name="add"></ion-icon>
                    </div>
                </MyHabits>
                <NoHabits>{text}</NoHabits>
                <Footer/>
            </Container>
        </>
    );
}

const MyHabits = styled.div`
    padding: 100px 18px 0 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        color: #126BA5;
        font-size: 22px;
    }
    div{
        background-color: #52B6FF;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    div ion-icon{
        font-size: 20px;
        color: #FFF;
        --ionicon-stroke-width: 80px;
    }
`;

const NoHabits = styled.p`
    padding: 28px 18px;
    font-size: 18px;
    font-weight: 400;
    color: #666666;
`;