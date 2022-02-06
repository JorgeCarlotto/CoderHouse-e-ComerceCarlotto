import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from '../components/Footer/Footer';
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import NavBar from '../components/NavBar/NavBar';
import NotFound from "../components/NotFound/NotFound";

const Rout = ()=>{
    return (
        
       <BrowserRouter>
       <NavBar/>
       
        <Routes>
            <Route  path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
        </BrowserRouter>   
    )
} 

export default Rout