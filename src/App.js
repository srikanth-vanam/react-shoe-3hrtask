import React, { useState } from "react";
import "./App.css";
import DisplayItems from "./components/DisplayItems";
import Product from "./components/Product";
import Header from "./components/Header/Header";
import CartModal from "./components/Cart/CartModal";
import CartProvider from "./components/CartProvider";

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

  // const changeHandler = (item) => {
  //   setProducts((prevItems) => {
  //     const updatedItems = prevItems.map((prevItem) => {
  //       if (prevItem.id === item.id) {
  //         const updatedItem = { ...prevItem };
  
  //         if (item.large !== 0 && updatedItem.large !==0) {
  //           updatedItem.large -= item.large;
  //         }
  //         if (item.med !== 0 && updatedItem.med !==0) {
  //           updatedItem.med -= item.med;
  //         }
  //         if (item.small !== 0 && updatedItem.small !== 0) {
  //           updatedItem.small -= item.small;
  //         }
  
  //         return updatedItem;
  //       }
  //       return prevItem;
  //     });
  
  //     return updatedItems;
  //   });
  // };

  // the above code also works but it is more clear
  
  const changeHandler = (item) => {
    setProducts((prevItem) => {
      const array = [...prevItem];
      for (const i of array) {
        if (i.id === item.id) {
          if (item.large !== 0 && i.large!==0) {
            i.large -= item.large;
          }
          if (item.mid !== 0 && i.med !==0) {
            i.med -= item.med;
          }
          if (item.small !== 0 && i.small!==0) {
            i.small -= item.small;
          }
        }
      }
      return array;
    });
  }
  
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
