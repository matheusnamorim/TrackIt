import styled from "styled-components";

export default function Form({children, color, ...otherprops}){

    return <Wrapper color={color} {...otherprops}>{children}</Wrapper>
}

const Wrapper = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    input{
        background-color: ${props => props.color ? ' #F2F2F2' : '#FFF'};
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        padding: 11px;
        margin-bottom: 6px;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: ${props => props.color ? '#AFAFAF' : '#000'};
    }

    input::placeholder{
        color: #DBDBDB;
        font-size: 20px;
    }

    button{
        width: 303px;
        height: 45px;
        background-color: #52B6FF;
        border: 1px solid #FFF;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        cursor: pointer;
    }

    ion-icon{
        position: absolute;
        font-size: 22px;
        right: 10px;
        top: 65px;
        cursor: pointer;
    }
`;