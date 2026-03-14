import React from "react";

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5 space-y-4">
        <h5 className="text-lg font-semibold text-white">{product.name}</h5> 
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

        <button
          type="button"
          onClick={() => onViewDetails?.(product)}
          className="w-full flex items-center justify-center gap-2
            border border-white/20 hover:border-sky-400
            text-white/70 hover:text-sky-400 text-sm font-medium
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
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
