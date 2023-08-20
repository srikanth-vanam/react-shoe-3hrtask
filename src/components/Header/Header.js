import CartContext from "../../Cart-context";
import classes from "./Header.module.css";
import { useContext } from "react";
const Header = (props) => {
  const CartCtxt = useContext(CartContext);

  // to display the count of items quantity
  let numberOfItems = 0;
  CartCtxt.items.forEach((item) => {
    numberOfItems += (item.large+item.med+item.small);
  });

  return (
    <>
      <header className={classes.outer}>
        <h1>Shoe Store</h1>
        <button onClick={props.onCartShow}>
          
          <span>Your Cart</span>
          <span className={classes.count}>{numberOfItems}</span>
        </button>
      </header>
    </>
  );
};

export default Header;
