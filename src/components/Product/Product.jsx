import { useNavigate } from "react-router";
import styels from "./Product.module.css";
import { getProductDetails } from "../../services/productsApi";
import { useDispatch } from "react-redux";
import { addItem } from "../Cart/cartSlice";

function Product({ product }) {
  const navigate = useNavigate();

  const { title, price, category, description, images, id } = product;
  const shortDescription = description.split("").slice(0, 50).join("");
  const shortTitle = title.split("").slice(0, 20).join("");
  const dispatch = useDispatch();

  function handleAddItem(id) {
    const newItem = {
      productId: id,
      title,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    if (id === newItem.productId) {
      dispatch(addItem(newItem));
    }
  }

  async function handleClick() {
    try {
      const product = await getProductDetails(id);
      localStorage.setItem("product", JSON.stringify(product));
      navigate(`${id}`);
    } catch (error) {
      return error;
    }
  }

  return (
    <div className="col-4">
      <div className="card mb-3" style={{ width: "15rem" }}>
        <div className={`${styels.image}`} onClick={handleClick}>
          <img src={images[0]} className="card-img-top" alt={images[0]} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{shortTitle}...</h5>
          <p className="card-text">{shortDescription}...</p>
          <div className="col">Price : {price}$</div>
          <div className="col">Category : {category}</div>
          <div className="col">
            <button
              className="btn btn-primary btn-sm d-block ms-auto mt-5"
              onClick={() => handleAddItem(id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
