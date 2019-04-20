import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => (
  <table className="shopping-cart-table table">
    <thead />
    <tbody>
      {products.map(product => {
        return (
          <Product
            key={product.productID}
            title={product.title}
            imageURL={product.imageURL}
          />
        );
      })}
    </tbody>
  </table>
);

export default ProductList;
