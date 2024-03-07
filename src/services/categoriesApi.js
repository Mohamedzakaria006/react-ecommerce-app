import axios from "axios";

export async function getAllCategories() {
  const { data } = await axios.get("https://dummyjson.com/products/categories");
  return data;
}
