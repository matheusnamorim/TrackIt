import { useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

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
        return <li className={selected ? 'selected' : 'noSelected'} onClick={()=> selectedDay()}>{value}</li>
    }else{
        if(index === 0) index = 7;  
        if((array.filter(e => e === index)).length === 1) return <li className='selected'>{value}</li>;
        else return <li className='noSelected'>{value}</li>;
    }
}