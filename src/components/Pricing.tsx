"use client";

import { PRICING } from "@/data/club";
import { ClipButton } from "./ClipButton";
import { SectionTitle } from "./SectionTitle";
import { useSignup } from "./SignupModal";

export const Pricing = () => {
  const openSignup = useSignup();

  return (
    <section id="pricing" className="border-y border-bone/10 bg-moss/50">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <SectionTitle kicker="Стоимость" title="Абонементы" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((p) => (
            <article
              key={p.title}
              className={`clip-cut relative flex flex-col border bg-moss p-6 transition-all duration-300 hover:-translate-y-1 md:p-8 ${
                p.featured
                  ? "border-flame"
                  : "border-bone/15"
              }`}
            >
              {p.featured && (
                <span className="clip-cut-sm absolute -top-3 left-6 bg-flame px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-ink">
                  Оптимальный
                </span>
              )}
              <h3 className="font-display text-base font-black uppercase">
                {p.title}
              </h3>
              <p className="mt-4 font-display text-3xl font-black text-flame md:text-4xl">
                {p.price}
                {p.price !== "по запросу" && <span className="text-lg text-khaki"> ₽</span>}
              </p>
              <p className="mt-1 text-sm text-khaki">{p.period}</p>
              {p.perLesson && (
                <p className="mt-2 text-xs text-flame">{p.perLesson}</p>
              )}
              <ul className="mt-6 flex-1 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-khaki">
                    <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-flame" />
                    {f}
                  </li>
                ))}
              </ul>
              <ClipButton
                onClick={openSignup}
                variant={p.featured ? "primary" : "ghost"}
                className="mt-8 w-full"
              >
                Записаться
              </ClipButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
