import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import { Main } from "../pages/main/Main";
import { GunsDetails } from "../components/gunsdetails/GunsDetails";
export function Rotas(){
    return(
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/guns" element={<GunsDetails/>}></Route>
            </Routes>
         </BrowserRouter>   
    )
}