export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "@cart/add-product": {
      return [...state, { ...action.payload, id: state.length + 1 }];
    }
    case "@cart/delete-one-product": {
      const productFound = state.find(product => product.title === action.payload);
      return state.filter(({id}) => id !== productFound.id);
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

export const deleteProduct = (title) => {
  return {
    type: '@cart/delete-one-product',
    payload: title
  }
}