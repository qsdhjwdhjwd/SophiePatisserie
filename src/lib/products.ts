export type ProductSize = {
  id: string;
  label: string;
  priceInCents: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  type: "standard" | "inquiry";
  category: "torte" | "gebaeck" | "klassiker";
  priceInCents: number | null;
  sizes: ProductSize[] | null;
  imagePlaceholder: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "festtagstorten",
    slug: "festtagstorten",
    name: "Festtagstorten",
    tagline: "Individuell gestaltete Torten für Ihre besonderen Momente",
    description:
      "Jede Festtagstorte wird nach Ihren Wünschen individuell gestaltet — von der Geschmacksrichtung über das Design bis zum letzten Detail. Hochzeiten, Geburtstage, Jubiläen: Wir kreieren Ihr persönliches Meisterwerk.",
    type: "inquiry",
    category: "torte",
    priceInCents: null,
    sizes: null,
    imagePlaceholder: "4/5",
  },
  {
    id: "sirniki",
    slug: "sirniki",
    name: "Sirniki",
    tagline: "Goldene Quarkpfannkuchen nach osteuropäischer Familientradition",
    description:
      "Zarte Quarkpfannkuchen, golden gebraten und innen cremig weich. Nach dem Originalrezept unserer Großmutter — serviert mit Sauerrahm und Beerenkompott.",
    type: "standard",
    category: "klassiker",
    priceInCents: 1490,
    sizes: [
      { id: "sirniki-4", label: "4 Stück", priceInCents: 1490 },
      { id: "sirniki-8", label: "8 Stück", priceInCents: 2690 },
    ],
    imagePlaceholder: "4/5",
  },
  {
    id: "medovik",
    slug: "medovik",
    name: "Medovik",
    tagline: "Vielschichtiger Honigkuchen mit zarter Sahnecreme",
    description:
      "Acht hauchdünne Honigteigschichten, durchzogen von einer leichten Sahnecreme. Unser Medovik ruht 24 Stunden, bis Teig und Creme zu einer samtigen Einheit verschmelzen.",
    type: "standard",
    category: "klassiker",
    priceInCents: 3490,
    sizes: [
      { id: "medovik-s", label: "4 Portionen", priceInCents: 3490 },
      { id: "medovik-m", label: "8 Portionen", priceInCents: 5990 },
      { id: "medovik-l", label: "12 Portionen", priceInCents: 7990 },
    ],
    imagePlaceholder: "4/5",
  },
  {
    id: "napoleonka",
    slug: "napoleonka",
    name: "Napoleonka",
    tagline: "Knusprige Blätterteigschnitten mit Vanillecreme",
    description:
      "Hunderte feinste Blätterteigschichten, gefüllt mit einer französisch inspirierten Vanillecreme. Knusprig, cremig, unwiderstehlich.",
    type: "standard",
    category: "klassiker",
    priceInCents: 2990,
    sizes: [
      { id: "napoleonka-s", label: "4 Portionen", priceInCents: 2990 },
      { id: "napoleonka-m", label: "8 Portionen", priceInCents: 4990 },
    ],
    imagePlaceholder: "4/5",
  },
  {
    id: "ptichye-moloko",
    slug: "ptichye-moloko",
    name: "Ptichye Moloko",
    tagline: "Luftiges Soufflé unter feiner Schokoladenglasur",
    description:
      "Federleichtes Soufflé auf einem zarten Biskuitboden, überzogen mit dunkler belgischer Schokolade. Der Name bedeutet ‚Vogelmilch' — etwas so Köstliches, dass es kaum real sein kann.",
    type: "standard",
    category: "klassiker",
    priceInCents: 3290,
    sizes: [
      { id: "ptichye-s", label: "4 Portionen", priceInCents: 3290 },
      { id: "ptichye-m", label: "8 Portionen", priceInCents: 5490 },
    ],
    imagePlaceholder: "4/5",
  },
  {
    id: "prjaniki",
    slug: "prjaniki",
    name: "Prjaniki",
    tagline: "Gewürzkuchen mit Zuckerguss nach alter Tradition",
    description:
      "Weiche, aromatische Lebkuchen mit Honig, Zimt und Kardamom — glasiert mit einem feinen Zuckerguss. Perfekt zum Tee oder Kaffee.",
    type: "standard",
    category: "gebaeck",
    priceInCents: 890,
    sizes: [
      { id: "prjaniki-6", label: "6 Stück", priceInCents: 890 },
      { id: "prjaniki-12", label: "12 Stück", priceInCents: 1590 },
    ],
    imagePlaceholder: "4/5",
  },
];

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
