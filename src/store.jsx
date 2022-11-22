import {
  configureStore,
  createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";
import { composeWithDevTools } from "@redux-devtools/extension";

const reducer = combineReducers({
  productList: productListReducer,
});
const middleware = [thunk];
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
