import styled from "styled-components";
import Days from "../Days/Days";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function ThereHabits ({value, deleteHabit}){

    const {weekDay} = useContext(UserContext);
    const aux = [...value.days];

    return (
        <>
            <Wrapper>
                <Infos>
                    <p>{value.name}</p>
                    <ul>
                        {weekDay.map((value, index) => <Days key={index} type={true} index={index} array={aux} value={value} />)}
                    </ul>
                </Infos>
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
    ion-icon{
        font-size: 25px;
        padding: 15px;
    }
`;

const Infos = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
