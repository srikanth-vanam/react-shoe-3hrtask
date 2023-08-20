import { useState } from "react";

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
    setName('')
    setDesc('');
    setPrice(0);
    setLarge(0);
    setMed(0);
    setSmall(0);
  };
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="productName">Product Name</label>
        <input
          id="productName"
          type="text"
          value={name}
          onChange={nameHandler}
        ></input>
        <label htmlFor="desc">Description</label>
        <input
          id="desc"
          type="text"
          value={desc}
          onChange={descHandler}
        ></input>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          min={1}
          value={price}
          onChange={priceHandler}
        ></input>
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

        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default Product;
