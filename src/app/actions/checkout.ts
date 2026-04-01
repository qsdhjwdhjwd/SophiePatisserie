"use server";

import { getStripe } from "@/lib/stripe";
import { getProductById } from "@/lib/products";

type CartLineItem = {
  productId: string;
  sizeId: string | null;
  quantity: number;
};

export async function createCheckoutSession(items: CartLineItem[]) {
  if (!items.length) {
    throw new Error("Cart is empty");
  }

  const lineItems = items.map((item) => {
    const product = getProductById(item.productId);
    if (!product || product.type !== "standard") {
      throw new Error(`Invalid product: ${item.productId}`);
    }

    let price: number;
    let name = product.name;

    if (item.sizeId && product.sizes) {
      const size = product.sizes.find((s) => s.id === item.sizeId);
      if (!size) throw new Error(`Invalid size: ${item.sizeId}`);
      price = size.priceInCents;
      name = `${product.name} (${size.label})`;
    } else {
      if (product.priceInCents === null) {
        throw new Error(`Product has no price: ${item.productId}`);
      }
      price = product.priceInCents;
    }

    return {
      price_data: {
        currency: "eur",
        product_data: {
          name,
          description: product.tagline,
        },
        unit_amount: price,
      },
      quantity: item.quantity,
    };
  });

  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    ui_mode: "embedded_page",
    return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
  });

  return { clientSecret: session.client_secret };
}
