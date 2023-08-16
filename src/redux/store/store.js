import { applyMiddleware, createStore } from "redux";
import rootReducers from "../reducers/rootReducers";
// import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
// import cartCounter from "../middlewares/cartCounter";
import thunk from "redux-thunk";

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;
