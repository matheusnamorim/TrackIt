import styled from "styled-components";
import Days from "../Days/Days";

export default function ThereHabits ({value}){

    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const daysN = days.filter((e, index) => !value.days.includes(index));
    const daysS= days.filter((e, index) => value.days.includes(index));
    const aux = [...value.days];

    return (
        <>
            <Wrapper>
                <div className="infos">
                    <p>{value.name}</p>
                    <ul>
                        {days.map((value, index) => <Days key={index} type={true} index={index} array={aux} value={value} />)}
                    </ul>
                </div>
                <ion-icon name="trash-outline"></ion-icon>
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