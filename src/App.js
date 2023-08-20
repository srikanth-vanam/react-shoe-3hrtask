import React, { useState } from "react";

import "./App.css";
import DisplayItems from "./DisplayItems";
import Product from "./Product";
import CartContext from "./Cart-context";
import Header from "./components/Header/Header";
import CartModal from "./components/Cart/CartModal";
import CartProvider from "./CartProvider";

function App() {
  const [products, setProducts] = useState([]);
  const [cartShow, setCartShow] = useState(false);
  const cartShowHandler = () => {
    setCartShow(true);
  };
  const cartHideHandler = () => {
    setCartShow(false);
  };
  const saveHandler = (item) => {
    setProducts((prevItem) => {
      return [...prevItem, item];
    });
  };
  const changeHandler = (item) => {
    setProducts((prevItems) => {
      const updatedItems = prevItems.map((prevItem) => {
        if (prevItem.id === item.id) {
          const updatedItem = { ...prevItem };
  
          if (item.large > 0) {
            updatedItem.large = Math.max(0, updatedItem.large - item.large);
          }
          if (item.med > 0) {
            updatedItem.med = Math.max(0, updatedItem.med - item.med);
          }
          if (item.small > 0) {
            updatedItem.small = Math.max(0, updatedItem.small - item.small);
          }
  
          return updatedItem;
        }
        return prevItem;
      });
  
      return updatedItems;
    });
  };
  
  
  return (
    <CartProvider>
      {cartShow && <CartModal onConfirm={cartHideHandler} />}
      <Header onCartShow={cartShowHandler} />
      <Product onSave={saveHandler} />
      <DisplayItems items={products} onChange={changeHandler}/>
    </CartProvider>
  );
}

export default App;
