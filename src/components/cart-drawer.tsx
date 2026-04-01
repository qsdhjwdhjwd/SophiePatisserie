"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CartDrawer({ open, onClose }: Props) {
  const items = useCart((s) => s.items);
  const removeItem = useCart((s) => s.removeItem);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const totalPrice = useCart((s) => s.totalPrice);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-burgundy-900/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream-50 shadow-2xl transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-cream-300 px-6 py-5">
          <h2 className="font-serif text-xl text-burgundy-800">Warenkorb</h2>
          <button
            onClick={onClose}
            className="text-burgundy-400 transition-colors hover:text-burgundy-700"
            aria-label="Warenkorb schließen"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center pt-20">
              <p className="text-sm text-burgundy-400">
                Ihr Warenkorb ist leer
              </p>
              <button
                onClick={onClose}
                className="mt-4 text-xs tracking-wider uppercase text-burgundy-500 underline underline-offset-4"
              >
                Weiter stöbern
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.sizeId}`}
                  className="flex gap-4 border-b border-cream-200 pb-6"
                >
                  <div className="flex-1">
                    <p className="font-serif text-burgundy-700">{item.name}</p>
                    {item.sizeName && (
                      <p className="mt-0.5 text-[11px] tracking-wider uppercase text-burgundy-400">
                        {item.sizeName}
                      </p>
                    )}
                    <p className="mt-1 text-sm text-burgundy-600">
                      {formatPrice(item.priceInCents)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.sizeId,
                          item.quantity - 1
                        )
                      }
                      className="flex size-7 items-center justify-center border border-cream-300 text-burgundy-500 transition-colors hover:bg-cream-200"
                      aria-label="Menge reduzieren"
                    >
                      <Minus className="size-3" />
                    </button>
                    <span className="w-6 text-center text-sm text-burgundy-700">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.sizeId,
                          item.quantity + 1
                        )
                      }
                      className="flex size-7 items-center justify-center border border-cream-300 text-burgundy-500 transition-colors hover:bg-cream-200"
                      aria-label="Menge erhöhen"
                    >
                      <Plus className="size-3" />
                    </button>
                    <button
                      onClick={() => removeItem(item.productId, item.sizeId)}
                      className="ml-1 flex size-7 items-center justify-center text-burgundy-300 transition-colors hover:text-burgundy-600"
                      aria-label="Entfernen"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-cream-300 bg-cream-50 px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-burgundy-400">
                Gesamt
              </span>
              <span className="font-serif text-xl text-burgundy-800">
                {formatPrice(totalPrice())}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="flex h-9 w-full items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              Zur Kasse
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
