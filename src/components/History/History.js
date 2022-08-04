import styled from "styled-components";
import Footer from "../Footer/Footer";
import TopBar from "../TopBar/TopBar";
import Container from "../../styles/Container";

export default function History(){
    const auth = JSON.parse(localStorage.getItem('trackit'));

    return (
        <>
            <Container color='#f2f2f2'>
                <TopBar img={auth.image}/>
                <Text>Histórico</Text>
                <NoHistory>Em breve você poderá ver o histórico dos seus hábitos aqui!</NoHistory>
                <Footer/>
            </Container>
        </>
    );
}

const Text = styled.p`
    color: #126BA5;
    font-size: 18px;
    padding: 100px 18px 0 18px;
`;

const NoHistory = styled.p`
    padding: 28px 18px;
    font-size: 18px;
    font-weight: 400;
    color: #666666;
`;