import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const addToCart = (course) => {
    setCart((prev) => [...prev, course]);
    showToast(`Added "${course.title}" to your cart!`);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount: cart.length, toast, showToast }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
