"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductItem } from "@/data/productsData";

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductItem, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
  quoteSelectedService: string;
  openQuoteModalWithService: (serviceName?: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteSelectedService, setQuoteSelectedService] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // LocalStorage'dan sepeti yükleme
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("trakyacomputing-cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error("Sepet verisi yüklenemedi", e);
    }
    setIsLoaded(true);
  }, []);

  // Sepet değiştiğinde LocalStorage'a kaydetme
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("trakyacomputing-cart", JSON.stringify(cart));
      } catch (e) {
        console.error("Sepet kaydedilemedi", e);
      }
    }
  }, [cart, isLoaded]);

  const addToCart = (product: ProductItem, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    // Ürün eklenince sepet drawer'ını otomatik aç
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const openQuoteModalWithService = (serviceName?: string) => {
    if (serviceName) {
      setQuoteSelectedService(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        isQuoteModalOpen,
        setIsQuoteModalOpen,
        quoteSelectedService,
        openQuoteModalWithService,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
