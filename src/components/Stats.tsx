"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/club";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const parseValue = (raw: string): { num: number; suffix: string } => {
  const match = raw.match(/^(\d+)(\+?)$/);
  if (!match) return { num: 0, suffix: raw };
  return { num: Number(match[1]), suffix: match[2] ?? "" };
};

const AnimatedValue = ({ raw }: { raw: string }) => {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const { num, suffix } = parseValue(raw);
            const duration = 1200;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = easeOutCubic(t);
              const current = Math.round(num * eased);
              setDisplay(`${current}${suffix}`);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [raw]);

  return (
    <div ref={ref} className="font-display text-3xl font-black text-flame md:text-5xl">
      {display}
    </div>
  );
};

export const Stats = () => (
  <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
    <dl className="grid grid-cols-2 gap-px border border-bone/10 bg-bone/10 lg:grid-cols-4">
      {STATS.map((s) => (
        <div
          key={s.value}
          className="bg-ink p-6 transition-colors duration-300 hover:bg-moss md:p-8"
        >
          <AnimatedValue raw={s.value} />
          <dt className="mt-2 text-sm text-khaki">{s.label}</dt>
        </div>
      ))}
    </dl>
  </section>
);
