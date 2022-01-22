import React from 'react';
import Items from "../ItemsContainer/Items"



// Productos traidos de API/Back ficticia
const NuevosProductos = [
  { id: 1, name: "Caña Pesca Maritima", price: "200", stock: "0" },
  { id: 2, name: "Chaleco De Pesca", price: "50", stock: "0" },
  { id: 3, name: "Kit De Anzuelos", price: "125", stock: "0" },
  { id: 4, name: "Plomadas Voladoras", price: "10", stock: "0" },
  { id: 5, name: "Calcos", price: "1000", stock: "0" },
];


const ItemListContainer = () => {
  return <div>
    <h2>No te pierdas nuestros ultimo productos:</h2>
    <hr/>
    
   {NuevosProductos.map(({id, name, price})=>(
     <Items key={id} name={name} price ={price} />
   ))}
   

  </div>;
};

export default ItemListContainer;
