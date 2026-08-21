"use client";

import { PRICING } from "../data/club";
import { SectionTitle } from "./SectionTitle";

export const Pricing = () => {
  const handleSignup = () => {
    if ((window as any).openSignupModal) {
      (window as any).openSignupModal();
    }
  };

  return (
    <section id="pricing" className="border-y border-bone/10 bg-moss/50">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <SectionTitle kicker="Стоимость" title="Абонементы" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((p) => (
            <div key={p.title} className="group relative transition-all duration-300 hover:-translate-y-1">
              {p.featured && (
                <span className="clip-cut-sm absolute -top-3 left-6 z-10 bg-flame px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-ink">
                  Оптимальный
                </span>
              )}
              <article
                className={`clip-cut flex flex-col border bg-moss p-6 md:p-8 ${
                  p.featured
                    ? "border-flame"
                    : "border-bone/15"
                }`}
              >
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
                <button
                  type="button"
                  onClick={handleSignup}
                  className={`mt-8 w-full clip-cut-sm border-2 py-3 font-display text-xs font-bold uppercase tracking-widest transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${
                    p.featured
                      ? "border-flame bg-flame text-ink shadow-[4px_4px_0_#f5f5f5]"
                      : "border-bone/15 bg-moss text-bone shadow-[4px_4px_0_#ff6b2e] hover:bg-flame hover:text-ink"
                  }`}
                >
                  Записаться
                </button>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
