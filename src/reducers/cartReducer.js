export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "@cart/add-product": {
      return [...state, { ...action.payload, id: state.length + 1 }];
    }
    case "@cart/get-products": {
      return state;
    }
    default:
      return state;
  }
};

export const addProduct = (product) => {
  return {
    type: "@cart/add-product",
    payload: product
  };
};
