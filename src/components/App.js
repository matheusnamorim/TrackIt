import GlobalStyle from "../styles/globalStyles"
import MainRoute from "./MainRoute/MainRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App(){
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainRoute />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}