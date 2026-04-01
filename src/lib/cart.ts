"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  productId: string;
  sizeId: string | null;
  name: string;
  sizeName: string | null;
  priceInCents: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (productId: string, sizeId: string | null) => void;
  updateQuantity: (
    productId: string,
    sizeId: string | null,
    quantity: number
  ) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.productId === item.productId && i.sizeId === item.sizeId
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === item.productId && i.sizeId === item.sizeId
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        }),

      removeItem: (productId, sizeId) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.productId === productId && i.sizeId === sizeId)
          ),
        })),

      updateQuantity: (productId, sizeId, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter(
                  (i) => !(i.productId === productId && i.sizeId === sizeId)
                )
              : state.items.map((i) =>
                  i.productId === productId && i.sizeId === sizeId
                    ? { ...i, quantity }
                    : i
                ),
        })),

      clearCart: () => set({ items: [] }),

      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      totalPrice: () =>
        get().items.reduce((sum, i) => sum + i.priceInCents * i.quantity, 0),
    }),
    { name: "sofie-cart" }
  )
);
