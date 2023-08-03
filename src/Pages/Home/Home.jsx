import { Button } from "@mantine/core";
import React, { useEffect } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand, toggleStock } from "../../redux/actionCreators/filterActions";

import fetchProductsData from "../../redux/thunk/products/fetchProducts";

const Home = () => {
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filter.filters);
  const products = useSelector((state) => state.product.products);
  console.log(products);
  const { brands, stock } = filters;

  const activeClass = "text-primary text-bg-dark";

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  let content;

  if (products.length) {
    content = products?.map((product) => <ProductCard key={product._id} product={product}></ProductCard>);
  }

  if (products.length && (stock || brands.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCard product={product}></ProductCard>);
    console.log(content);
  }

  return (
    <div>
      <section>
        <Button>{products.length}</Button>

        <div className="d-flex gap-4 mx-auto w-50 mx-auto ">
          <Button
            onClick={() => dispatch(toggleBrand("amd"))}
            color="grape"
            size="xs"
            className={`${brands.includes("amd") ? activeClass : null}`}
          >
            AMD
          </Button>{" "}
          <Button
            onClick={() => dispatch(toggleBrand("intel"))}
            color="grape"
            size="xs"
            className={`${brands.includes("intel") ? activeClass : null}`}
          >
            Intel
          </Button>
          <Button
            onClick={() => dispatch(toggleStock())}
            color="orange"
            size="xs"
            className={`${stock ? activeClass : null}`}
          >
            In stock
          </Button>
        </div>

        <div className="card_container">{content}</div>
      </section>
    </div>
  );
};

export default Home;
