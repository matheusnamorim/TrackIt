import styled from "styled-components";

export default function TopBar({img}){
    return( 
        <>
            <Wrapper>
                <p>TrackIt</p>
                <img src={img}/>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    position: fixed;
    height: 70px;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p{
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 40px;
        color: #FFF;
    }

    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;