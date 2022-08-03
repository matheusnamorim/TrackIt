import styled from "styled-components";
import Container from "../../styles/Container";
import Logo from "../Logo/Logo";
import Form from "../../styles/Form";
import { useNavigate } from "react-router-dom";

export default function Registration(){

    const navigate = useNavigate();

    function register(event){
        event.preventDefault();
    }

    return (
        <>
            <Container>
                <Logo/>
                <Form onSubmit={register}>
                    <input type='email' placeholder="email" required/>
                    <input type='password' placeholder="senha" required/>
                    <input type='text' placeholder="nome" required/>
                    <input type='url' placeholder="foto" required/>
                    <button>Cadastrar</button>
                </Form>
                <Login onClick={() => navigate('/')}>Já tem uma conta? Faça login!</Login>
            </Container>
        </>
    );
}

const Login = styled.p`
    text-decoration: underline;
    font-size: 14px;
    color: #52B6FF;
`;