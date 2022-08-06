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
import { unDoneHabits } from "../services/trackit";


export default function Today(){

    const {percent, setPercent} = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const [reload, setReload] = useState(false);
    const [valuePer, setValuePer] = useState(0)
    const [typeMsg, setTypeMsg] = useState(false);

    const auth = JSON.parse(localStorage.getItem('trackit'));
    dayjs.locale('pt-br');
    const day = (dayjs().format('dddd, DD/MM'));
    

    useEffect(() => {
        habitsOfToday()
        .then
            (data => {
                setHabits(data.data)
                setPercent(data.data)})
        .catch
            (data => data)
    }, [reload]);


    function Habit(id, done){
        if(!done){
            doneHabits(id, {})
            .then(() => {
                setReload(!reload);
            })
            .catch(() => alert('ERRO: tente novamente')); 
        }else{
            unDoneHabits(id, {})
            .then(() => {
                setReload(!reload);
            })
            .catch(() => alert('ERRO: tente novamente'));
        }

    }
    useEffect(() => {
        const aux = (Math.ceil(((percent.filter(e => e.done === true).length)/habits.length)*100));
        if(aux !== 0) {
            setValuePer(aux);
            setTypeMsg(true);
        }else setTypeMsg(false);
    }, [percent]);

    return (
        <>            
            <Container color='#f2f2f2'>
                <TopBar img={auth.image}/>
                <Habits>
                    {day}
                    <P typeMsg={typeMsg}>{typeMsg ? `${valuePer}% dos hábitos concluído` : 'Nenhum hábito concluído ainda'}</P>
                    {habits.map((value, index) => (
                        <HabitsList value={value} key={index} Habit={Habit}/>
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
`;

const P = styled.p`
    margin: 5px 0 28px 0;
    color: ${props => props.typeMsg ? '#8FC549' : '#BABABA'};
    font-size: 18px;
`;