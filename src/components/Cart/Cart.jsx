import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { clearCart } from "./cartSlice";

function Cart() {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="px-4 py-3">
      <button>
        <Link to={"/products"}>&larr; Back to Products</Link>
      </button>

      <h2>{cart.length > 0 ? `Your cart, ` : "Please Add Some Items "} </h2>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
          <div>
            <button
              className="btn btn-primary btn-sm"
              onClick={handleClearCart}
            >
              Clear cart
            </button>
          </div>{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

//onClick={handleClearCart}

export default Cart;
