import React from "react";
import Product from "./Product";

const ProductList = ({ deleteProduct, products }) => (
  <table className="shopping-cart-table table">
    <thead />
    <tbody>
      {products.map(product => {
        return (
          <Product
            key={product.productID}
            title={product.title}
            imageURL={product.imageURL}
            deleteProduct={deleteProduct}
          />
        );
      })}
    </tbody>
  </table>
);

export default ProductList;
