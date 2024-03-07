import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../services/categoriesApi";
import Category from "../Category/Category";
import Spinner from "../../ui/Spinner";
import stylesCat from "../Category/Category.module.css";
import stylesSide from "../SideBar/SiedBar.module.css";

function SideBar({ setCategory }) {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  return (
    <div className={`border p-3 mt-5 ${stylesSide.sidebar}`}>
      <h6 className="mb-3">Categories</h6>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <p
            className={`${stylesCat.cat} mb-2 p-2`}
            onClick={() => setCategory(null)}
          >
            ALL
          </p>
          {categories.map((category) => (
            <Category
              setCategory={setCategory}
              key={category}
              category={category}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default SideBar;
