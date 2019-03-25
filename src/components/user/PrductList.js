import React from "react";
import Product from "./Product";

const ProductList = props => (
		<table className="shopping-cart-table table">
			<thead />
			<tbody>
				{props.productList.map(product => {
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
