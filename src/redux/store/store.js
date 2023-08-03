import { applyMiddleware, createStore } from "redux";
import rootReducers from "../reducers/rootReducers";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import logger from "redux-logger";

export const store = createStore(rootReducers, applyMiddleware());
export default store;
