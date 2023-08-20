import { useContext } from "react";
import CartContext from "../Cart-context";
import Card from "./UI/Card";
import classes from "./DisplayItems.module.css";
import Button from "./UI/Button";
const DisplayItems = (props) => {
  const ctx = useContext(CartContext);
  const addLItem = (item) => {
    props.items.forEach((element) => {
      if (element.id === item.id) {
        if (element.large > 0) {
          ctx.addItems({ ...item, large: 1, med: 0, small: 0 });
        }
      }
    });
    props.onChange({ ...item, large: 1, med: 0, small: 0 });
  };
  const addMItem = (item) => {
    props.items.forEach((element) => {
      if (element.id === item.id) {
        if (element.med > 0) {
          ctx.addItems({ ...item, large: 0, med: 1, small: 0 });
        }
      }
    });
    props.onChange({ ...item, large: 0, med: 1, small: 0 });
  };
  const addSmItem = (item) => {
    props.items.forEach((element) => {
      if (element.id === item.id) {
        if (element.small > 0) {
          ctx.addItems({ ...item, large: 0, med: 0, small: 1 });
        }
      }
    });
    props.onChange({ ...item, large: 0, med: 0, small: 1 });
  };
  return (
    <Card className={classes.card}>
      {props.items.map((item) => (
        <>
          <div key={item.id} className={classes.outer}>
            <div className={classes.first}>
              <p><b>{item.name}</b></p>
              <p>{item.desc}</p>
              <p>
                <b>{item.price}</b>
              </p>
            </div>
            <div className={classes.second}>
              <p>Quantity Available</p>
              <div className={classes.buttons}>
                  <Button className={classes.action} onClick={() => addLItem(item)}>Buy Large({item.large})</Button>
                  <Button className={classes.action} onClick={() => addMItem(item)}>Buy Medium({item.med})</Button>
                  <Button className={classes.action} onClick={() => addSmItem(item)}>Buy Small({item.small})</Button>
                
              </div>
            </div>
          </div>
          <hr></hr>
        </>
      ))}
    </Card>
  );
};

export default DisplayItems;
