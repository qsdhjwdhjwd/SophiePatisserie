import { ScrollReveal } from "@/components/scroll-reveal";

type Props = {
  variant?: "light" | "dark";
};

export function SectionDivider({ variant = "light" }: Props) {
  const lineColor =
    variant === "light" ? "bg-champagne/30" : "bg-cream-200/15";
  const accentColor =
    variant === "light" ? "border-champagne/40" : "border-cream-200/25";

  return (
    <ScrollReveal className="py-4">
      <div className="flex items-center justify-center gap-6">
        <div className={`h-px w-20 ${lineColor}`} />
        <div className={`size-2 rotate-45 border ${accentColor}`} />
        <div className={`h-px w-20 ${lineColor}`} />
      </div>
    </ScrollReveal>
  );
}
