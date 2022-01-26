import React from "react";
import './items.css'
import ItemCount from "../ItemCount/ItemCount";


export const Items = ( {name, price} ) => {
  return <div className="ItemBox">
      <div>
      <h2>Nombre producto: {name}</h2>
      <h3>Precio del producto: {price}</h3>
      </div>
      < ItemCount stock={10} initial={1} />
  </div>;
};

export default Items;
