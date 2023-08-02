import { Button, Group, Text } from "@mantine/core";
// import { useCounter } from "@mantine/hooks";f
import React, { useContext, useEffect, useState } from "react";
import { counter_context } from "../../App";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <section>
        <Button>{products.length}</Button>
        <div className="card_container">
          {products.map((product) => (
            <ProductCard product={product}></ProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
