import styled from "styled-components";
import Footer from "../Footer/Footer";
import Container from "../../styles/Container";
import TopBar from "../TopBar/TopBar";
import { habitsList } from "../services/trackit";
import { useEffect, useState } from "react";
import CreateHabits from "../../styles/CreateHabits";
import Days from "../Days/Days";
import { ThreeDots } from "react-loader-spinner";

export default function Habits(){

    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const auth = JSON.parse(localStorage.getItem('trackit'));
    const [text, setText] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [nameHabits, setNameHabits] = useState('');
    const [daysSelected, setDaysSelected] = useState([]);
    const [msgBtnSave, setMsgBtnSave] = useState('Salvar');
    const [colorSave, setColorSave] = useState(false);

    useEffect(() => {
        const promise = habitsList({});
        promise.then((data) => listHabits(data.data));
    }, []);

    function listHabits(habits){
        if(habits.length === 0) setText('Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!');
    }   

    function saveHabits(){
        if(!colorSave){
            if(nameHabits.length !== 0 && daysSelected.length !== 0){
                setMsgBtnSave(<ThreeDots color="#FFF" height={45} width={45} />);
                setColorSave(true);
                console.log(nameHabits);
                console.log(daysSelected);    
            }
        }
    }

    function cancelHabits(){
        if(!colorSave){
            setDaysSelected([]);
            setColorSave(false);
            setIsDisabled(!isDisabled);
            setNameHabits('');
        }
    }

    return (
        <>
            <Container color='#f2f2f2'>
                <TopBar img={auth.image}/>
                <MyHabits>
                    <p>Meus hábitos</p>
                    <button disabled={isDisabled} onClick={() => setIsDisabled(!isDisabled)} >
                        <ion-icon name="add"></ion-icon>
                    </button>
                </MyHabits>
                {isDisabled ? (
                    <CreateHabits color={+colorSave}>
                        <input disabled={colorSave} value={nameHabits} onChange={(e) => setNameHabits(e.target.value)} placeholder='nome do hábito' type='text'/>
                        <ul>
                            {days.map((value, index) => <Days colorSave={colorSave} value={value} index={index} days={daysSelected} setDays={setDaysSelected}/>)}
                        </ul>
                        <div className="btn">
                            <button onClick={()=>cancelHabits()} className="noSave">Cancelar</button>
                            <button onClick={()=>saveHabits()} className="save">{msgBtnSave}</button>
                        </div>
                    </CreateHabits>) 
                : 
                (<></>)}
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
    button{
        background-color: #52B6FF;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    button ion-icon{
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