import styled from "styled-components";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Container from "../../styles/Container";
import Form from "../../styles/Form";

export default function MainRoute(){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [typeInput, setTypeInput] = useState('password');

    function login(event){
        event.preventDefault();
    }

    function showPassword(){
        if(typeInput === 'password') setTypeInput('text');
        if(typeInput === 'text') setTypeInput('password');
    }

    return (
        <>
            <Container>
                <Logo />
                <Form onSubmit={login}>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required/>
                    <input type={typeInput} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" required/>
                    <ion-icon onClick={() => showPassword()} name="eye-outline"></ion-icon>
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
    cursor: pointer;
`;