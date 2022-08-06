import styled from "styled-components";
import Footer from "../Footer/Footer";
import Container from "../../styles/Container";
import TopBar from "../TopBar/TopBar";
import { habitsList } from "../services/trackit";
import { useEffect, useState, useContext } from "react";
import CreateHabits from "../../styles/CreateHabits";
import Days from "../Days/Days";
import { ThreeDots } from "react-loader-spinner";
import { createHabit } from "../services/trackit";
import ThereHabits from "../ThereHabits/ThereHabits";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function Habits(){

    const auth = JSON.parse(localStorage.getItem('trackit'));
    const [isDisabled, setIsDisabled] = useState(false);
    const [nameHabits, setNameHabits] = useState('');
    const [msgBtnSave, setMsgBtnSave] = useState('Salvar');
    const [colorSave, setColorSave] = useState(false);
    const [habits, setHabits] = useState([]);
    const [thereHabits, setThereHabits] = useState(true);
    const navigate = useNavigate();

    const { weekDay, weekSelected } = useContext(UserContext);

    useEffect(() => {
        const promise = habitsList({});
        promise.then((data) => {
            setHabits(data.data); 
            if(data.data.length === 0) setThereHabits(false);
        });
    }, []);

    function saveHabits(){
        if(!colorSave){
            if(nameHabits.length !== 0 && weekSelected.length !== 0){
                setMsgBtnSave(<ThreeDots color="#FFF" height={45} width={45} />);
                setColorSave(true);
                const body ={
                    name: nameHabits,
                    days: weekSelected
                }
                setTimeout(function(){
                    createHabit(body)
                    .then(() => {
                        setThereHabits(true);
                        navigate(0);
                    })
                    .catch(() => {
                        alert('Erro: insira os dados novamente');
                        setColorSave(false);
                        setMsgBtnSave('Salvar');
                    })
                }, 1000);   
            }
        }
    }

    function cancelHabits(){
        if(!colorSave){
            setColorSave(false);
            setIsDisabled(!isDisabled);

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
                            {weekDay.map((value, index) => <Days key={index} colorSave={colorSave} value={value} index={index} />)}
                        </ul>
                        <div className="btn">
                            <button onClick={()=>cancelHabits()} className="noSave">Cancelar</button>
                            <button onClick={()=>saveHabits()} className="save">{msgBtnSave}</button>
                        </div>
                    </CreateHabits>) 
                : 
                (<></>)}
                
                <Wrapper>
                    {thereHabits ? habits.map((value, index) => <ThereHabits key={index} value={value}/>) :
                        <NoHabits>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabits>
                    }
                </Wrapper>
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

const Wrapper = styled.div`
    padding-bottom: 100px;
`;

const NoHabits = styled.p`
    padding: 28px 18px;
    font-size: 18px;
    font-weight: 400;
    color: #666666;
`;
