import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../redux/actionCreators/actionCreators";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{cart.length}</p>
      <div>
        <div className="d-flex gap-5 ">
          {cart.map((product) => (
            <>
              <div className="border">
                <p>{product.model}</p>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
                <button onClick={() => dispatch(removeFromCart(product))}>remove product</button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
