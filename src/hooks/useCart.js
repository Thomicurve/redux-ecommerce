import { useSelector } from "react-redux";
import { useState } from "react";

const useCart = () => {
  const products = useSelector((state) => state.cart);
  const [cartProducts, setCartProducts] = useState({});

  const formatCartProducts = () => {
    let filteredCart = {};
    products.forEach((product) => {
      filteredCart[product.title] = !filteredCart[product.title]
        ? { ...product, amount: 1 }
        : { ...product, amount: filteredCart[product.title].amount + 1 };
    });

    setCartProducts(filteredCart);
  };

  return { cartProducts, formatCartProducts, cartAmount: products.length };
};

export default useCart;
