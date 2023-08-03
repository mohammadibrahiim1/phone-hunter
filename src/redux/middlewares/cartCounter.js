import { ADD_TO_CART } from "../actionTypes/actionTypes";

const cartCounter = (store) => (next) => (action) => {
  console.log("current state", store.getState());
  console.log("action", action);

  const state = store.getState();
  const cart = state.product.cart;
  console.log(state.product.cart);

  if (action.type === ADD_TO_CART) {
    const newAction = {
      ...action,
      payload: {
        ...action.payload,
        cartPosition: cart.length,
      },
    };
    return next(newAction);
  }

  return next(action);
};

export default cartCounter;
