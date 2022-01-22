import React from "react";
import './items.css'


export const Items = ( {name, price} ) => {
  return <div className="ItemBox">
      <div>
      <h2>Nombre producto: {name}</h2>
      <h3>Precio del producto: {price}</h3>
      </div>
  </div>;
};

export default Items;
