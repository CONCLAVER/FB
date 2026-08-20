"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  CLUB,
  DIRECTIONS,
  NAV,
  PREP,
  PRICING,
  SCHEDULE,
  SCHEDULE_TABS,
  STATS,
  TRAINER,
  type ScheduleTabId,
} from "@/data/club";
import { useSignup } from "@/components/SignupModal";
import { VariantNav } from "@/components/VariantNav";

const Kicker = ({ children }: { children: ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff6b2e]">
    {children}
  </p>
);

export default function PageV2() {
  const openSignup = useSignup();
  const [tab, setTab] = useState<ScheduleTabId>("kids");

  return (
    <div className="min-h-full bg-[#f7f5f0] font-sans text-[#161613]">
      <header className="border-b border-[#e4e1d8]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="/v2#top" className="font-display text-lg font-black uppercase tracking-widest">
            Fightboxing
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Навигация">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-[#6f6d66] transition-colors hover:text-[#161613]">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <a href={CLUB.phoneHref} className="hidden text-sm font-semibold md:block">
              {CLUB.phone}
            </a>
            <button
              type="button"
              onClick={() => openSignup()}
              className="bg-[#161613] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#f7f5f0] transition-colors hover:bg-[#ff6b2e]"
            >
              Записаться
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center md:py-28">
          <div>
            <Kicker>{CLUB.slogan} · {CLUB.city}</Kicker>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] md:text-6xl">
              ММА и ударные техники в Нижнем Новгороде
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[#6f6d66]">
              Клуб смешанных боевых единоборств «ФАЙТБОКСИНГ». Лицензированные тренеры, группы для детей с 7 лет и взрослых.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <button
                type="button"
                onClick={() => openSignup()}
                className="bg-[#161613] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#f7f5f0] transition-colors hover:bg-[#ff6b2e]"
              >
                Записаться на пробное
              </button>
              <a href={CLUB.vk} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline underline-offset-4 transition-colors hover:text-[#ff6b2e]">
                ВКонтакте
              </a>
            </div>
          </div>
          <div className="relative h-80 border border-[#e4e1d8] bg-white md:h-96">
            <Image src="/images/hero.jpg" alt="Спарринг в зале клуба ФАЙТБОКСИНГ" fill priority sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
          </div>
        </section>

        <section className="border-t border-[#e4e1d8]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[#e4e1d8] lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.value} className="bg-[#f7f5f0] px-6 py-10">
                <p className="font-display text-4xl font-black text-[#161613]">{s.value}</p>
                <p className="mt-2 text-sm text-[#6f6d66]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="directions" className="mx-auto max-w-6xl px-6 py-20">
          <Kicker>Школа</Kicker>
          <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">Направления</h2>
          <div className="mt-10 grid gap-px bg-[#e4e1d8] md:grid-cols-2 lg:grid-cols-3">
            {DIRECTIONS.map((d, i) => (
              <div key={d.title} className="bg-[#f7f5f0] p-8">
                <p className="text-xs font-bold text-[#ff6b2e]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-lg font-black uppercase">{d.title}</h3>
                <p className="mt-2 text-sm text-[#6f6d66]">{d.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="schedule" className="border-t border-[#e4e1d8] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Kicker>Неделя в клубе</Kicker>
            <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">Расписание</h2>
            <div className="mt-8 flex gap-2">
              {SCHEDULE_TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                    tab === t.id ? "bg-[#161613] text-[#f7f5f0]" : "text-[#6f6d66] hover:text-[#161613]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {SCHEDULE[tab].map((g) => (
                <div key={g.group} className="border-t-2 border-[#161613] pt-4">
                  <h3 className="font-display text-lg font-black uppercase">{g.group}</h3>
                  <ul className="mt-3 space-y-2">
                    {g.slots.map((s) => (
                      <li key={s.days} className="flex justify-between text-sm">
                        <span className="text-[#6f6d66]">{s.days}</span>
                        <span className="font-semibold text-[#ff6b2e]">{s.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
          <Kicker>Стоимость</Kicker>
          <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">Абонементы</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRICING.map((p) => (
              <div key={p.title} className={`flex flex-col border bg-white p-6 ${p.featured ? "border-[#ff6b2e]" : "border-[#e4e1d8]"}`}>
                {p.featured && <p className="mb-3 self-start bg-[#ff6b2e] px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Оптимальный</p>}
                <h3 className="font-display text-base font-black uppercase">{p.title}</h3>
                <p className="mt-4 font-display text-3xl font-black">{p.price}{p.price !== "по запросу" && <span className="text-base text-[#6f6d66]"> ₽</span>}</p>
                <p className="mt-1 text-sm text-[#6f6d66]">{p.period}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm text-[#6f6d66]">— {f}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => openSignup(p.title === "Пробное" ? undefined : `Абонемент «${p.title}»`)}
                  className={`mt-6 w-full py-3 text-xs font-bold uppercase tracking-widest transition-colors ${p.featured ? "bg-[#ff6b2e] text-white hover:bg-[#161613]" : "bg-[#161613] text-[#f7f5f0] hover:bg-[#ff6b2e]"}`}
                >
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="border-t border-[#e4e1d8] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Kicker>Клуб КЕФ</Kicker>
            <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">О клубе</h2>
            <p className="mt-6 max-w-3xl text-lg text-[#6f6d66]">
              «ФАЙТБОКСИНГ» (КЕФ) — официальная спортивная организация, развивающая любительские и профессиональные виды единоборств. Клуб входит в состав Федерации СБЕ ММА Нижегородской области.
            </p>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {PREP.map((p, i) => (
                <div key={p.title}>
                  <p className="text-xs font-bold text-[#ff6b2e]">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-base font-black uppercase">{p.title} подготовка</h3>
                  <p className="mt-2 text-sm text-[#6f6d66]">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trainer" className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative h-96 border border-[#e4e1d8] bg-white">
            <Image src="/images/trainer.jpg" alt="Старший тренер Жалилов Рамиль Рафаильевич" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover object-top" />
          </div>
          <div>
            <Kicker>Состав</Kicker>
            <h2 className="mt-3 font-display text-2xl font-black md:text-3xl">{TRAINER.name}</h2>
            <p className="mt-2 text-sm font-semibold text-[#ff6b2e]">{TRAINER.role}</p>
            <ul className="mt-6 space-y-2">
              {TRAINER.facts.map((f) => (
                <li key={f} className="text-sm text-[#6f6d66]">— {f}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[#e4e1d8]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Kicker>Атмосфера</Kicker>
            <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">Жизнь клуба</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {["Тренировка", "Спарринг", "Зал", "Команда"].map((s) => (
                <div key={s} className="flex h-40 items-center justify-center border border-[#e4e1d8] bg-white text-xs uppercase tracking-widest text-[#6f6d66]">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#161613] text-[#f7f5f0]">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center">
            <h2 className="max-w-2xl font-display text-3xl font-black md:text-4xl">Готов начать? Запишись на пробное занятие</h2>
            <button type="button" onClick={() => openSignup()} className="bg-[#ff6b2e] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#f7f5f0] hover:text-[#161613]">
              Записаться
            </button>
          </div>
        </section>
      </main>

      <footer id="contacts" className="border-t border-[#e4e1d8]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-black uppercase tracking-widest">Fightboxing</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#6f6d66]">{CLUB.tagline} · {CLUB.city}</p>
            <p className="mt-3 text-sm font-semibold text-[#ff6b2e]">{CLUB.slogan}</p>
          </div>
          <div className="space-y-2 text-sm text-[#6f6d66]">
            <a href={`https://yandex.ru/maps/?text=${encodeURIComponent(CLUB.address)}`} target="_blank" rel="noopener noreferrer" className="block underline underline-offset-4 hover:text-[#161613]">{CLUB.address}</a>
            <a href={CLUB.phoneHref} className="block font-semibold text-[#161613] hover:text-[#ff6b2e]">{CLUB.phone}</a>
            <p>Открываемся в {CLUB.opensAt}</p>
          </div>
          <div className="text-sm">
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href} className="text-[#6f6d66] hover:text-[#161613]">{n.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <VariantNav />
    </div>
  );
}
