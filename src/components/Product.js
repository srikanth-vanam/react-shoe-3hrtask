import { useState } from "react";
import Card from "./UI/Card";
import classes from './Product.module.css';
import Button from "./UI/Button";
const Product = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [large, setLarge] = useState(0);
  const [med, setMed] = useState(0);
  const [small, setSmall] = useState(0);

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
  const descHandler = (event) => {
    setDesc(event.target.value);
  };
  const lHandler = (event) => {
    setLarge(event.target.value);
  };
  const mHandler = (event) => {
    setMed(event.target.value);
  };
  const smallHandler = (event) => {
    setSmall(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const obj = {
      id: Math.random().toString(),
      name: name,
      desc: desc,
      price: +price,
      large: +large,
      med: +med,
      small: +small,
    };
    props.onSave(obj);
    setName("");
    setDesc("");
    setPrice(0);
    setLarge(0);
    setMed(0);
    setSmall(0);
  };
  return (
    <>
      <Card>
        <form onSubmit={formSubmitHandler} className={classes.outer}>
          <div className={classes.row}>
            <div className={classes.display}>
              <label htmlFor="productName">Product Name</label>
              <input
                id="productName"
                type="text"
                value={name}
                onChange={nameHandler}
              ></input>
            </div>
            <div className={classes.display}>
              <label htmlFor="desc">Description</label>
              <input
                id="desc"
                type="text"
                value={desc}
                onChange={descHandler}
              ></input>
            </div>
          </div>
          <div className={classes.row2}>
            <div className={classes.price}>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="number"
                min={1}
                value={price}
                onChange={priceHandler}
              ></input>
            </div>
            <div className={classes.size}>
              <label htmlFor="large">Large</label>
              <input
                id="large"
                type="number"
                min={1}
                value={large}
                onChange={lHandler}
              ></input>
              <label htmlFor="medium">Medium</label>
              <input
                id="medium"
                type="number"
                min={1}
                value={med}
                onChange={mHandler}
              ></input>
              <label htmlFor="small">Small</label>
              <input
                id="small"
                type="number"
                min={1}
                value={small}
                onChange={smallHandler}
              ></input>
            </div>
          </div>
          <div className={classes.button}>
          <Button type="submit">Add Product</Button>
          {/* <button type="submit">Add Product</button> */}
          </div>
        </form>
      </Card>
    </>
  );
};

export default Product;
