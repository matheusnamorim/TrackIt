import styled from "styled-components";
import logo from '../../assets/imgs/logo.png';

export default function Logo(){
    return (
        <>
            <Logos>
                <img src={logo}/>
                <p>TrackIt</p>
            </Logos>
        </>
    );
}

const Logos = styled.div`

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
