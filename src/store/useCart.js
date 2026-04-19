import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
  removeFromCart: (index) =>
    set((state) => ({
      cart: state.cart.filter((_, i) => i !== index),
    })),
}));
