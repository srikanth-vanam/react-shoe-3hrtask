import CartContext from "./Cart-context";
import { useState } from "react";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemsHandler = (item) => {
    let itemExists = false;
    setCartItems((prevItems) => {
      let oldItems = [...prevItems];
      for (const key of oldItems) {
        // if item is already present increasing quantity
        if (key.id === item.id) {
          if(item.large !==0){
            key.large += item.large;
          }
          if(item.med!==0){
            key.med+=item.med;
          }
          if(item.small!==0){
            key.small+=item.small
          }
          itemExists = true;
          break;
        }
      }
      // if item is not there in itemsList adding item to cartItems
      if (!itemExists && (item.large !== 0 || item.med !==0 || item.small !==0)) {
        oldItems.push(item);
      }
      return oldItems;
    });
  };
  
  const cartContext = {
    items: cartItems,
    totalAmount: 0,
    addItems: addItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
