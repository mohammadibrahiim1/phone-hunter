import axios from "../../utils/axios.config";

export const fetchProducts = async () => {
  const data = await axios.get("/products");
  console.log(data);
  //   fetch("http://localhost:5000/products");
  //   const data = await res.json();
  return data.data.data;
};

export const postProduct = async (productData) => {
  await axios.post("/product", productData);
};
