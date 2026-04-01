import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TextReveal } from "@/components/text-reveal";
import { Marquee } from "@/components/marquee";
import { ParallaxSection } from "@/components/parallax-section";
import { SectionDivider } from "@/components/section-divider";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/products";
import { Truck } from "lucide-react";

/* ────────────────────── Data ────────────────────── */

const PHILOSOPHY = [
  {
    title: "Tradition",
    text: "Rezepte aus Moskau, Kiew und Warschau — weitergegeben über Generationen, perfektioniert in Frankfurt.",
  },
  {
    title: "Handwerk",
    text: "Keine Shortcuts. Jede Schicht von Hand, jede Creme frisch angesetzt, jedes Detail bewusst.",
  },
  {
    title: "Frankfurt",
    text: "Von der Skyline bis zum Taunus — Sofié bringt osteuropäische Patisserie-Kunst dorthin, wo sie gefehlt hat.",
  },
];

const MARQUEE_ITEMS = [
  "Patisserie",
  "Handwerk",
  "Tradition",
  "Frankfurt",
  "Osteuropa",
  "Sirniki",
  "Medovik",
  "Napoleonka",
];

const INGREDIENTS = [
  {
    name: "Butter",
    detail: "Normandie, Frankreich",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="size-10 sm:size-12">
        <rect x="8" y="18" width="32" height="16" rx="2" />
        <path d="M12 18v-4a2 2 0 012-2h20a2 2 0 012 2v4" />
        <line x1="24" y1="18" x2="24" y2="34" opacity={0.3} />
      </svg>
    ),
  },
  {
    name: "Vanille",
    detail: "Madagaskar, keine Aromen",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="size-10 sm:size-12">
        <path d="M16 8c0 0 2 4 2 12s-2 20-2 20" />
        <path d="M20 8c0 0 2 4 2 12s-2 20-2 20" />
        <path d="M16 20c2-1 4-1 6 0" />
        <circle cx="32" cy="16" r="4" opacity={0.3} />
        <circle cx="34" cy="26" r="3" opacity={0.3} />
      </svg>
    ),
  },
  {
    name: "Tvarog",
    detail: "Osteuropäischer Frischkäse",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="size-10 sm:size-12">
        <ellipse cx="24" cy="28" rx="14" ry="8" />
        <path d="M10 28v-6c0-4.4 6.3-8 14-8s14 3.6 14 8v6" />
        <ellipse cx="24" cy="22" rx="14" ry="8" opacity={0.3} />
      </svg>
    ),
  },
  {
    name: "Freilandeier",
    detail: "Regionale Höfe",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="size-10 sm:size-12">
        <ellipse cx="24" cy="28" rx="10" ry="13" />
        <ellipse cx="24" cy="25" rx="6" ry="8" opacity={0.3} />
      </svg>
    ),
  },
  {
    name: "Rohhonig",
    detail: "Unbehandelt, regional",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="size-10 sm:size-12">
        <path d="M16 20h16v14a4 4 0 01-4 4h-8a4 4 0 01-4-4V20z" />
        <path d="M14 20h20" />
        <path d="M20 20v-6a4 4 0 018 0v6" />
        <path d="M20 28h8" opacity={0.3} />
        <path d="M22 32h4" opacity={0.3} />
      </svg>
    ),
  },
  {
    name: "Stevia",
    detail: "Natürliche Alternative",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="size-10 sm:size-12">
        <path d="M24 40V22" />
        <path d="M24 22c-4-8-14-10-14-4s10 8 14 4z" />
        <path d="M24 22c4-8 14-10 14-4s-10 8-14 4z" />
        <path d="M24 30c-3-4-8-5-8-2s5 4 8 2z" opacity={0.3} />
      </svg>
    ),
  },
];

/* ────────────────────── Helpers ────────────────────── */

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-burgundy-300">
      {children}
    </span>
  );
}

