import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart } from './cart.utils';

// replacing redux and using provider context 


export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => { }, // default empty 
  removeItem: () => {},
  clearItems: () => {},
  cartItemsCount: 0,
});


const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const clearItems = item => setCartItems([]);

  return( <CartContext.Provider value={{
    hidden,
    toggleHidden,
    cartItems,
    addItem,
    removeItem,
    clearItems,
    cartItemsCount: cartItems.length
  }}>{children}</CartContext.Provider>)
  ;
}


export default CartProvider;