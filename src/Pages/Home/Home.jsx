import { Button, Group, Text } from "@mantine/core";
// import { useCounter } from "@mantine/hooks";f
import React, { useContext, useEffect, useState } from "react";
import { counter_context } from "../../App";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand, toggleStock } from "../../redux/actionCreators/filterActions";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filter.filters);
  const { brands, stock } = filters;
  // console.log(brands);

  const activeClass = "text-primary text-bg-dark";

  useEffect(() => {
    // fetch("http://localhost:5000/products")
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        // console.log(data.data);
        // setProducts(data.data);
      });
  }, []);

  let content;
  if (products.length) {
    content = products?.map((product) => <ProductCard product={product}></ProductCard>);
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
  const state = useSelector((state) => state);
  console.log(state);
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
