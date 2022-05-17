import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFinalInvoice, getFinalPrice } from "../reducers/invoiceReducer";

const useCart = () => {
  const products = useSelector(state => state.cart);
  const invoice = useSelector(state => state.invoice)
  const dispatch = useDispatch();

  const formatCartProducts = () => {    
    dispatch(getFinalInvoice(products));
  };

  const getTotalPrice = () => {
    dispatch(getFinalPrice());
  }

  useEffect(() => {
    formatCartProducts();
    getTotalPrice();
  }, [])

  return { cartAmount: products.length, invoice };
};

export default useCart;
