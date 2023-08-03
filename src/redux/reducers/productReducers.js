import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  // find selected product
  const selectedProduct = state.cart.find((product) => product._id === action.payload._id);
  
  console.log(selectedProduct);

  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        // filter same id product with selected product id
        const newCart = state.cart.filter((product) => product._id !== selectedProduct._id);

        // increase selectedProduct quantity and set quantity in cart
        selectedProduct.quantity = selectedProduct.quantity + 1;
        return { ...state, cart: [...newCart, selectedProduct] };
      }

      //   set quantity for selected Product
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        // filter same id product with selected product id
        const newCart = state.cart.filter((product) => product._id !== selectedProduct._id);

        // increase selectedProduct quantity and set quantity in cart
        selectedProduct.quantity = selectedProduct.quantity - 1;
        return { ...state, cart: [...newCart, selectedProduct] };
      }
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload._id),
      };

    default:
      return state;
  }
};
export default productReducer;
