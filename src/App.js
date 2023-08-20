import React, { useState } from 'react';

import './App.css';
import DisplayItems from './DisplayItems';
import Product from './Product';

function App() {
  const [products,setProducts]=useState([]);
    const saveHandler=(item)=>{
      setProducts((prevItem)=>{
            return[...prevItem,item];
        })
    }
    return (
      <>
      <Product onSave={saveHandler}/>
      <DisplayItems items={products}/>
      </>
    );
}

export default App;
