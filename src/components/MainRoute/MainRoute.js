import styled from "styled-components";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { ThreeDots } from "react-loader-spinner";
import { signIn } from "../services/trackit";

export default function MainRoute(){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [typeInput, setTypeInput] = useState('password');
    const [msgbtn, setMsgBtn] = useState('Entrar');
    const [isDisabled, setIsDisabled] = useState(false);
    const [eye, setEye] = useState('eye-off-outline');


    function login(event){
        event.preventDefault();
        setIsDisabled(true);
        setMsgBtn(<ThreeDots color="#FFF" height={45} width={45} />);

        const body ={
            email: email,
            password: password
        };

        setTimeout(function(){
            signIn(body)
            .then((data) => {
                const dadosSerializados = JSON.stringify(data.data);
                localStorage.setItem('trackit', dadosSerializados);
                navigate('/hoje');
            })
            .catch(() => {
                alert('ERRO: insira os dados novamente');
                setIsDisabled(false);
                setMsgBtn('Entrar');
            });
        }, 1000);
    }

    function showPassword(){
        if(typeInput === 'password') {
            setTypeInput('text');
            setEye('eye-outline');
        }
        if(typeInput === 'text') {
            setTypeInput('password');
            setEye('eye-off-outline');
        }
    }

    return (
        <>
            <Container color='#FFF' aligner={+true}>
                <Logo />
                <Form onSubmit={login} color={+isDisabled}>
                    <input type='email' disabled={isDisabled} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required/>
                    <input type={typeInput} disabled={isDisabled} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" required/>
                    <ion-icon onClick={() => showPassword()} name={eye}></ion-icon>
                    <button disabled={isDisabled}>{msgbtn}</button>
                </Form>
                <Register onClick={() => {if(!isDisabled) navigate('/cadastro')}}>N??o tem uma conta? Cadastre-se!</Register>
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