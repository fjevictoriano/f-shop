import React, { useContext } from "react";
import Product from "./Product";
import FloatingButton from "./FloatingButton";
import { ProductsContext } from "../providers/ProductsProvider";

const ProductList = () => {
  const products = useContext(ProductsContext);
  return (
    <div className="w-full mb-4">
      <article className="text-center">
        <div className="flex flex-wrap">
          {products.map(product => {
            return (
              <Product
                key={product.id}
                imageURL={product.imageURL}
                title={product.title}
                price={product.price}
              />
            );
          })}
        </div>
        <button
          className="btn-green
							h-8 
							w-64
							px-45
							rounded"
          type="submit"
        >
          View more
        </button>
        <FloatingButton />
      </article>
    </div>
  );
};

export default ProductList;
