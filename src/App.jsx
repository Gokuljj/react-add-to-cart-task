import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartModal from "./components/CartModel";
import WelcomeText from "./components/WelcomeText";
import Footer from "./components/Footer";

const App = () => {
  const [cart, setCart] = useState([]); // State to store cart items
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]); // Add with initial quantity
    }
  };

  // Function to handle removing items from the cart
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      {/* Navbar with cart count */}
      <Navbar
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)} // Total product count
        onCartClick={() => setIsModalOpen(true)}
      />

      {/* Welcome text */}
      <WelcomeText />

      {/* Home component for displaying products */}
      <Home onAddToCart={handleAddToCart} />

      {/* Cart modal */}
      {isModalOpen && (
        <CartModal
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
