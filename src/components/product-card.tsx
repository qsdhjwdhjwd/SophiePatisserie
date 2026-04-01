"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";
import { type Product, formatPrice } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCart((s) => s.addItem);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0] : null
  );
  const [added, setAdded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentPrice = selectedSize
    ? selectedSize.priceInCents
    : product.priceInCents;

  const handleAdd = () => {
    if (product.type === "inquiry" || currentPrice === null) return;
    addItem({
      productId: product.id,
      sizeId: selectedSize?.id ?? null,
      name: product.name,
      sizeName: selectedSize?.label ?? null,
      priceInCents: currentPrice,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group">
      {/* Image with hover overlay */}
      <div className="relative overflow-hidden">
        <div
          className="flex items-center justify-center border border-cream-300 bg-cream-100 product-card-image"
          style={{ aspectRatio: product.imagePlaceholder }}
        >
          <div className="flex flex-col items-center gap-3 text-cream-400">
            <svg
              className="size-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeWidth={0.5}
                d="M12 5v14M5 12h14"
              />
            </svg>
            <span className="text-[10px] tracking-[0.2em] uppercase">
              {product.name}
            </span>
          </div>
        </div>

        {product.type === "standard" && (
          <div className="absolute inset-0 flex items-center justify-center bg-burgundy-900/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="text-[10px] tracking-[0.3em] uppercase text-cream-200">
              In den Warenkorb
            </span>
          </div>
        )}

        {product.type === "inquiry" && (
          <div className="absolute inset-0 flex items-center justify-center bg-burgundy-900/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="text-[10px] tracking-[0.3em] uppercase text-cream-200">
              Anfragen
            </span>
          </div>
        )}
      </div>

      {/* Product info */}
      <h3 className="mt-5 font-serif text-xl text-burgundy-700 lg:text-2xl">
        {product.name}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-burgundy-400">
        {product.tagline}
      </p>
      <p className="mt-3 text-xs leading-relaxed text-burgundy-300">
        {product.description}
      </p>

      {/* Price and actions */}
      <div className="mt-5">
        {product.type === "inquiry" ? (
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium tracking-wide text-forest-600 italic">
              Auf Anfrage
            </span>
            <a
              href="#kontakt"
              className="inline-flex h-7 items-center gap-2 rounded-lg border border-border bg-background px-2.5 text-[0.8rem] font-medium transition-colors hover:bg-muted"
            >
              Anfragen
              <ArrowRight className="size-3" />
            </a>
          </div>
        ) : (
          <>
            {/* Size options */}
            {product.sizes && product.sizes.length > 1 && mounted && (
              <div className="mb-4 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-[11px] tracking-wider uppercase border transition-all duration-300 ${
                      selectedSize?.id === size.id
                        ? "border-burgundy-500 bg-burgundy-500 text-cream-200"
                        : "border-cream-300 text-burgundy-600 hover:border-burgundy-300"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="font-serif text-lg text-burgundy-700">
                {currentPrice !== null ? formatPrice(currentPrice) : ""}
              </span>
              {mounted && (
                <Button size="sm" onClick={handleAdd} className="gap-2">
                  <ShoppingBag className="size-3.5" />
                  {added ? "Hinzugefügt \u2713" : "Hinzufügen"}
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
