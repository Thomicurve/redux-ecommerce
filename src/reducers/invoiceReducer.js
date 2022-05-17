export const invoiceReducer = (state = { finalPrice: 0, products: [] }, action) => {
    switch (action.type) {

        case '@invoice/get-final-invoice':
            let filteredCart = {};
            if (action.payload.length > 0) {
                action.payload.forEach((product) => {
                    filteredCart[product.title] = !filteredCart[product.title]
                        ? { ...product, amount: 1 }
                        : { ...product, amount: filteredCart[product.title].amount + 1 };
                });
                return { finalPrice: 0, products: Object.values(filteredCart) };
            }
            else return state;

        case '@invoice/get-final-price':
            let individualPrices = [];
            if (state.products.length) {
                state.products.forEach(product => {
                    individualPrices.push(product.price * product.amount);
                })
                return {finalPrice: individualPrices.reduce((prev, curr) => prev + curr), products: state.products}; 
            }
            else return state;
            
        default:
            return state;
    }
}


export const getFinalInvoice = (cart) => {
    return {
        type: '@invoice/get-final-invoice',
        payload: cart
    }
}

export const getFinalPrice = () => {
    return {
        type: '@invoice/get-final-price'
    }
}