"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";
import { type Product, formatPrice } from "@/lib/products";
import { ArrowRight } from "lucide-react";

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
      {/* Image with hover/active overlay */}
      <div className="relative overflow-hidden">
        <div
          className="flex items-center justify-center border border-cream-300 bg-cream-100 product-card-image"
          style={{ aspectRatio: product.imagePlaceholder }}
        >
          <div className="flex flex-col items-center gap-3 text-cream-400">
            <svg
              className="size-6 sm:size-8"
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
            <span className="text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">
              {product.name}
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-burgundy-900/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-active:opacity-100">
          <span className="border border-cream-200/60 px-5 py-2 text-[9px] tracking-[0.35em] uppercase text-cream-200">
            {product.type === "inquiry" ? "Anfragen" : "Entdecken"}
          </span>
        </div>
      </div>

      {/* Product info */}
      <h3 className="mt-5 font-serif text-lg tracking-wide text-burgundy-700 sm:mt-6 sm:text-xl lg:text-2xl">
        {product.name}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-burgundy-400 sm:mt-2">
        {product.tagline}
      </p>
      <p className="mt-2.5 text-xs leading-relaxed text-burgundy-300/80 sm:mt-3">
        {product.description}
      </p>

      {/* Price and actions */}
      <div className="mt-4 sm:mt-5">
        {product.type === "inquiry" ? (
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-medium tracking-wide text-forest-600 italic">
              Auf Anfrage
            </span>
            <a
              href="#kontakt"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-background px-3 text-[0.8rem] font-medium transition-colors hover:bg-muted active:bg-muted sm:h-9 sm:px-2.5"
            >
              Anfragen
              <ArrowRight className="size-3" />
            </a>
          </div>
        ) : (
          <>
            {/* Size options */}
            {product.sizes && product.sizes.length > 1 && mounted && (
              <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    className={`min-h-[40px] px-4 py-2 text-[10px] tracking-[0.2em] uppercase border transition-all duration-500 sm:min-h-0 sm:py-1.5 ${
                      selectedSize?.id === size.id
                        ? "border-burgundy-700 text-burgundy-700"
                        : "border-cream-300 text-burgundy-400 hover:border-burgundy-300 active:border-burgundy-300"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between gap-3">
              <span className="font-serif text-lg tracking-wide text-burgundy-700">
                {currentPrice !== null ? formatPrice(currentPrice) : ""}
              </span>
              {mounted && (
                <button
                  onClick={handleAdd}
                  className="h-10 border border-burgundy-700 px-5 text-[10px] tracking-[0.2em] uppercase text-burgundy-700 transition-all duration-500 hover:bg-burgundy-700 hover:text-cream-200 active:bg-burgundy-700 active:text-cream-200 sm:h-9"
                >
                  {added ? "Hinzugefügt" : "Hinzufügen"}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
