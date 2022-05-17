import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "../reducers/cartReducer";
import { productReducer } from "../reducers/productsReducer";
import { invoiceReducer } from "../reducers/invoiceReducer";

const combinedReducers = combineReducers({
  cart: cartReducer,
  products: productReducer,
  invoice: invoiceReducer
});

const store = configureStore({ reducer: combinedReducers, devTools: composeWithDevTools() });

export default store;
