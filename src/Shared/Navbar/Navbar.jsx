import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className="d-flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
          <li>
            <Link to="/allProducts">allProducts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
