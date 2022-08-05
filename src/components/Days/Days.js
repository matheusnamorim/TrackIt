import { useState } from "react";

export default function Days({value, days, setDays, index, colorSave}){

    const [selected, setSelected] = useState('noSelected');

    function selectedDay(){
        if(!colorSave){ 
            if(selected === 'noSelected') {
                setSelected('selected');
                if(index === 0) index=7;
                setDays([...days, index]);
            }
            else {
                if(index === 0) index = 7;
                const aux = days.filter(i => i !== index);
                setDays([...aux]);
                setSelected('noSelected');
            }
        }
    }

    return (
        <li className={selected} onClick={()=> selectedDay()}>{value}</li>
    );
}