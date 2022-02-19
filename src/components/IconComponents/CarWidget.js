import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

function CarWidget() {

  // const {cartItems} = useContext(CartContext)

  return (
    <div>
      <FaShoppingCart color="white" />
    </div>
  );
}
export default CarWidget;
