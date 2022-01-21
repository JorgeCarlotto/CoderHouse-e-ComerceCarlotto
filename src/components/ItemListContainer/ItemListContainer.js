import React from 'react';
import Items from "../ItemsContainer/Items"

const NuevosProductos = [
  { id: 1, name: "Caña Pesca Maritima", price: "200" },
  { id: 2, name: "Chaleco De Pesca", price: "50" },
  { id: 3, name: "Kit De Anzuelos", price: "125" },
  { id: 4, name: "Plomadas Voladoras", price: "10" },
  { id: 5, name: "Calcos", price: "1000" },
];


const ItemListContainer = () => {
  return <div>
    <h2>No te pierdas nuestros ultimo productos:</h2>
    
   {NuevosProductos.map((productos)=>(
     <Items productos={productos} />
   ))}
   

  </div>;
};

export default ItemListContainer;