function PlaceholderFrame({
  aspectRatio = "3/4",
  label,
}: {
  aspectRatio?: string;
  label?: string;
}) {
  return (
    <div
      className="flex items-center justify-center border border-cream-300 bg-cream-100"
      style={{ aspectRatio }}
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
        {label && (
          <span className="text-[10px] tracking-[0.2em] uppercase">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

/* ────────────────────── Page ────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="grain flex h-svh min-h-[600px] flex-col items-center justify-center bg-burgundy-500 px-4 sm:px-6">
          <div className="flex flex-col items-center">
            <TextReveal
              text="Sofié"
              as="h1"
              splitBy="letter"
              className="font-serif text-5xl italic tracking-wide text-cream-200 sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem]"
            />
            <p
              className="animate-fade-up mt-3 text-[10px] tracking-[0.45em] uppercase text-cream-200/50 sm:mt-5 sm:text-xs"
              style={{ animationDelay: "0.8s" }}
            >
              Patisserie Frankfurt
            </p>
          </div>

          <p
            className="animate-fade-up mt-8 max-w-md px-4 text-center text-xs leading-relaxed tracking-wide text-cream-200/60 sm:mt-12 sm:px-0 sm:text-sm"
            style={{ animationDelay: "1.2s" }}
          >
            Osteuropäische Patisserie-Kunst. Handgefertigt in Frankfurt.
          </p>

          {/* Scroll indicator — below subtitle, in flow */}
          <div
            className="animate-fade-up mt-10 flex flex-col items-center gap-2 sm:mt-14 sm:gap-3"
            style={{ animationDelay: "1.6s" }}
          >
            <span className="text-[9px] tracking-[0.35em] uppercase text-cream-200/40">
              Scroll
            </span>
            <div className="h-8 w-px animate-pulse bg-gradient-to-b from-cream-200/40 to-transparent sm:h-12" />
          </div>
        </section>

        {/* ── Intro Statement ── */}
        <section className="bg-cream-50 px-4 py-20 sm:px-6 sm:py-28 lg:py-44">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <TextReveal
                text="Wo slawische Backtradition auf Frankfurter Anspruch trifft."
                as="p"
                className="font-serif text-xl leading-relaxed text-burgundy-800 sm:text-2xl md:text-3xl lg:text-4xl lg:leading-snug"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ── Marquee ── */}
        <Marquee
          items={MARQUEE_ITEMS}
          className="border-y border-cream-300/40 py-4 text-[10px] tracking-[0.3em] uppercase text-burgundy-300 sm:py-5 sm:text-[11px]"
          speed="slow"
        />

        {/* ── Delivery Banner ── */}
        <section className="bg-forest-600 px-4 py-3 sm:px-6 sm:py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 text-center sm:gap-3">
            <Truck className="size-3.5 shrink-0 text-cream-200/70 sm:size-4" />
            <p className="text-[10px] tracking-[0.15em] uppercase text-cream-200/80 sm:text-[11px] sm:tracking-[0.2em]">
              Kostenlose Lieferung in Frankfurt & Taunus ab 59 €
            </p>
          </div>
        </section>

        {/* ── Spezialitäten ── */}
        <section
          id="spezialitaeten"
          className="scroll-mt-20 bg-white px-4 py-20 sm:px-6 sm:py-28 lg:py-36"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center">
                <SectionTag>Online bestellen</SectionTag>
                <h2 className="mt-3 font-serif text-3xl text-burgundy-800 sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
                  Spezialitäten
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-burgundy-400 sm:mt-6">
                  Handgefertigt mit Bio-Zutaten. Direkt bestellen oder
                  individuelle Torten auf Anfrage — auch mit Stevia.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-10 grid gap-x-6 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-14 lg:mt-24 lg:grid-cols-3 lg:gap-x-12">
              {PRODUCTS.map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 80}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── Über Sophie ── */}
        <section
          id="ueber"
          className="scroll-mt-20 bg-cream-50 px-4 py-20 sm:px-6 sm:py-28 lg:py-36"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <ParallaxSection speed={0.08}>
                <PlaceholderFrame aspectRatio="3/4" label="Portrait" />
              </ParallaxSection>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <SectionTag>Die Gründerin</SectionTag>
                <h2 className="mt-3 font-serif text-3xl text-burgundy-800 sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
                  Sophie
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-burgundy-600 sm:mt-8 sm:space-y-5 sm:text-base sm:leading-relaxed">
                  <p>
                    Großmutters Küche in Osteuropa. Dann Frankfurt. Sophie
                    bäckt seit sie denken kann — erst für die Familie, jetzt
                    für die Stadt.
                  </p>
                  <p>
                    Butter aus der Normandie, nicht aus dem Großhandel.
                    Vanille aus Madagaskar, keine Aromen. Wer einmal probiert
                    hat, schmeckt den Unterschied.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* ── Zutaten ── */}
        <section
          id="zutaten"
          className="grain scroll-mt-20 bg-forest-600 px-4 py-20 sm:px-6 sm:py-28 lg:py-36"
        >
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-center">
                <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-cream-200/50">
                  Unsere Zutaten
                </span>
                <h2 className="mt-3 font-serif text-3xl text-cream-200 sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
                  Weniger. Dafür besser.
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream-200/60 sm:mt-6">
                  Sechs Zutaten, die man schmeckt. Keine Zusätze, die man nicht
                  braucht.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-5 lg:mt-20 lg:gap-6">
              {INGREDIENTS.map((item, i) => (
                <ScrollReveal key={item.name} delay={i * 100}>
                  <div className="flex flex-col items-center rounded-lg border border-cream-200/10 bg-cream-200/5 px-4 py-6 text-center backdrop-blur-sm sm:px-6 sm:py-8">
                    <div className="text-cream-200/70">{item.icon}</div>
                    <h3 className="mt-3 font-serif text-lg text-cream-200 sm:mt-4 sm:text-xl">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[11px] tracking-wider text-cream-200/45 sm:text-xs">
                      {item.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={600}>
              <div className="mt-12 text-center sm:mt-16">
                <div className="mx-auto h-px w-12 bg-cream-200/20" />
                <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-cream-200/55">
                  Auf Wunsch mit Stevia statt Zucker — gleiche Handwerkskunst,
                  weniger Süße. Tvarog statt Mascarpone. Rohhonig statt
                  Industriezucker. So haben wir es gelernt.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider variant="dark" />

        {/* ── Philosophie ── */}
        <section
          id="philosophie"
          className="grain scroll-mt-20 bg-burgundy-500 px-4 py-20 sm:px-6 sm:py-28 lg:py-36"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center">
                <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-cream-200/55">
                  Was uns antreibt
                </span>
                <h2 className="mt-3 font-serif text-3xl text-cream-200 sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
                  Philosophie
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid gap-10 sm:mt-16 sm:grid-cols-3 sm:gap-12 lg:mt-24 lg:gap-16">
              {PHILOSOPHY.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 150}>
                  <div className="text-center">
                    <div className="mx-auto mb-5 w-8 border-t border-forest-400/40 sm:mb-6" />
                    <h3 className="font-serif text-xl text-cream-200 sm:text-2xl lg:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream-200/65 sm:mt-4">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider variant="dark" />

        {/* ── Lieferung ── */}
        <section className="bg-cream-50 px-4 py-16 sm:px-6 sm:py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="text-center">
                <SectionTag>Lieferung</SectionTag>
                <h2 className="mt-3 font-serif text-2xl text-burgundy-800 sm:mt-4 sm:text-3xl md:text-4xl">
                  Direkt zu Ihnen
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-burgundy-400 sm:mt-6">
                  Wir liefern Ihre Bestellung frisch und sorgfältig verpackt.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
                <div className="border border-cream-300 bg-white p-6 text-center sm:p-8">
                  <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-forest-600">
                    Frankfurt am Main
                  </p>
                  <p className="mt-2 font-serif text-xl text-burgundy-700 sm:mt-3 sm:text-2xl">
                    Kostenlos ab 59 €
                  </p>
                  <p className="mt-1.5 text-xs text-burgundy-400 sm:mt-2">
                    Lieferung am selben oder nächsten Tag
                  </p>
                </div>
                <div className="border border-cream-300 bg-white p-6 text-center sm:p-8">
                  <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-forest-600">
                    Taunus & Umland
                  </p>
                  <p className="mt-2 font-serif text-xl text-burgundy-700 sm:mt-3 sm:text-2xl">
                    Kostenlos ab 89 €
                  </p>
                  <p className="mt-1.5 text-xs text-burgundy-400 sm:mt-2">
                    Bad Homburg · Kronberg · Königstein · Oberursel
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* ── Kontakt ── */}
        <section
          id="kontakt"
          className="scroll-mt-20 bg-white px-4 py-20 sm:px-6 sm:py-28 lg:py-36"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center">
                <SectionTag>Kontakt</SectionTag>
                <h2 className="mt-3 font-serif text-3xl text-burgundy-800 sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
                  Schreiben Sie uns
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-10 grid gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-12 lg:mt-24">
              <ScrollReveal>
                <div>
                  <h3 className="font-serif text-lg text-burgundy-700 sm:text-xl">
                    Standort
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-burgundy-600 sm:mt-4">
                    Sofié Patisserie
                    <br />
                    Frankfurt am Main
                  </p>

                  <h3 className="mt-8 font-serif text-lg text-burgundy-700 sm:mt-10 sm:text-xl">
                    Öffnungszeiten
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-burgundy-600 sm:mt-4">
                    <div className="flex max-w-xs justify-between gap-4">
                      <span>Dienstag — Freitag</span>
                      <span>09:00 — 18:00</span>
                    </div>
                    <div className="flex max-w-xs justify-between gap-4">
                      <span>Samstag</span>
                      <span>10:00 — 16:00</span>
                    </div>
                    <div className="flex max-w-xs justify-between gap-4">
                      <span>Sonntag & Montag</span>
                      <span className="text-burgundy-300">Geschlossen</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div>
                  <h3 className="font-serif text-lg text-burgundy-700 sm:text-xl">
                    Anfragen & Bestellungen
                  </h3>
                  <div className="mt-3 space-y-4 text-sm text-burgundy-600 sm:mt-4">
                    <p>
                      <span className="text-[11px] tracking-[0.15em] uppercase text-burgundy-300">
                        E-Mail
                      </span>
                      <br />
                      info@sofiepatisserie.com
                    </p>
                    <p>
                      <span className="text-[11px] tracking-[0.15em] uppercase text-burgundy-300">
                        Instagram
                      </span>
                      <br />
                      @sofiepatisserie
                    </p>
                  </div>

                  <h3 className="mt-8 font-serif text-lg text-burgundy-700 sm:mt-10 sm:text-xl">
                    Individuelle Torten
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-burgundy-600 sm:mt-4">
                    Festtagstorten werden individuell nach Ihren Wünschen
                    gefertigt. Schreiben Sie uns per E-Mail oder Instagram —
                    mindestens 5 Tage im Voraus.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-burgundy-900 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <Image
              src="/images/logo.jpg"
              alt="Sofié Patisserie"
              width={120}
              height={120}
              className="rounded-sm opacity-80"
            />

            <ul className="flex flex-wrap justify-center gap-5 text-[10px] tracking-[0.25em] uppercase text-cream-200/50 sm:gap-8">
              <li>
                <a
                  href="#spezialitaeten"
                  className="py-2 transition-opacity duration-300 hover:opacity-70 active:opacity-70"
                >
                  Spezialitäten
                </a>
              </li>
              <li>
                <a
                  href="#ueber"
                  className="py-2 transition-opacity duration-300 hover:opacity-70 active:opacity-70"
                >
                  Über Sophie
                </a>
              </li>
              <li>
                <a
                  href="#zutaten"
                  className="py-2 transition-opacity duration-300 hover:opacity-70 active:opacity-70"
                >
                  Zutaten
                </a>
              </li>
              <li>
                <a
                  href="#philosophie"
                  className="py-2 transition-opacity duration-300 hover:opacity-70 active:opacity-70"
                >
                  Philosophie
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="py-2 transition-opacity duration-300 hover:opacity-70 active:opacity-70"
                >
                  Kontakt
                </a>
              </li>
            </ul>

            <div className="h-px w-16 bg-cream-200/10" />

            <div className="text-center text-[10px] tracking-wider text-cream-200/40">
              <p>
                &copy; {new Date().getFullYear()} Sofié Patisserie Frankfurt
              </p>
              <p className="mt-1">Alle Rechte vorbehalten</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
