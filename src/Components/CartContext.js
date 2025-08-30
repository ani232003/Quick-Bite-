import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((oldItems) => {
      const existingItem = oldItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return oldItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
        );
      } else {
        return [...oldItems, { ...item, qty: 1 }];
      }
    });
  };

  const increaseQty = (id) => {
    setCartItems((oldItems) =>
      oldItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((oldItems) =>
      oldItems
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const value = {
    cartItems,
    addToCart,
    increaseQty,
    decreaseQty,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};