import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-xl">
      <img src={product.image} alt={product.title} className="h-48 mx-auto" />
      <h2 className="text-xl font-semibold mt-4">{product.title.slice(0, 20)}</h2>
      <p className="text-slate-600 text-sm font-semibold mt-2">{product.description.slice(0, 85)}</p>
      <p className="text-yellow-600 text-xl font-semibold mt-4 mb-2">₹ {product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full mt-2 hover:bg-yellow-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
