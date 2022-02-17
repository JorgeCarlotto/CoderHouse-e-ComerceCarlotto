import React, { useContext } from 'react';

import { NavLink } from "react-router-dom";
import { CartContext } from '../../context/CartContex';

function Cart() {

  const { items, clearCart,removeCartItem } = useContext(CartContext);


  const ClickRemove = (item) =>{
    removeCartItem(item);
}


  const ClickClear = () => {
    clearCart()
}

  if(items.length === 0){
    return (<div>
        <p >Tu carrito se encuentra vacio en este momento </p>
        <NavLink to="/"> Volvemos a la Tienda?</NavLink>
    </div>)
}


  return (
    <div>
      <div className="title text-center py-1">
        <h1>Bienvenid@ a tu carrito:</h1>
      </div>
      <ul>
        {items.map(({ item, quantity }) => (
          <li>
            Nombre producto : {item.name} -- Categoria: {item.category} -- Cantidad a comprar:{quantity} -- 
             <button onClick={() => ClickRemove(item.id)} >Eliminar Producto del carrito</button>
          </li>
        ))}
      </ul>
    
      <div>
            <button onClick={() => ClickClear()}> Borrar todos los productos </button>
        </div>
          
      <div>
      <NavLink to="/"> <h2>Seguimos comprando?</h2></NavLink>
      </div>
    </div>
  );
};

export default Cart;
