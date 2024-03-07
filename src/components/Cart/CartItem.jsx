import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const { title, totalPrice, quantity, productId } = item;
  const dispatch = useDispatch();
  return (
    <li className="d-flex justify-content-between">
      <p className="mb-1 ">
        {quantity}&times; {title}
      </p>
      <div className="d-flex justify-content-between">
        <p className="mr-4">{totalPrice}</p>
        <button
          className="btn btn-primary btn-sm"
          pizzaId={productId}
          onClick={() => dispatch(deleteItem(productId))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
