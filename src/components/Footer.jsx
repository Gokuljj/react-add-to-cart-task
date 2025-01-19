import React from "react";
import { FaOpencart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding or Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg flex items-center font-bold text-yellow-500">Shop<span className="text-white">Zen</span> 
            <FaOpencart size={30} className="ml-1 text-white" />
            </h2>
            <p className="text-sm">Your one-step shop for everything!</p>
          </div>

          {/* Additional Information */}
          <div className="text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} ShopZen. All Rights Reserved.</p>
            <p>Designed and Developed by <span className="font-bold text-yellow-500">Gokul Prasath</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
