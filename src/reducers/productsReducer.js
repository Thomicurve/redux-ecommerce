import { getAllProducts } from "../services/Products";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case "@products/get-init-all":
      return action.payload;
    default:
      return state;
  }
};

export const allProducts = () => {
  return async (dispatch) => {
    const { products } = await getAllProducts();
    dispatch({
      type: "@products/get-init-all",
      payload: products
    });
  };
};
