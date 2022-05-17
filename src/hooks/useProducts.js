import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../reducers/productsReducer";

const useProducts = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return { products };
};

export default useProducts;
