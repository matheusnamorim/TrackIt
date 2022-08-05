import styled from "styled-components";

export default function Container({children, color, aligner}){
    return  <Wrapper color={color} aligner={aligner} >{children}</Wrapper>
};

const Wrapper = styled.div`
    
	width: 100%;
	min-height: 100vh;
    background-color: ${props => props.color};
    
    ${(props) => {
        if(props.aligner){
            return `
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            `;
        }
    }}

`;

