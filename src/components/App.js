import GlobalStyle from "../styles/globalStyles"
import MainRoute from "./MainRoute/MainRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./Registration/Registration";

export default function App(){
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainRoute />}/>
                    <Route path='/cadastro' element={<Registration/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}