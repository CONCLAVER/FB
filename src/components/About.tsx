import { PREP } from "../data/club";
import { SectionTitle } from "./SectionTitle";

export const About = () => (
  <section id="about" className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
    <SectionTitle kicker="Клуб КЕФ" title="О клубе" />
    <p className="max-w-3xl text-base text-khaki md:text-lg">
      «ФАЙТБОКСИНГ» (КЕФ) — официальная спортивная организация, развивающая
      любительские и профессиональные виды единоборств, пропагандирующая
      здоровый образ жизни и нравственное воспитание личности. Клуб входит в
      состав Федерации СБЕ ММА Нижегородской области.
    </p>
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {PREP.map((p, i) => (
        <article
          key={p.title}
          className="clip-cut border border-bone/15 bg-moss p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-olive/30 md:p-8"
        >
          <p className="font-display text-xs font-bold text-khaki">0{i + 1}</p>
          <h3 className="mt-3 font-display text-base font-black uppercase">
            {p.title} подготовка
          </h3>
          <p className="mt-3 text-sm text-khaki">{p.text}</p>
        </article>
      ))}
    </div>
  </section>
);
