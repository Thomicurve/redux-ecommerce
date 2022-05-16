import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '../reducers/cartReducer';

const cartStore = configureStore({ reducer: cartReducer });

export default cartStore;