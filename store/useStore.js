// store/useStore.js
import { create } from "zustand";

export const productStore = create((set) => ({
  products: [],
  setProduct: (product) => set((state) => ({ products: [...state.products, product] })),
}));
