import styled from "styled-components";
import Container from "../../styles/Container";
import gif from '../../assets/imgs/gifs-do-gatinho-digitando.gif'
import { Link } from "react-router-dom";

export default function WithoutPermission(){

    return (
        <>
            <Container>
                <Error>
                    <p>Calma, Calma meu Patrão!</p>
                    <img src={gif}/>
                    <p>Se Cadastre ou faça login!!</p>
                    <Btns>
                        <Link to='/cadastro' style={{ textDecoration: 'none' }}><BtnSignUp>Cadastre-se</BtnSignUp></Link>
                        <Link to='/' style={{ textDecoration: 'none' }}><BtnLogin>Login</BtnLogin></Link>
                    </Btns>
                </Error>
            </Container>
        </>
    );
}

const Error = styled.div`
    background-color: #126BA5;
    padding: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    min-height: 100vh;
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        color: #FFF;
        font-size: 40px;
        text-align: center;
    }

    img{
        width: 300px;
        border-radius: 5px;
        border: 1px solid #FFF;
    }
`;

const Btns = styled.div`
    
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        width: 100px;
        height: 40px;
        border-radius: 5px;
        border: none;
        color: #FFF;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }
`;

const BtnLogin = styled.button`
    background-color: #00bfff;

`;

const BtnSignUp = styled.button`
    background-color: #52B6FF;
`;