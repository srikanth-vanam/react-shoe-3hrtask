import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./CartModal.module.css";
import CartContext from "../Store/Cart-context";
import { useContext } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const Overlay = (props) => {
  const ctx = useContext(CartContext);
  const addItemQuantity = (item) => {
    ctx.addItems({ ...item, quantity: 1 });
  };
  const removeItemQuantity = (item) => {
    ctx.removeItems({ ...item, quantity: 1 });
  };
  // need to calculate total amount of cartItems
  let totalAmount = 0;
  if (ctx.items.length !== 0) {
    ctx.items.forEach((item) => {
      if (item.quantity !== 0) {
        const newPrice =  item.price.split("$")[1];
        totalAmount += (item.quantity * newPrice);
      }
    });
  }
  return (
    <Card className={classes.modal}>
      {ctx.items.map((item) => (
          <div key={item.id}>
            <span>{item.title}</span>
            <div className={classes.amount}>
              <div className={classes.amount}>
                <p>{item.price}</p>
                <button>x{item.quantity}</button>
              </div>
              <div className={classes.modifiers}>
                <button onClick={() => removeItemQuantity(item)}>-</button>
                <button onClick={() => addItemQuantity(item)}>+</button>
              </div>
            </div>
            <hr></hr>
          </div>
      ))}
      <div className={classes.amount}>
        <p>Total Amount</p>
        <p>{totalAmount}</p>
      </div>
      <div className={classes.buttons}>
        <Button onClick={props.onConfirm}>Close</Button>
        <Button>Order</Button>
      </div>
    </Card>
  );
};
const CardModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default CardModal;
