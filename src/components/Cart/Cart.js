import React, { useContext } from 'react';
import { BsFillTrashFill } from "react-icons/bs";

import { NavLink } from "react-router-dom";
import { CartContext } from '../../context/CartContex';

function Cart() {

  const { items, clearCart,removeCartItem,SubTotalPrice,TotalItem } = useContext(CartContext);


  const ClickRemove = (item) =>{
    removeCartItem(item);
}


  const ClickClear = () => {
    clearCart()
}

  if(items.length === 0){
    return (<div>
        <h2 className="title text-center py-1" >Tu carrito se encuentra vacio en este momento </h2>
        <NavLink to="/"> <h2 className="title text-center py-1">Volvemos a la Tienda?</h2></NavLink>
    </div>)
}


  return (
    <div>
      <div className="title text-center py-1">
        <h1>Bienvenid@ a tu carrito:</h1>
      </div>

      <div>

      <table class="table">
  <thead>
    <tr>
      <th scope="col">Tus productos seleccionados</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">SubTotal </th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
  {items.map(({ item, quantity }) => (
    <tr> 
      <td>{item.name}</td>
      <td>{quantity}</td>
      <td>{item.price}$</td>
      <td>{SubTotalPrice(item.price, quantity)}$</td>
      <td><button onClick={() => ClickRemove(item.id)} ><BsFillTrashFill/></button></td>
    </tr>
   
))}
  </tbody>
</table>
      </div>


      <div>
        <button onClick={() => ClickClear()}> Borrar todos los productos<BsFillTrashFill/> </button>
      </div>



      <div className="title text-center py-1">
        <h4>Resumen de tu compra:</h4>
      </div>

  <div>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Total de productos</th>
      <th scope="col">Valor total de la compra</th>
      <th scope="col">Finalizar compra</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{TotalItem()}</th>
      <td>$</td>
      <td>Link a checkout</td>
    </tr>
  </tbody>
</table>
  </div>




        <div>
      <NavLink to="/"> <h2>Seguimos comprando?</h2></NavLink>
      </div>


    </div>
  );
};

export default Cart;
