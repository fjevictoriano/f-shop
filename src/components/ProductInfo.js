import React from "react";
import image from "../images/product.jpg";
const ProductInfo = () => (
  <section className="text-center">
    <div className="flex flex-wrap text-center">
      <div className="w-full carousel max-w-sm">
        <img src={image} alt="   " />
      </div>
      <div className="w-full">
        <h1>Precio</h1>
        <h3>Nombre del Producto</h3>
        <p>time</p>
        <div>location</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          laboriosam fugiat eius perspiciatis recusandae magni error neque
          debitis possimus asperiores accusantium eos reiciendis sunt delectus
          totam sapiente, explicabo minima maxime.
        </div>
      </div>
    </div>
  </section>
);

export default ProductInfo;
