import React from "react";
import { FiShoppingCart } from "react-icons/fi"; // Import the shopping cart icon
import { FaOpencart } from "react-icons/fa6";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-slate-800 text-white p-4 flex justify-between items-center shadow-lg">
      {/* Brand Name */}
      <h1 className="text-2xl flex items-center font-bold text-yellow-500">
        Shop<span className="text-white">Zen</span>
        <FaOpencart size={50} className="ml-1 text-white" />
        </h1>

      {/* Cart Icon with Count */}
      <button
        onClick={onCartClick}
        className="relative text-white hover:text-gray-200"
      >
        {/* Cart Icon */}
        <FiShoppingCart size={34}/>
        
        {/* Count Badge */}
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-2 py-0.5">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
