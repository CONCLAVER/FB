import { DIRECTIONS } from "@/data/club";
import { SectionTitle } from "./SectionTitle";

export const Directions = () => (
  <section id="directions" className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
    <SectionTitle kicker="Школа" title="Наши направления" />
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {DIRECTIONS.map((d, i) => (
        <article
          key={d.title}
          className="clip-cut group bg-moss p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-olive/30 md:p-8"
        >
          <span className="clip-cut-sm inline-flex h-8 w-8 items-center justify-center border border-bone/15 bg-ink font-display text-xs font-bold text-flame">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-display text-lg font-black uppercase transition-colors group-hover:text-flame">
            {d.title}
          </h3>
          <p className="mt-3 text-sm text-khaki">{d.note}</p>
        </article>
      ))}
    </div>
  </section>
);
