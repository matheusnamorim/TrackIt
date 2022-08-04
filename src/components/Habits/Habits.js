import Footer from "../Footer/Footer";
import Container from "../../styles/Container";
import TopBar from "../TopBar/TopBar";

export default function Habits(){

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