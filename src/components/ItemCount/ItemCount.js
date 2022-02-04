import React, { useState } from "react";
 

const ItemCount = ({stock , initial}) => {
  const [counter, setCounter] = useState(initial);

  const minusCounter = () => {
    if (counter <= 0 ) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= stock || stock === 0) return;
    setCounter(counter + 1);

  };

  return (
      <>
    <div className="ItemCount">
      <h4>Cantidad de Productos</h4>
      <div className="itemCountBottons">
      <button onClick={minusCounter}>➖</button>
      <span>{counter}</span>
      <button onClick={plusCounter}>➕</button>
    </div>
    <button className="AddProduct"> Agregar al Carrito </button>
    </div>
    </>
  );
};

export default ItemCount;
