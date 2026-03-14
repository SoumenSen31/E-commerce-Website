import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { updateQuantity, removeFromCart, getCartItemsWithProducts, getCartTotal } =
    useContext(CartContext);

  const cartItems = getCartItemsWithProducts();
  const getTotal = getCartTotal();

  return (
    <>
      <p className="text-lg font-bold mb-2 text-center">Order Summary</p>

      <div className="flex justify-center items-start gap-10 mt-10">

        {/* Cart Items */}
        <div className="flex flex-col gap-4">
          {cartItems.map((item,index) => (
            <div key={item.id} className="w-120 border border-neutral-700">
              <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="list-row items-center">

                  <div className="text-4xl font-thin opacity-30 tabular-nums">
                    {index+1}
                  </div>

                  <div>
                    <img
                      className="size-15 rounded-box"
                      src={item.product.image}
                    />
                  </div>

                  <div className="list-col-grow">
                    <div className="font-bold">{item.product.name}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      {item.product.price}
                    </div>
                  </div>

                  <div>
                    <form className="max-w-xs">

                      <div className="flex items-center border border-neutral-300 rounded-lg overflow-hidden w-fit">

                        <button
                          type="button"
                          className="px-3 py-2 bg-base-200 hover:bg-base-300 transition"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>

                        <span className="w-14 text-center outline-none border-x border-neutral-300 py-2">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          className="px-3 py-2 bg-base-200 hover:bg-base-300 transition"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>

                      </div>

                      <p className="text-center font-bold">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>

                      <button
                        className="mt-1 mb-1 text-center bg-gray-500 btn btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>

                    </form>
                  </div>

                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Order Summary Card */}
        <div className="bg-base-300 shadow-lg rounded-xl p-6 w-80">

          <h2 className="text-xl font-bold mb-4">Total</h2>

          <div className="flex justify-between text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>${getTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total</span>
            <span>${getTotal.toFixed(2)}</span>
          </div>

          <hr className="mb-4" />

          <button onClick={()=>alert("Order Placed")} className="btn btn-primary w-full">
            Place Order
          </button>

        </div>

      </div>
    </>
  );
};

export default Checkout;