import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Home/Cart/Cart";
import AddProducts from "../Pages/Dashboard/AddProducts";
import AllProducts from "../Pages/Dashboard/DisplayProducts";
import DisplayProducts from "../Pages/Dashboard/DisplayProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/home",
      //   element: <Home />,
      // },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/addProduct",
        element: <AddProducts />,
      },
      {
        path: "/allProducts",
        element: <DisplayProducts />,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <ProductList />,
  //     },
  //     {
  //       path: "add-product",
  //       element: <AddProduct />,
  //     },
  //   ],
  // },
]);
