import React from "react";
import { addProduct } from "../reducers/cartReducer";
import { useDispatch } from "react-redux";
import useCart from '../hooks/useCart';

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const {formatPrice} = useCart()

  const handleAddProducts = () => dispatch(addProduct(product));

  return (
    <div key={product.id} className="product-card">
      <div className="product-card__image">
        <img src={product.image} width="200px" alt={product.description} />
      </div>
      <div className="product-card__body">
        <p>{product.title}</p>
        <p>
          {formatPrice(product.price)}
        </p>
        <button onClick={handleAddProducts} className="btn btn-success">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
