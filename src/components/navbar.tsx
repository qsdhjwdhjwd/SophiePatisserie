"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#spezialitaeten", label: "Spezialitäten" },
  { href: "#ueber", label: "Über Sophie" },
  { href: "#philosophie", label: "Philosophie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(235,217,197,0.4)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a
          href="#"
          className={`font-serif text-2xl italic tracking-wide transition-colors duration-500 ${
            scrolled ? "text-burgundy-500" : "text-cream-200"
          }`}
        >
          Sofié
        </a>

        {/* Desktop */}
        <ul
          className={`hidden items-center gap-10 text-[11px] font-medium tracking-[0.25em] uppercase transition-colors duration-500 md:flex ${
            scrolled ? "text-burgundy-700" : "text-cream-200/80"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-opacity duration-300 hover:opacity-60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`transition-colors duration-500 md:hidden ${
            scrolled ? "text-burgundy-500" : "text-cream-200"
          }`}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 border-t border-burgundy-100/20 bg-cream-50/98 py-8 text-[11px] font-medium tracking-[0.25em] uppercase text-burgundy-700 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
