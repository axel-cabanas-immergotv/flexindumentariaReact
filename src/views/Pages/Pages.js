import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compra from "../Compra/Compra";
import AcercaDe from "../AcercaDe/AcercaDe";
import Ayuda from "../Ayuda/Ayuda";

export default function Pages (){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/Compra" element={<Compra/>} />
                <Route exact path="/AcercaDe" element={<AcercaDe/>} />
                <Route exact path="/Ayuda" element={<Ayuda/>} />
            </Routes>
        </BrowserRouter>
    )
}