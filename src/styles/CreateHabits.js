import styled from "styled-components";

export default function CreateHabits ({children, color}){
    return <Wrapper color={color}>{children}</Wrapper>
}

const Wrapper = styled.div`
    margin: 20px 18px 0 18px;
    border-radius: 5px;
    height: 180px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;

    input{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        margin: 18px 18px 10px 18px;
        padding-left: 10px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        font-size: 20px;
        color: ${props => props.color ? '#B3B3B3' : '#666666'} ;
        background-color: ${props => props.color ? '#F2F2F2' : '#FFFFFF'};
    }
    input::placeholder{
        color: #DBDBDB;
    }
    button{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        width: 84px;
        height: 35px;
        border: none;
        border-radius: 5px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    ul{
        margin: 0 18px;
        margin-bottom: 20px;
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
        cursor: pointer;
    }
`;