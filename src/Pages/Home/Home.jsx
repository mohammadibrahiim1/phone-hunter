import { Button, Container, Text, createStyles } from "@mantine/core";
import React, { useEffect } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Home.css";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleBrand, toggleStock } from "../../redux/actionCreators/filterActions";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { toggle, toggleBrands } from "../../features/filter/filterSlice";
import { getProducts } from "../../features/products/productsSlice";

// const useStyles = createStyles(() => ({
//   pContainer: {
//     display: "grid",
//     gridTemplateColumns: "repeat(3,1fr)",
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: "12px",
//   },
// }));
// import fetchProductsData from "../../redux/thunk/products/fetchProducts";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  console.log(products);
  // const { classes } = useStyles();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  // http://localhost:5000/products

  const filter = useSelector((state) => state.filter);

  // console.log(products);
  const { brands, stock } = filter;

  const activeClass = "text-primary text-bg-dark";

  // useEffect(() => {
  //   dispatch(fetchProductsData());
  // }, [dispatch]);

  if (isLoading) {
    return (
      <Text c={"teal"} align="center">
        Loading...
      </Text>
    );
  }

  let content;

  if (products?.length) {
    content = products?.map((product) => <ProductCard key={product._id} product={product}></ProductCard>);
  }

  if (products?.length && (stock || brands.length)) {
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
      <Container size={"lg"} mt={"lg"}>
        <Button>{products.length}</Button>

        <div className="d-flex gap-4 mx-auto w-50 mx-auto ">
          <Button
            onClick={() => dispatch(toggleBrands("amd"))}
            color="grape"
            size="xs"
            className={`${brands.includes("amd") ? activeClass : null}`}
          >
            AMD
          </Button>{" "}
          <Button
            onClick={() => dispatch(toggleBrands("intel"))}
            color="grape"
            size="xs"
            className={`${brands.includes("intel") ? activeClass : null}`}
          >
            Intel
          </Button>
          <Button
            onClick={() => dispatch(toggle())}
            color="orange"
            size="xs"
            className={`${stock ? activeClass : null}`}
          >
            In stock
          </Button>
        </div>

        {/* <div className={classes.pContainer}>
          {products?.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div> */}
        <div className="card_container">{content}</div>
      </Container>
    </div>
  );
};

export default Home;
