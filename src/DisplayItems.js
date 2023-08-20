import { useContext, useEffect, useState } from "react";
import CartContext from "./Cart-context";

const DisplayItems = (props) => {

  const ctx = useContext(CartContext);
  const addLItem = (item) => {
    ctx.addItems({ ...item, large: 1, med: 0, small: 0 });
    props.onChange({ ...item, large: 1, med: 0, small: 0 })
  };
  const addMItem = (item) => {
    ctx.addItems({ ...item, large: 0, med: 1, small: 0 });
    props.onChange({ ...item, large: 0, med: 1, small: 0 })
  };
  const addSmItem = (item) => {
    ctx.addItems({ ...item, large: 0, mid: 0, small: 1 });
    props.onChange({ ...item, large: 0, mid: 0, small: 1 })
  };
  return (
    <>
      {props.items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.desc}</span>
          <span>{item.price}</span>
          <p>Quantity Available</p>
          <button onClick={() => addLItem(item)} >
            Buy large({item.large})
          </button>
          <button onClick={() => addMItem(item)}>
            Buy medium({item.med})
          </button>
          <button onClick={() => addSmItem(item)} >
            buy small({item.small})
          </button>
        </div>
      ))}
    </>
  );
};

export default DisplayItems;
