import styled from "styled-components";
import logo from '../../assets/imgs/logo.png';


export default function MainRoute(){
    return (
        <>
            <Container>
                <Logo>
                    <img src={logo}/>
                    <p>TrackIt</p>
                </Logo>
                <input type='email' placeholder="email" />
                <input type='password' placeholder="senha" />
                <ButtonLogin>
                    Entrar
                </ButtonLogin>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Container>
        </>
    );
}


const Container = styled.div`
    
	width: 100%;
	height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        padding: 11px;
        margin-bottom: 6px;
    }

    input::placeholder{
        color: #DBDBDB;
        font-size: 20px;
    }

    p{
        text-decoration: underline;
        font-size: 14px;
        color: #52B6FF;
    }
    
`;

const ButtonLogin = styled.div`
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
`;

const Logo = styled.div`

    width: 190px;
    height: 162px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;

    img{
        width: 155px;
        height: 92px;
    }

    p{
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 70px;
        color: #126BA5;
        text-decoration: none;
    }
`;
