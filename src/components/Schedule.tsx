"use client";

import { useState } from "react";
import { CLUB, SCHEDULE, SCHEDULE_TABS, type ScheduleTabId } from "@/data/club";
import { SectionTitle } from "./SectionTitle";

export const Schedule = () => {
  const [tab, setTab] = useState<ScheduleTabId>("kids");

  return (
    <section id="schedule" className="border-y border-bone/10 bg-moss/50">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <SectionTitle kicker="Неделя в клубе" title="Расписание занятий" />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Фильтр расписания">
          {SCHEDULE_TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`clip-cut-sm px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                tab === t.id ? "bg-flame text-ink" : "bg-ink text-khaki hover:text-bone"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {SCHEDULE[tab].map((g) => (
            <article key={g.group} className="clip-cut border border-bone/15 bg-ink p-6 md:p-8">
              <h3 className="font-display text-base font-black uppercase md:text-lg">
                {g.group}
              </h3>
              <ul className="mt-4 space-y-3">
                {g.slots.map((s) => (
                  <li
                    key={s.days}
                    className="flex flex-wrap items-baseline justify-between gap-2 border-b border-bone/10 pb-3 text-sm"
                  >
                    <span className="font-semibold text-bone">{s.days}</span>
                    <span className="font-display text-flame">{s.time}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-khaki">
          Занятия проводят опытные лицензированные тренеры с педагогическим
          образованием. Запись — по телефону{" "}
          <a
            href={CLUB.phoneHref}
            className="font-semibold text-bone transition-colors hover:text-flame"
          >
            {CLUB.phone}
          </a>
          .
        </p>
      </div>
    </section>
  );
};
