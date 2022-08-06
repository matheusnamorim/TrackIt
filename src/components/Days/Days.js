import { useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import styled from "styled-components";

export default function Days({value, index, colorSave, type, array}){

    const { weekSelected, setWeekSelected } = useContext(UserContext);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if(index === 0) index = 7;
        if(weekSelected !== undefined && weekSelected.includes(index)) {
            setSelected(!selected);
        }
    }, []);

    function selectedDay(){
        if(!colorSave){
            if(index === 0) index = 7;
            if(!selected) {
                if(!(weekSelected.includes(index))) setWeekSelected([...weekSelected, index]);
                setSelected(!selected);
            }
            else {
                const aux = weekSelected.filter(i => i !== index);
                setWeekSelected([...aux]);
                setSelected(!selected);
            }
        }
    }

    if(!type){
        return selected ? (<Selected onClick={()=> selectedDay()}>{value}</Selected>)
        : (<NoSelected onClick={()=> selectedDay()}>{value}</NoSelected>);
    }else{
        if(index === 0) index = 7;  
        if((array.filter(e => e === index)).length === 1) return <Selected>{value}</Selected>;
        else return <NoSelected>{value}</NoSelected>;
    }
}

const NoSelected = styled.li`
    color: #DBDBDB;
    border: 1px solid #D5D5D5;
`;

const Selected = styled.li`
    color: #FFF;
    background-color: #CFCFCF;
    border: 1px solid #CFCFCF;
`;