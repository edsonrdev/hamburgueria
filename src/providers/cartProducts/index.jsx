import { useState, createContext } from "react";

export const CartProductsContext = createContext();

export const CartProductsProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <CartProductsContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartProductsContext.Provider>
  );
};
