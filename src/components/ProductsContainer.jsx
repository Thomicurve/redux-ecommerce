import React from "react";
import ProductsCard from "./ProductsCard";
import useProducts from "../hooks/useProducts";

const ProductsContainer = () => {
  const { products } = useProducts();

  return (
    <section>
      <article className="w-100 mt-5">
        <h2 className="text-center h4 text-light">PRODUCTS</h2>
      </article>
      <article className="w-100 d-flex flex-wrap justify-content-center">
        {products.map((p) => (
          <ProductsCard key={p.id} product={p} />
        ))}
      </article>
    </section>
  );
};

export default ProductsContainer;
