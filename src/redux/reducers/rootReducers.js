import { combineReducers } from "redux";
import productReducer from "./productReducers";
import { filterReducer } from "./filterReducers";

const rootReducers = combineReducers({
  product: productReducer,
  filter: filterReducer,
});

export default rootReducers;
