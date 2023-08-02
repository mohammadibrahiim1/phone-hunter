import { createStore } from "redux";
import productReducer from "../reducers/productReducers";

export const store = createStore(productReducer);
export default store;
