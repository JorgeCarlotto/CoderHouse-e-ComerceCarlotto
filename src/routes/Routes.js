import React from 'react';

import {BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import NotFound from "../components/NotFound/NotFound";

const Rout = ()=>{
    return (
        
       <BrowserRouter>
        <Routes>
            <Route  path="/" element={<h1>Home</h1>} />
            <Route path="/category" element={<ItemListContainer />} />
            <Route path="/item" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>   
    )
} 

export default Rout