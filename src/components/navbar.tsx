"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { CartDrawer } from "@/components/cart-drawer";

const NAV_LINKS = [
  { href: "#spezialitaeten", label: "Spezialitäten" },
  { href: "#zutaten", label: "Zutaten" },
  { href: "#ueber", label: "Über Sophie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const totalItems = useCart((s) => s.totalItems);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const itemCount = mounted ? totalItems() : 0;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between transition-all duration-700 ease-out ${
            scrolled
              ? "rounded-full border border-cream-300/60 bg-cream-50/90 px-4 py-2.5 shadow-[0_8px_32px_rgba(46,16,14,0.08)] backdrop-blur-xl sm:px-6 sm:py-3"
              : "px-3 py-3 sm:px-6 sm:py-4"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className={`font-serif text-xl italic tracking-wide transition-colors duration-500 sm:text-2xl ${
              scrolled ? "text-burgundy-500" : "text-cream-200"
            }`}
          >
            Sofié
          </a>

          {/* Desktop nav */}
          <ul
            className={`hidden items-center gap-8 text-[10px] font-medium tracking-[0.25em] uppercase transition-colors duration-500 md:flex lg:gap-10 ${
              scrolled ? "text-burgundy-700" : "text-cream-200/80"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="py-2 transition-opacity duration-300 hover:opacity-60 active:opacity-60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: Cart + Mobile toggle */}
          <div className="flex items-center gap-0.5 sm:gap-2">
            {/* Cart icon */}
            <button
              onClick={() => setCartOpen(true)}
              className={`relative flex size-10 items-center justify-center rounded-full transition-all duration-500 sm:size-11 ${
                scrolled
                  ? "text-burgundy-500 hover:bg-cream-200/60"
                  : "text-cream-200 hover:bg-cream-200/10"
              }`}
              aria-label="Warenkorb"
            >
              <ShoppingBag className="size-[18px] sm:size-5" />
              {itemCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-champagne text-[9px] font-bold text-burgundy-900">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex size-10 items-center justify-center rounded-full transition-all duration-500 md:hidden sm:size-11 ${
                scrolled
                  ? "text-burgundy-500 hover:bg-cream-200/60"
                  : "text-cream-200 hover:bg-cream-200/10"
              }`}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              <svg
                className="size-5 sm:size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                {menuOpen ? (
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`mx-auto mt-2 max-w-6xl overflow-hidden transition-all duration-500 ease-out md:hidden ${
            menuOpen
              ? "max-h-80 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-0.5 rounded-2xl border border-cream-300/60 bg-cream-50/95 py-3 text-[11px] font-medium tracking-[0.25em] uppercase text-burgundy-700 shadow-[0_8px_32px_rgba(46,16,14,0.08)] backdrop-blur-xl">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="w-full">
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full px-6 py-3.5 text-center transition-colors active:text-burgundy-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
