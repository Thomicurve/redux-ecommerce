import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFinalInvoice, getFinalPrice } from "../reducers/invoiceReducer";

const useCart = () => {
  const cartProducts = useSelector(state => state.cart);
  const invoice = useSelector(state => state.invoice)
  const dispatch = useDispatch();

  const formatCartProducts = () => {
    dispatch(getFinalInvoice(cartProducts));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(price)
  }

  const getTotalPrice = () => {
    dispatch(getFinalPrice());
  }

  useEffect(() => {
    formatCartProducts();
    getTotalPrice();
  }, [cartProducts])

  return { cartAmount: cartProducts.length, invoice, cartProducts, formatPrice };
};

export default useCart;
