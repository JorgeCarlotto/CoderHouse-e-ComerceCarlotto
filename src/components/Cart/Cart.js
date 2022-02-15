import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContex';

function Cart() {

  const { items } = useContext(CartContext);



  return (
    <div>
      <div className="title text-center py-1">
        <h1>Bienvenid@ a tu carrito:</h1>
      </div>
      <ul>
        {items.map(({ item, quantity }) => (
          <li>
            Nombre producto : {item.name} // Categoria: {item.category} // Cantidad:{quantity} 
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Cart;
