import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Product Name */}
        <h5 className="text-lg font-semibold text-white">{product.name}</h5>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-sky-400">
            ${product.price}
          </span>

          <button
            type="button"
            className="flex items-center gap-2 
        bg-sky-600/80 hover:bg-sky-500 
        text-white text-sm font-medium 
        px-4 py-2 rounded-lg 
        transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
