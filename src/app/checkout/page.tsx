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

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CheckoutPage() {
  const items = useCart((s) => s.items);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const fetchClientSecret = useCallback(async () => {
    const lineItems = items.map((item) => ({
      productId: item.productId,
      sizeId: item.sizeId,
      quantity: item.quantity,
    }));
    const { clientSecret } = await createCheckoutSession(lineItems);
    return clientSecret!;
  }, [items]);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream-50 px-6">
        <h1 className="font-serif text-3xl text-burgundy-800">
          Ihr Warenkorb ist leer
        </h1>
        <Link
          href="/"
          className="mt-6 text-sm text-burgundy-500 underline underline-offset-4 transition-colors hover:text-burgundy-700"
        >
          Zurück zum Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm text-burgundy-400 transition-colors hover:text-burgundy-600"
        >
          &larr; Zurück
        </Link>
        <h1 className="mt-4 font-serif text-4xl text-burgundy-800 sm:text-5xl">
          Kasse
        </h1>
        <div className="mt-10">
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
