"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { menu } from "@/data/menu";

type CartLine = { id: string; quantity: number };
type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  add: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "jardin-de-bayonne-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setLines(parsed.filter((line): line is CartLine =>
            typeof line?.id === "string" && menu.some((dish) => dish.id === line.id) &&
            Number.isInteger(line?.quantity) && line.quantity > 0,
          ));
        }
      }
    } catch {
      localStorage.removeItem(storageKey);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(storageKey, JSON.stringify(lines));
  }, [lines, ready]);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = lines.reduce((sum, line) => {
      const dish = menu.find((item) => item.id === line.id);
      return sum + (dish?.price ?? 0) * line.quantity;
    }, 0);

    return {
      lines,
      count,
      subtotal,
      drawerOpen,
      setDrawerOpen,
      add: (id) => setLines((current) => {
        const existing = current.find((line) => line.id === id);
        return existing
          ? current.map((line) => line.id === id ? { ...line, quantity: line.quantity + 1 } : line)
          : [...current, { id, quantity: 1 }];
      }),
      setQuantity: (id, quantity) => setLines((current) => quantity < 1
        ? current.filter((line) => line.id !== id)
        : current.map((line) => line.id === id ? { ...line, quantity } : line)),
      clear: () => setLines([]),
    };
  }, [drawerOpen, lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart doit être utilisé dans CartProvider");
  return context;
}