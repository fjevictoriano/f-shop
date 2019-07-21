import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => (
  <table className="shopping-cart-table table">
    <thead />
    <tbody>
      {products.map(product => {
        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            imageURL={product.imageURL}
          />
        );
      })}
    </tbody>
  </table>
);

export default ProductList;
