import GlobalStyle from "../styles/globalStyles"
import MainRoute from "./MainRoute/MainRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./Registration/Registration";
import Today from "./Today/Today";
import UserContext from "../contexts/UserContext";
import { useState } from "react";

export default function App(){

    const [loginData, setLoginData] = useState({});

    return (
        <>
            <UserContext.Provider value={{loginData, setLoginData}}>
                <GlobalStyle/>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainRoute />}/>
                        <Route path='/cadastro' element={<Registration/>}/>
                        <Route path='/hoje' element={<Today/>}/>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}