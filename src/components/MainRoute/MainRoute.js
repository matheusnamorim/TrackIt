import styled from "styled-components";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import Container from "../../styles/Container";
import Form from "../../styles/Form";

export default function MainRoute(){

    const navigate = useNavigate();

    function login(event){
        event.preventDefault();
    }

    return (
        <>
            <Container>
                <Logo />
                <Form onSubmit={login}>
                    <input type='email' placeholder="email" required/>
                    <input type='password' placeholder="senha" required/>
                    <button>Entrar</button>
                </Form>
                <Register onClick={() => navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</Register>
            </Container>
        </>
    );
}

const Register = styled.p` 
    text-decoration: underline;
    font-size: 14px;
    color: #52B6FF;
`;