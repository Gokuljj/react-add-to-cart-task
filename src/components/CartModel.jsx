import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const CartModal = ({ cart, onRemoveFromCart, onClose }) => {
  // Calculate total number of products
  const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-slate-700 rounded-lg p-4 w-full max-w-md">
        <h2 className="text-xl text-yellow-600 font-bold mb-4">Your Cart</h2>

        {/* Display Total Number of Products */}
        <p className="text-sm text-yellow-500 mb-4">
          <strong>Total Products:</strong> {totalProducts}
        </p>

        {cart.length === 0 ? (
          <p className="text-white">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between text-white items-center mb-6 "
              >
                <div>
                  <span>{item.title}</span>
                  {/* <p className="text-sm text-gray-400">Qty: {item.quantity}</p> */}
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-white"
                >
                  <FaDeleteLeft  className="h-6 w-6" />
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={onClose}
          className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded mt-4 hover:bg-yellow-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
