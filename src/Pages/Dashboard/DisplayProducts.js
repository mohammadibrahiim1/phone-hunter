import React from "react";
import { useGetProductsQuery, useRemoveProductMutation } from "../../features/api/apiSlice";

const DisplayProducts = () => {
  const { isError, isLoading, isSuccess, data, error } = useGetProductsQuery(null, { refetchOnMountOrArgChange: true });
  const products = data?.data;

  const [removeProduct] = useRemoveProductMutation();
  console.log(products);
  return (
    <div>
      {products?.length}

      {products?.map((product) => (
        <>
          <div>{product.model}</div>
          <div>{product.price}</div>
          <div>{product.brand}</div>
          <button onClick={() => removeProduct(product._id)} className="btn btn-danger">
            delete
          </button>
        </>
      ))}
    </div>
  );
};

export default DisplayProducts;
