"use client";

import { useState, type FormEvent } from "react";

const ANLASS_OPTIONS = [
  "Geburtstag",
  "Hochzeit",
  "Firmenfeier",
  "Jubiläum",
  "Andere",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center sm:py-16">
        <div className="mx-auto mb-6 h-px w-12 bg-champagne/40" />
        <p className="font-serif text-xl tracking-wide text-burgundy-700 sm:text-2xl">
          Vielen Dank
        </p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-burgundy-400/80">
          Unser Kontaktformular ist in Kürze verfügbar. Bitte schreiben Sie uns
          in der Zwischenzeit per E-Mail.
        </p>
        <a
          href="mailto:info@sofiepatisserie.com"
          className="mt-6 border border-burgundy-700 px-6 py-2.5 text-[10px] tracking-[0.25em] uppercase text-burgundy-700 transition-all duration-500 hover:bg-burgundy-700 hover:text-cream-200"
        >
          E-Mail senden
        </a>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-[10px] tracking-wider uppercase text-burgundy-300 transition-opacity duration-300 hover:opacity-60"
        >
          Zurück zum Formular
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-[10px] font-light tracking-[0.25em] uppercase text-burgundy-400/70"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 block w-full border-b border-cream-300 bg-transparent py-2.5 text-sm text-burgundy-700 outline-none transition-colors duration-500 placeholder:text-burgundy-300/40 focus:border-champagne"
          placeholder="Ihr vollständiger Name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-[10px] font-light tracking-[0.25em] uppercase text-burgundy-400/70"
        >
          E-Mail
        </label>
        <input
          id="contact-email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 block w-full border-b border-cream-300 bg-transparent py-2.5 text-sm text-burgundy-700 outline-none transition-colors duration-500 placeholder:text-burgundy-300/40 focus:border-champagne"
          placeholder="ihre@email.de"
        />
      </div>

      {/* Anlass + Datum row */}
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <div>
          <label
            htmlFor="contact-anlass"
            className="block text-[10px] font-light tracking-[0.25em] uppercase text-burgundy-400/70"
          >
            Anlass
          </label>
          <select
            id="contact-anlass"
            required
            className="mt-2 block w-full appearance-none border-b border-cream-300 bg-transparent py-2.5 text-sm text-burgundy-700 outline-none transition-colors duration-500 focus:border-champagne"
            defaultValue=""
          >
            <option value="" disabled className="text-burgundy-300">
              Bitte wählen
            </option>
            {ANLASS_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-datum"
            className="block text-[10px] font-light tracking-[0.25em] uppercase text-burgundy-400/70"
          >
            Wunschdatum
          </label>
          <input
            id="contact-datum"
            type="date"
            className="mt-2 block w-full border-b border-cream-300 bg-transparent py-2.5 text-sm text-burgundy-700 outline-none transition-colors duration-500 focus:border-champagne"
          />
        </div>
      </div>

      {/* Personenzahl */}
      <div>
        <label
          htmlFor="contact-personen"
          className="block text-[10px] font-light tracking-[0.25em] uppercase text-burgundy-400/70"
        >
          Personenzahl
        </label>
        <input
          id="contact-personen"
          type="number"
          min="1"
          max="200"
          className="mt-2 block w-full border-b border-cream-300 bg-transparent py-2.5 text-sm text-burgundy-700 outline-none transition-colors duration-500 placeholder:text-burgundy-300/40 focus:border-champagne"
          placeholder="z.B. 12"
        />
      </div>

      {/* Nachricht */}
      <div>
        <label
          htmlFor="contact-nachricht"
          className="block text-[10px] font-light tracking-[0.25em] uppercase text-burgundy-400/70"
        >
          Nachricht
        </label>
        <textarea
          id="contact-nachricht"
          rows={4}
          className="mt-2 block w-full resize-none border-b border-cream-300 bg-transparent py-2.5 text-sm leading-relaxed text-burgundy-700 outline-none transition-colors duration-500 placeholder:text-burgundy-300/40 focus:border-champagne"
          placeholder="Erzählen Sie uns von Ihren Wünschen..."
        />
      </div>

      {/* Submit */}
      <div className="pt-2 sm:pt-4">
        <button
          type="submit"
          className="h-12 w-full border border-burgundy-700 text-[10px] tracking-[0.25em] uppercase text-burgundy-700 transition-all duration-500 hover:bg-burgundy-700 hover:text-cream-200 active:bg-burgundy-700 active:text-cream-200 sm:h-11 sm:w-auto sm:px-10"
        >
          Absenden
        </button>
      </div>
    </form>
  );
}
