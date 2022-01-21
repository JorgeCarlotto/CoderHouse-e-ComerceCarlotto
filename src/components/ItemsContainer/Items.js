import React from "react";


export const Items = ({productos}) => {
  return <div>
      <h2>Nombre producto: {productos.name}</h2>
      <h2>Precio del producto: {productos.price}</h2>
      <hr/>
  </div>;
};

export default Items;
