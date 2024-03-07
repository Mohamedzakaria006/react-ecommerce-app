import axios from "axios";

export async function getAllProducts(category) {
  if (!category) {
    const { data } = await axios.get("https://dummyjson.com/products");
    return data;
  } else {
    const { data } = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    return data;
  }
}

export async function getProductDetails(id) {
  try {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
  } catch (err) {
    throw new Error("This Product does not exist");
  }
}
