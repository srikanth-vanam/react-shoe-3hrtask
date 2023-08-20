import { useContext} from "react";
import CartContext from "./Cart-context";
import Card from "./components/UI/Card";

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
    <Card>
      {props.items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.desc}</span>
          <span>{item.price}</span>
          <p>Quantity Available</p>
          <button onClick={() => addLItem(item)}>
            Buy large({item.large})
          </button>
          <button onClick={() => addMItem(item)}>Buy medium({item.med})</button>
          <button onClick={() => addSmItem(item)}>
            Buy small({item.small})
          </button>
        </div>
      ))}
      </Card>
  );
};

export default DisplayItems;
