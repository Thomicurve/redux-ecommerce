import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "../reducers/cartReducer";
import { productReducer } from "../reducers/productsReducer";

const combinedReducers = combineReducers({
  cart: cartReducer,
  products: productReducer
});

const store = configureStore({ reducer: combinedReducers });

export default store;
