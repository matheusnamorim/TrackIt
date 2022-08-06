import GlobalStyle from "../styles/globalStyles"
import MainRoute from "./MainRoute/MainRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./Registration/Registration";
import Today from "./Today/Today";
import PrivatePage from "./PrivatePage/PrivatePage";
import UserContext from "../contexts/UserContext";
import { useState } from "react";
import Habits from './Habits/Habits'
import History from "./History/History";

export default function App(){

    const [weekDay, setWeekDay] = useState([
        'D', 
        'S', 
        'T', 
        'Q', 
        'Q', 
        'S', 
        'S',
    ]);

    const [weekSelected, setWeekSelected] = useState([]);
    const [percent, setPercent] = useState([]);
    const [cent, setCent] = useState(0);

    return (
        <>
            <UserContext.Provider value={{weekDay, setWeekDay, weekSelected, setWeekSelected, percent, setPercent, cent, setCent}}>
                <GlobalStyle/>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainRoute />}/>
                        <Route path='/cadastro' element={<Registration/>}/>
                        <Route path='/hoje' element={<PrivatePage><Today/></PrivatePage>}/>
                        <Route path='/habitos' element={<PrivatePage><Habits/></PrivatePage>}/>
                        <Route path='/historico' element={<PrivatePage><History/></PrivatePage>}/>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}