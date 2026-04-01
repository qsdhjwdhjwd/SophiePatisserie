import Link from "next/link";
import { getStripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function SuccessPage({ searchParams }: Props) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/");
  }

  let session;
  try {
    session = await getStripe().checkout.sessions.retrieve(session_id);
  } catch {
    redirect("/");
  }

  if (session.payment_status !== "paid") {
    redirect("/");
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-cream-50 px-4 sm:px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-forest-100 sm:mb-8 sm:size-16">
          <svg
            className="size-7 text-forest-600 sm:size-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="font-serif text-3xl text-burgundy-800 sm:text-4xl">Vielen Dank!</h1>
        <p className="mt-3 text-sm leading-relaxed text-burgundy-600 sm:mt-4">
          Ihre Bestellung wurde erfolgreich aufgegeben. Sie erhalten in Kürze
          eine Bestätigung per E-Mail.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-[44px] items-center text-sm font-medium uppercase tracking-wider text-burgundy-500 underline underline-offset-4 transition-colors hover:text-burgundy-700 active:text-burgundy-700 sm:mt-8"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
