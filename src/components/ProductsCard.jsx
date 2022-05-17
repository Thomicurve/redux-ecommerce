import React from "react";
import { addProduct } from "../reducers/cartReducer";
import { useDispatch } from "react-redux";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProducts = () => dispatch(addProduct(product));

  return (
    <div key={product.id} className="product-card">
      <div className="product-card__image">
        <img src={product.image} width="200px" alt="..." />
      </div>
      <div className="product-card__body">
        <p>{product.title}</p>
        <p>
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
          }).format(product.price)}
        </p>
        <button onClick={handleAddProducts} className="btn btn-success">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
