import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./CartModal.module.css";
import { useContext } from "react";
import CartContext from "../../Cart-context";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const Overlay = (props) => {
  const ctx = useContext(CartContext);

  // need to calculate total amount of cartItems
  let totalAmount = 0;
  if (ctx.items.length !== 0) {
    ctx.items.forEach((item) => {
      const quantity = item.large + item.med + item.small;
      totalAmount += (quantity * item.price);
    });
  }
  return (
    <Card className={classes.modal}>
      {ctx.items.map((item) => (
        <div key={item.id}>
          <div className={classes.amount}>
            <span>{item.name}</span>
            <p>{item.desc}</p>
            <p>{item.price}</p>
            <span>{item.large}L</span>
            <span>{item.med}M</span>
            <span>{item.small}S</span>
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
