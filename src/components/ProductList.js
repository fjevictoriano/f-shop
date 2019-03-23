import React from "react";
import Product from "./Product";

const ProductList = ({products}) => (
	<div className="w-full mb-4">
		<article className="text-center">
			<div className="flex flex-wrap">
				{products.map(product => {
					return (
						<Product
							key={product.imageURL}
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
				type="submit">
				View more
			</button>
		</article>
	</div>
);

export default ProductList;
