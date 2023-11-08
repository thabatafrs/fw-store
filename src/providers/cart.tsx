"use client"

import { Product } from "@prisma/client";
import { ReactNode, createContext } from "react";

interface CartProducts extends Product {
  quantity: number;
}

interface ICartcontext {
  products: CartProducts[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
}

const CartContext = createContext<ICartcontext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
});

const CartProvider = ({children}: { children: ReactNode}) => {
  return (
    <CartContext.Provider
      value={{
        products: [],
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
      }}
    ></CartContext.Provider>
  );
};

export default CartProvider;
