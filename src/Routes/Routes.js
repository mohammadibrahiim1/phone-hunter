import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Home/Cart/Cart";

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
    ],
  },
]);