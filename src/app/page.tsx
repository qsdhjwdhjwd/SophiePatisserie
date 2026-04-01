import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { ScrollReveal } from "@/components/scroll-reveal";

/* ────────────────────── Helpers ────────────────────── */

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-burgundy-300">
      {children}
    </span>
  );
}

function Ornament({ variant = "champagne" }: { variant?: "champagne" | "forest" | "cream" }) {
  const colors = {
    champagne: { line: "bg-champagne/40", diamond: "border-champagne/40" },
    forest: { line: "bg-forest-400/30", diamond: "border-forest-400/30" },
    cream: { line: "bg-cream-200/30", diamond: "border-cream-200/30" },
  };
  const c = colors[variant];

  return (
    <div className="flex items-center justify-center gap-4">
      <div className={`h-px w-12 ${c.line}`} />
      <div className={`size-1.5 rotate-45 border ${c.diamond}`} />
      <div className={`h-px w-12 ${c.line}`} />
    </div>
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

/* ────────────────────── Data ────────────────────── */

const SPECIALTIES = [
  {
    name: "Festtagstorten",
    description:
      "Individuell gestaltete Torten für Ihre besonderen Momente",
  },
  {
    name: "Sirniki",
    description:
      "Goldene Quarkpfannkuchen nach osteuropäischer Familientradition",
  },
  {
    name: "Medovik",
    description: "Vielschichtiger Honigkuchen mit zarter Sahnecreme",
  },
  {
    name: "Napoleonka",
    description: "Knusprige Blätterteigschnitten mit Vanillecreme",
  },
  {
    name: "Ptichye Moloko",
    description: "Luftiges Soufflé unter feiner Schokoladenglasur",
  },
  {
    name: "Prjaniki",
    description: "Gewürzkuchen mit Zuckerguss nach alter Tradition",
  },
];

const PHILOSOPHY = [
  {
    title: "Tradition",
    text: "Rezepte, die über Generationen weitergegeben wurden. Jede Kreation trägt das Erbe osteuropäischer Backstuben in sich.",
  },
  {
    title: "Handwerk",
    text: "Ohne Kompromisse. Jede Torte wird von Hand gefertigt, mit ausgewählten Zutaten und der Sorgfalt, die nur echte Handarbeit bietet.",
  },
  {
    title: "Frankfurt",
    text: "Verwurzelt in der Stadt, die wir lieben. Sofié ist Frankfurts Brücke zu den Aromen Osteuropas.",
  },
];

/* ────────────────────── Page ────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="relative flex h-screen flex-col items-center justify-center bg-burgundy-500">
          <div className="flex flex-col items-center">
            <h1
              className="animate-fade-up font-serif text-7xl italic text-cream-200 sm:text-8xl lg:text-9xl xl:text-[11rem] tracking-wide"
              style={{ animationDelay: "0.2s" }}
            >
              Sofié
            </h1>
            <p
              className="animate-fade-up mt-5 text-[10px] tracking-[0.45em] uppercase text-cream-200/50 sm:text-xs"
              style={{ animationDelay: "0.6s" }}
            >
              Patisserie Frankfurt
            </p>
          </div>

          <p
            className="animate-fade-up mt-20 max-w-sm px-6 text-center text-sm leading-relaxed tracking-wide text-cream-200/35"
            style={{ animationDelay: "1s" }}
          >
            Handgefertigte Patisserie mit osteuropäischer Seele
          </p>

          {/* Scroll indicator */}
          <div
            className="animate-fade-up absolute bottom-12 flex flex-col items-center gap-3"
            style={{ animationDelay: "1.4s" }}
          >
            <span className="text-[9px] tracking-[0.35em] uppercase text-cream-200/25">
              Scroll
            </span>
            <div className="h-12 w-px animate-pulse bg-gradient-to-b from-cream-200/25 to-transparent" />
          </div>
        </section>

        {/* ── Intro Statement ── */}
        <section className="bg-cream-50 px-6 py-28 sm:py-36 lg:py-44">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <Ornament />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-10 font-serif text-2xl leading-relaxed text-burgundy-800 sm:text-3xl lg:text-4xl lg:leading-snug">
                Wo osteuropäische Backtradition
                <br className="hidden sm:block" /> auf Frankfurter Finesse
                trifft.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="mt-10">
                <Ornament />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Spezialitäten ── */}
        <section
          id="spezialitaeten"
          className="scroll-mt-20 bg-white px-6 py-28 sm:py-36"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center">
                <SectionTag>Unsere Kreationen</SectionTag>
                <h2 className="mt-4 font-serif text-4xl text-burgundy-800 sm:text-5xl lg:text-6xl">
                  Spezialitäten
                </h2>
                <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-burgundy-400">
                  Jede Kreation erzählt eine Geschichte — von den Küchen
                  Osteuropas bis in das Herz Frankfurts.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-x-12">
              {SPECIALTIES.map((item, i) => (
                <ScrollReveal key={item.name} delay={i * 100}>
                  <div className="group">
                    <div className="overflow-hidden">
                      <PlaceholderFrame aspectRatio="4/5" />
                    </div>
                    <h3 className="mt-5 font-serif text-xl text-burgundy-700 lg:text-2xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-burgundy-400">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Über Sophie ── */}
        <section
          id="ueber"
          className="scroll-mt-20 bg-cream-50 px-6 py-28 sm:py-36"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <PlaceholderFrame aspectRatio="3/4" label="Portrait" />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <SectionTag>Die Gründerin</SectionTag>
                <h2 className="mt-4 font-serif text-4xl text-burgundy-800 sm:text-5xl lg:text-6xl">
                  Sophie
                </h2>
                <div className="mt-8 space-y-5 text-sm leading-relaxed text-burgundy-600 sm:text-base sm:leading-relaxed">
                  <p>
                    Was als Sehnsucht nach den Aromen ihrer Kindheit begann,
                    wurde zur Leidenschaft ihres Lebens. Sophie bringt die
                    vergessenen Rezepte osteuropäischer Backstuben nach Frankfurt
                    — neu interpretiert, mit besten Zutaten und dem Anspruch, den
                    sie von ihrer Großmutter gelernt hat: Jedes Stück muss
                    perfekt sein.
                  </p>
                  <p>
                    In ihrer Patisserie im Herzen Frankfurts verbindet sie
                    slawische Backtradition mit zeitgenössischer Ästhetik. Jede
                    Torte erzählt eine Geschichte. Jeder Bissen eine Reise.
                  </p>
                </div>
                <div className="mt-10">
                  <Ornament variant="forest" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Philosophie ── */}
        <section
          id="philosophie"
          className="scroll-mt-20 bg-burgundy-500 px-6 py-28 sm:py-36"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center">
                <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-cream-200/40">
                  Was uns antreibt
                </span>
                <h2 className="mt-4 font-serif text-4xl text-cream-200 sm:text-5xl lg:text-6xl">
                  Philosophie
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-16 grid gap-12 sm:grid-cols-3 lg:mt-24 lg:gap-16">
              {PHILOSOPHY.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 150}>
                  <div className="text-center">
                    <div className="mx-auto mb-6 w-8 border-t border-forest-400/40" />
                    <h3 className="font-serif text-2xl text-cream-200 lg:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-cream-200/55">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Kontakt ── */}
        <section
          id="kontakt"
          className="scroll-mt-20 bg-white px-6 py-28 sm:py-36"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center">
                <SectionTag>Besuchen Sie uns</SectionTag>
                <h2 className="mt-4 font-serif text-4xl text-burgundy-800 sm:text-5xl lg:text-6xl">
                  Kontakt
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:mt-24">
              <ScrollReveal>
                <div>
                  <h3 className="font-serif text-xl text-burgundy-700">
                    Adresse
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-burgundy-600">
                    Sofié Patisserie
                    <br />
                    Frankfurt am Main
                    <br />
                    Deutschland
                  </p>

                  <h3 className="mt-10 font-serif text-xl text-burgundy-700">
                    Öffnungszeiten
                  </h3>
                  <div className="mt-4 space-y-2 text-sm text-burgundy-600">
                    <div className="flex max-w-xs justify-between">
                      <span>Dienstag — Freitag</span>
                      <span>09:00 — 18:00</span>
                    </div>
                    <div className="flex max-w-xs justify-between">
                      <span>Samstag</span>
                      <span>10:00 — 16:00</span>
                    </div>
                    <div className="flex max-w-xs justify-between">
                      <span>Sonntag & Montag</span>
                      <span className="text-burgundy-300">Geschlossen</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div>
                  <h3 className="font-serif text-xl text-burgundy-700">
                    Kontakt
                  </h3>
                  <div className="mt-4 space-y-4 text-sm text-burgundy-600">
                    <p>
                      <span className="text-[11px] tracking-[0.15em] uppercase text-burgundy-300">
                        E-Mail
                      </span>
                      <br />
                      hallo@sofiepatisserie.com
                    </p>
                    <p>
                      <span className="text-[11px] tracking-[0.15em] uppercase text-burgundy-300">
                        Instagram
                      </span>
                      <br />
                      @sofiepatisserie
                    </p>
                  </div>

                  <h3 className="mt-10 font-serif text-xl text-burgundy-700">
                    Bestellungen
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-burgundy-600">
                    Individuelle Tortenbestellungen nehmen wir gerne per E-Mail
                    oder Instagram entgegen. Bitte bestellen Sie mindestens 3
                    Tage im Voraus.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-burgundy-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-8">
            <Image
              src="/images/logo.jpg"
              alt="Sofié Patisserie"
              width={120}
              height={120}
              className="rounded-sm opacity-80"
            />

            <ul className="flex flex-wrap justify-center gap-8 text-[10px] tracking-[0.25em] uppercase text-cream-200/35">
              <li>
                <a
                  href="#spezialitaeten"
                  className="transition-opacity duration-300 hover:opacity-70"
                >
                  Spezialitäten
                </a>
              </li>
              <li>
                <a
                  href="#ueber"
                  className="transition-opacity duration-300 hover:opacity-70"
                >
                  Über Sophie
                </a>
              </li>
              <li>
                <a
                  href="#philosophie"
                  className="transition-opacity duration-300 hover:opacity-70"
                >
                  Philosophie
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="transition-opacity duration-300 hover:opacity-70"
                >
                  Kontakt
                </a>
              </li>
            </ul>

            <div className="h-px w-16 bg-cream-200/10" />

            <div className="text-center text-[10px] tracking-wider text-cream-200/20">
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
