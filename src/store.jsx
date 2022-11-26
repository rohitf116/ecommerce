import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
const userInfofromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
console.log(userInfofromStorage, "userInfofromStorage");
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});
const middleware = [thunk];
const initialState = {
  userLogin: userInfofromStorage,
};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
