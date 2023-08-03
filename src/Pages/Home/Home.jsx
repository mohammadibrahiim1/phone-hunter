import { Button, Group, Text } from "@mantine/core";
// import { useCounter } from "@mantine/hooks";f
import React, { useContext, useEffect, useState } from "react";
import { counter_context } from "../../App";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setProducts(data.data);
      });
  }, []);

  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <section>
        <Button>{products.length}</Button>
        <div className="card_container">
          {products?.map((product) => (
            <ProductCard product={product}></ProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
