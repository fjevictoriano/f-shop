import React from "react";

const Product = ({ imageURL, title, price }) => (
  <div
    className="hover:outline-none 
													w-40 
													p-2 
													m-2 
													h-48 
													border 
													border-grey-light"
  >
    <div className="p-2 border   border-grey-light text-center">
      <img className="w-full" src={imageURL} alt="nature" />
    </div>
    <p className="font-bold">{title}</p>
    <p className="text-green py-3 text-left">${price}</p>
  </div>
);

export default Product;
