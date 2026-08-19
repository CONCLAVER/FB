import { Placeholder } from "./Placeholder";
import { SectionTitle } from "./SectionTitle";

const SHOTS = ["Тренировка", "Спарринг", "Зал", "Команда"];

export const Gallery = () => (
  <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
    <SectionTitle kicker="Атмосфера" title="Жизнь клуба" />
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {SHOTS.map((s) => (
        <Placeholder
          key={s}
          label={s}
          className="h-40 transition-transform duration-300 hover:-translate-y-1 md:h-52"
        />
      ))}
    </div>
  </section>
);
