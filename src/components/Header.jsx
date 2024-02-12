import Button from "./UI/Button";
import logo from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import { useContext } from "react";

export default function Header({ itemsInCart }) {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Website logo" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        {/* shows how many items are in the cart */}
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
