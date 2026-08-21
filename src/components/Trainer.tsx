import Image from "next/image";
import { TRAINER } from "../data/club";
import { SectionTitle } from "./SectionTitle";

export const Trainer = () => (
  <section id="trainer" className="border-y border-bone/10 bg-moss/50">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[1fr_1.3fr] lg:items-center">
      <div className="clip-cut group relative h-80 overflow-hidden lg:h-[28rem]">
        <Image
          src="/images/trainer.jpg"
          alt="Старший тренер Жалилов Рамиль Рафаильевич"
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"
        />
      </div>
      <div>
        <SectionTitle kicker="Состав" title="Старший тренер" />
        <p className="font-display text-xl font-black uppercase md:text-2xl">
          {TRAINER.name}
        </p>
        <p className="mt-2 text-sm font-semibold text-flame">{TRAINER.role}</p>
        <ul className="mt-6 space-y-3">
          {TRAINER.facts.map((f) => (
            <li key={f} className="flex gap-3 text-sm text-khaki">
              <span
                aria-hidden
                className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-flame"
              />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
