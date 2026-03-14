import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../Data/products";
import { CartContext } from "../context/CartContext";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const foundProduct = getProductById(id);
    if (!foundProduct) {
      navigate("/");
      return;
    }
    setProduct(foundProduct);
  }, [id]);
  if (!product) return null;

  const { cartItems, addToCart } = useContext(CartContext);
  const productInCaart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCaart
    ? `(${productInCaart.quantity})`
    : "";
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-neutral-700 w-[50vw] h-auto flex justify-center items-center ">
        <div className="flex-1 bg-white p-4 ">
          <img
            className="bg-contain w-full"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="flex-1 p-4 flex flex-col">
          <button
            onClick={() => navigate("/")}
            className="btn btn-dash border-neutral-500 text-neutral-500 hover:text-white hover:bg-transparent hover:border-white mb-2"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-left-icon lucide-arrow-left"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </span>
            Back
          </button>
          <div>
            <h2 className="text-xl font-bold mb-5 text-start">
              {product.name}
              <hr className=" mt-2" />
            </h2>

            {/* <span className="w-full h-1 bg-neutral-700 "> </span> */}
          </div>
          <div className="flex flex-col">
            <span>{product.description}</span>
            <span className="text-sky-500 text-2xl mt-5 font-bold">
              ${product.price}
            </span>
            <span className="mt-5 flex justify-end  text-end">
              <button
                onClick={() => addToCart(product.id)}
                type="button"
                className="flex items-center gap-2 
              bg-sky-500 hover:bg-sky-600/80 
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
                Add Cart{productQuantityLabel}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
