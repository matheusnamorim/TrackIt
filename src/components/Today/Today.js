import styled from "styled-components";
import locale from "../services/pt-br";
import dayjs from "dayjs";
import Container from "../../styles/Container";
import Footer from "../Footer/Footer";
import TopBar from "../TopBar/TopBar";
import { habitsOfToday } from "../services/trackit";
import { useEffect, useState, useContext } from "react";
import HabitsList from "../HabitsList/HabitsList";
import { doneHabits } from "../services/trackit";
import UserContext from "../../contexts/UserContext";


export default function Today(){

    const {percent, setPercent} = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const [reload, setReload] = useState(false);
    const [msg, setMsg] = useState('Nenhum hábito concluído ainda')

    const auth = JSON.parse(localStorage.getItem('trackit'));
    dayjs.locale('pt-br');
    const day = (dayjs().format('dddd, DD/MM'));
    

    useEffect(() => {
        // console.log(habits);
        // console.log(((habits.filter(e => e.done === true).length)/habits.length)*100);
        // setPercent(((habits.filter(e => e.done === true).length)/habits.length)*100);
        habitsOfToday()
        .then
            (data => setHabits(data.data))
        .catch
            (data => data)
    }, [reload]);


    function doneHabit(id){
        doneHabits(id, {})
        .then((data) => {
            console.log(data);
            setReload(!reload);
        })
        .catch(() => alert('ERRO: tente novamente')); 
    }

    return (
        <>            
            <Container color='#f2f2f2'>
                <TopBar img={auth.image}/>
                <Habits>
                    {day}
                    <p>{msg}</p>
                    {habits.map((value, index) => (
                        <HabitsList value={value} key={index} doneHabit={doneHabit}/>
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