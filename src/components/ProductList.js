import React from "react";

const ProductList = props => (
	<div className="w-full mb-4">
		<article className="text-center">
			<div className="flex flex-wrap">
				{props.products.map(product => {
					return (
						<div
							className="hover:outline-none 
													w-40 
													p-2 
													m-2 
													h-48 
													border 
													border-grey-light">
							<div className="p-2 border   border-grey-light text-center">
								<img
									className="w-full"
									src="https://www.w3schools.com/w3css/img_nature.jpg"
									alt="nature"
								/>
							</div>
							<p className="font-bold">Lorem ipsum dolor sit amet.</p>
							<p className="text-green py-3 text-left">$25</p>
						</div>
					);
				})}
			</div>
			<button
				className="bg-green-light 
										hover:bg-green-dark
										text-white 
										font-bold 
										h-8 
										w-64
										px-45
										rounded
										focus:outline-none 
										focus:shadow-outline"
				type="submit">
				View more
			</button>
		</article>
	</div>
);

export default ProductList;
