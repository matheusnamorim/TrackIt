import styled from "styled-components";
import Container from "../../styles/Container";
import Logo from "../Logo/Logo";
import Form from "../../styles/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Registration(){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [typeInput, setTypeInput] = useState('password');
    const [isDisabled, setIsDisabled] = useState(false);
    const [msgbtn, setMsgBtn] = useState('Cadastrar');

    function register(event){
        event.preventDefault();
        setIsDisabled(true);
        setMsgBtn(<ThreeDots color="#FFF" height={45} width={45} />);
    }

    function showPassword(){
        if(typeInput === 'password') setTypeInput('text');
        if(typeInput === 'text') setTypeInput('password');
    }

    return (
        <>
            <Container>
                <Logo/>
                <Form onSubmit={register} color={+isDisabled}>
                    <input type='email' disabled={isDisabled} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required/>
                    <input type={typeInput} disabled={isDisabled} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" required/>
                    <ion-icon onClick={() => showPassword()} name="eye-outline"></ion-icon>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="nome" disabled={isDisabled} required/>
                    <input type='url' value={url} onChange={(e) => setUrl(e.target.value)} placeholder="foto" disabled={isDisabled} required/>
                    <button disabled={isDisabled} >{msgbtn}</button>
                </Form>
                <Login onClick={() => {if(!isDisabled) navigate('/')}}>Já tem uma conta? Faça login!</Login>
            </Container>
        </>
    );
}

const Login = styled.p`
    text-decoration: underline;
    font-size: 14px;
    color: #52B6FF;
    cursor: pointer;
`;