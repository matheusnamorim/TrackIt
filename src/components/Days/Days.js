import { useState } from "react";

export default function Days({value, days, setDays, index, colorSave, type, array}){

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

    if(!type){
        return (
            <li className={selected} onClick={()=> selectedDay()}>{value}</li>
        );
    }else{
        if(index === 0) index = 7;  
        if((array.filter(e => e === index)).length === 1) return <li className='selected'>{value}</li>;
        else return <li className='noSelected'>{value}</li>;
    }
}