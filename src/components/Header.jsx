import logo from "../assets/logo.jpg";

export default function Header({ itemsInCart }) {
  const cartHasItems = itemsInCart > 0;

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Website logo" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        {/* shows how many items are in the cart */}
        <button>Cart ({cartHasItems ? itemsInCart : 0})</button>
      </nav>
    </header>
  );
}
