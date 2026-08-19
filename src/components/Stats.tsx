import { STATS } from "@/data/club";

export const Stats = () => (
  <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
    <dl className="grid grid-cols-2 gap-px border border-bone/10 bg-bone/10 lg:grid-cols-4">
      {STATS.map((s) => (
        <div key={s.value} className="bg-ink p-6 transition-colors duration-300 hover:bg-moss md:p-8">
          <dd className="font-display text-3xl font-black text-flame md:text-5xl">
            {s.value}
          </dd>
          <dt className="mt-2 text-sm text-khaki">{s.label}</dt>
        </div>
      ))}
    </dl>
  </section>
);
