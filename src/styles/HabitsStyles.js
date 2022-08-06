import styled from "styled-components";

export default function HabitsStyles({children, done, color}){
    return <Wrapper done={done} color={color}>{children}</Wrapper>
}

const Wrapper = styled.div`
    height: 94px;
    margin: 0 18px 10px 0;
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        height: 100%;
        margin-right: 120px;
        padding: 15px 0 15px 15px;

        b{
            color: ${props => props.done ? '#8FC549' : '#666666'};
        }
        strong{
            color: ${props => props.color ? '#8FC549' : '#666666'};
        }

        p{
            padding-bottom: 8px;
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            color: #666666;
            font-size: 20px;
            margin: 0 0;
        }

        h1{
            padding-bottom: 5px;
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            color: #666666;
            font-size: 12px;
        }
    }

    span{
        width: 69px;
        height: 69px;
        cursor: pointer;

        ion-icon{
            font-size: 69px;
            color: ${props => props.done ? '#8FC549' : '#EBEBEB'}
        }
    }
`;
