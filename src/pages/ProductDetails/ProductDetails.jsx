import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetails } from "../../services/productsApi";

function ProductDetails() {
  const navigate = useNavigate();
  // const { id } = useParams();

  // const { data, isLoading } = useQuery({
  //   queryKey: ["product", id],
  //   queryFn: () => getProductDetails(id),
  // });

  const product = JSON.parse(localStorage.getItem("product"));
  const { title, thumbnail, price, description, rating, stock } = product;

  return (
    <>
      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col-3 border p-2 text-center">
            <img src={thumbnail} alt="" className="w-100 h-100" />
          </div>
          <div className="col-5 ms-5">
            <div className="fw-bolder">Proiduct Title</div>
            <span>{title}</span>
            <div className="fw-bolder">Price</div>
            <span>{price} $</span>
            <div className="fw-bolder">Description</div>
            <span>{description}</span>
            <div className="fw-bolder">Rating</div>
            <span>{rating}</span>
            <div className="fw-bolder">In Stock</div>
            <span>{stock}</span>
          </div>
        </div>
        <button
          className="mt-5 btn btn-primary btn-sm d-block ms-auto"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </>
  );
}

export default ProductDetails;
