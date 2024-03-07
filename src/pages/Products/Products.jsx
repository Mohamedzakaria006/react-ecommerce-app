import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/productsApi";
import Spinner from "../../ui/Spinner";
import Product from "../../components/Product/Product";
import SideBar from "../../components/SideBar/SideBar";
import { useState } from "react";

function Products() {
  const [category, setCategory] = useState();

  const { isLoading, data } = useQuery({
    queryKey: ["products", category],
    queryFn: () => getAllProducts(category),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <SideBar category={category} setCategory={setCategory} />
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="col-10">
            <div className="row mt-5">
              {data?.products?.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Products;
