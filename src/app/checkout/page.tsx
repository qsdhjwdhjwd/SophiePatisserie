"use client";

import { useCallback, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useCart } from "@/lib/cart";
import { createCheckoutSession } from "@/app/actions/checkout";
import Link from "next/link";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

export default function CheckoutPage() {
  const items = useCart((s) => s.items);
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);

  const fetchClientSecret = useCallback(async () => {
    try {
      const lineItems = items.map((item) => ({
        productId: item.productId,
        sizeId: item.sizeId,
        quantity: item.quantity,
      }));
      const { clientSecret } = await createCheckoutSession(lineItems);
      return clientSecret!;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Checkout konnte nicht geladen werden."
      );
      throw err;
    }
  }, [items]);

  if (!mounted) return null;

  if (!stripePromise) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center bg-cream-50 px-4 sm:px-6">
        <h1 className="font-serif text-2xl text-burgundy-800 sm:text-3xl">
          Checkout nicht verfügbar
        </h1>
        <p className="mt-4 max-w-md text-center text-sm leading-relaxed text-burgundy-500">
          Der Bezahlvorgang ist derzeit nicht konfiguriert. Bitte kontaktieren
          Sie uns direkt per E-Mail.
        </p>
        <Link
          href="/"
          className="mt-6 min-h-[44px] flex items-center text-sm text-burgundy-500 underline underline-offset-4 transition-colors hover:text-burgundy-700"
        >
          Zurück zum Shop
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center bg-cream-50 px-4 sm:px-6">
        <h1 className="font-serif text-2xl text-burgundy-800 sm:text-3xl">
          Ihr Warenkorb ist leer
        </h1>
        <Link
          href="/"
          className="mt-6 min-h-[44px] flex items-center text-sm text-burgundy-500 underline underline-offset-4 transition-colors hover:text-burgundy-700"
        >
          Zurück zum Shop
        </Link>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center bg-cream-50 px-4 sm:px-6">
        <h1 className="font-serif text-2xl text-burgundy-800 sm:text-3xl">
          Fehler beim Laden
        </h1>
        <p className="mt-4 max-w-md text-center text-sm leading-relaxed text-burgundy-500">
          {error}
        </p>
        <Link
          href="/"
          className="mt-6 min-h-[44px] flex items-center text-sm text-burgundy-500 underline underline-offset-4 transition-colors hover:text-burgundy-700"
        >
          Zurück zum Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-svh bg-cream-50 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="min-h-[44px] inline-flex items-center text-sm text-burgundy-400 transition-colors hover:text-burgundy-600 active:text-burgundy-600"
        >
          &larr; Zurück
        </Link>
        <h1 className="mt-3 font-serif text-3xl text-burgundy-800 sm:mt-4 sm:text-4xl md:text-5xl">
          Kasse
        </h1>
        <div className="mt-8 sm:mt-10">
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ fetchClientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </div>
    </div>
  );
}
