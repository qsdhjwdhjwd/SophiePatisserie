"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  splitBy?: "word" | "letter";
};

export function TextReveal({
  text,
  as: Tag = "p",
  className = "",
  delay = 0,
  splitBy = "word",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const units = splitBy === "word" ? text.split(" ") : text.split("");

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className}>
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span
            className="inline-block transition-all duration-700 ease-out"
            style={{
              transform: visible ? "translateY(0)" : "translateY(100%)",
              opacity: visible ? 1 : 0,
              transitionDelay: `${i * 60}ms`,
            }}
          >
            {unit}
            {splitBy === "word" && i < units.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
