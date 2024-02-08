import Button from "./UI/Button";
import logo from "../assets/logo.jpg";

export default function Header({ itemsInCart }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Website logo" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        {/* shows how many items are in the cart */}
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
