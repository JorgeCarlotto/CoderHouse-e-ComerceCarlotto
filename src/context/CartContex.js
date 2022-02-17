import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (currentItem) => {
    if (items.some(({ item }) => item.id === currentItem.item.id)) return;
    setItems([...items, currentItem]);
  };

 

  const removeCartItem = (ItemId) => {
    setItems(items.filter((item) => item.item.id != ItemId))
};

  const clearCart = () => {
    setItems([]);
};



  return (
    <CartContext.Provider value={{ items, addItem, clearCart,removeCartItem}}>
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};
