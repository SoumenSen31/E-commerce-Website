import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
