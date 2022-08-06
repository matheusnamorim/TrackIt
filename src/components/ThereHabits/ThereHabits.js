import styled from "styled-components";
import Days from "../Days/Days";
import { deleteHabits } from "../services/trackit";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function ThereHabits ({value}){

    const navigate = useNavigate();
    const {weekDay} = useContext(UserContext);
    const aux = [...value.days];

    function deleteHabit(id){
        if(window.confirm('Deseja excluir esse Hábito?')){
            deleteHabits(id)
                .then(() => {
                    setTimeout(function(){
                    navigate(0);
                    }, 1000);
                    }
                );
        }
    }

    return (
        <>
            <Wrapper>
                <div className="infos">
                    <p>{value.name}</p>
                    <ul>
                        {weekDay.map((value, index) => <Days key={index} type={true} index={index} array={aux} value={value} />)}
                    </ul>
                </div>
                <ion-icon onClick={() => deleteHabit(value.id)} name="trash-outline"></ion-icon>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    margin: 20px 18px 10px 18px;
    height: 91px;
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;

    .infos{
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    p{
        margin-bottom: 10px;
        font-size: 20px;
        color: #666666;
    }
    ul{
        width: 234px;
        display: flex;
        justify-content: space-between;
    }
    li{
        height: 30px;
        width: 30px;
        border-radius: 5px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .noSelected{
        color: #DBDBDB;
        border: 1px solid #D5D5D5;
    }
    .selected{
        color: #FFF;
        background-color: #CFCFCF;
        border: 1px solid #CFCFCF;
    }
    ion-icon{
        font-size: 25px;
        padding: 15px;
    }
`