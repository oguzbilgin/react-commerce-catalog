import { createContext, useContext, useState } from "react";
import type { Product } from "../types/products"

type CartContextType = {
  cart: Product[],
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartContextProvider = ({children}: {children: React.ReactNode}) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      return [...prev, product];
    })
  };

  const removeFromCart = (product: Product) => {
    setCart(prev => {
      const index = prev.findIndex(item => item.id === product.id);

      if(index === -1) return prev;

      return [
        ...prev.slice(0,index),
        ...prev.slice(index + 1)
      ];
    })
  };

  const value = {
    cart,
    addToCart,
    removeFromCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if(!context) {
    throw new Error('Context must be used within CartContextProvider');
  }
  return context;
};