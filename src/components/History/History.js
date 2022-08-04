import Footer from "../Footer/Footer";
import TopBar from "../TopBar/TopBar";
import Container from "../../styles/Container";

export default function History(){
    const auth = JSON.parse(localStorage.getItem('trackit'));

    return (
        <>
            <Container color='#f2f2f2'>
                <TopBar img={auth.image}/>
                <Footer/>
            </Container>
        </>
    );
}