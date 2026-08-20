"use client";

import Image from "next/image";
import { useState } from "react";
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

const hardBtn =
  "inline-block border-2 border-[#f5f5f5] bg-[#ff6b2e] px-8 py-4 font-display text-sm font-black uppercase tracking-widest text-[#0a0a0a] shadow-[6px_6px_0_#f5f5f5] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none";

export default function PageV3() {
  const openSignup = useSignup();
  const [tab, setTab] = useState<ScheduleTabId>("kids");

  return (
    <div className="min-h-full bg-[#0a0a0a] font-sans text-[#f5f5f5]">
      <header className="border-b-4 border-[#ff6b2e]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/v3#top" className="font-display text-xl font-black uppercase tracking-tighter">
            ФАЙТ<span className="text-[#ff6b2e]">БОКСИНГ</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Навигация">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="font-display text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#ff6b2e]">
                {n.label}
              </a>
            ))}
          </nav>
          <button type="button" onClick={() => openSignup()} className="border-2 border-[#f5f5f5] bg-[#0a0a0a] px-5 py-2.5 font-display text-xs font-black uppercase tracking-widest text-[#f5f5f5] shadow-[4px_4px_0_#ff6b2e] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
            Записаться
          </button>
        </div>
      </header>

      <div aria-hidden className="overflow-hidden border-b-4 border-[#ff6b2e] bg-[#ff6b2e] py-3">
        <div className="animate-marquee flex w-max">
          {[0, 1, 2, 3].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {DIRECTIONS.map((d) => (
                <span key={d.title} className="flex items-center gap-6 pr-6">
                  <span className="font-display text-sm font-black uppercase tracking-widest text-[#0a0a0a]">{d.title}</span>
                  <span className="h-3 w-3 bg-[#0a0a0a]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <main id="top">
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="inline-block -rotate-2 bg-[#f5f5f5] px-3 py-1 font-display text-xs font-black uppercase tracking-widest text-[#0a0a0a]">
            {CLUB.slogan}
          </p>
          <h1 className="mt-6 font-display text-5xl font-black uppercase leading-[0.95] tracking-tighter md:text-8xl">
            ММА и ударные техники{" "}
            <span className="text-[#ff6b2e]">в Нижнем Новгороде</span>
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <p className="max-w-xl text-lg text-[#f5f5f5]/70">
              Клуб смешанных боевых единоборств «ФАЙТБОКСИНГ». Лицензированные тренеры с педагогическим образованием, группы для детей с 7 лет и взрослых.
            </p>
            <div className="flex flex-wrap gap-5">
              <button type="button" onClick={() => openSignup()} className={hardBtn}>
                Записаться на пробное
              </button>
              <a href={CLUB.vk} target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-[#f5f5f5] px-8 py-4 font-display text-sm font-black uppercase tracking-widest text-[#f5f5f5] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]">
                ВКонтакте
              </a>
            </div>
          </div>
          <div className="relative mt-12 h-80 border-2 border-[#f5f5f5] shadow-[10px_10px_0_#ff6b2e] md:h-[28rem]">
            <Image src="/images/hero.jpg" alt="Спарринг в зале клуба ФАЙТБОКСИНГ" fill priority sizes="100vw" className="object-cover" />
          </div>
        </section>

        <section className="border-y-4 border-[#ff6b2e]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.value} className={`px-6 py-10 ${i > 0 ? "border-l-2 border-[#f5f5f5]/20" : ""}`}>
                <p className="font-display text-5xl font-black text-[#ff6b2e] md:text-6xl">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-[#f5f5f5]/60">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="directions" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="font-display text-4xl font-black uppercase tracking-tighter md:text-6xl">Направления</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {DIRECTIONS.map((d, i) => (
              <article key={d.title} className="border-2 border-[#f5f5f5] p-7 transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_#ff6b2e]">
                <p className="font-display text-xs font-black text-[#ff6b2e]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-2xl font-black uppercase">{d.title}</h3>
                <p className="mt-3 text-sm text-[#f5f5f5]/60">{d.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="schedule" className="border-y-4 border-[#ff6b2e] bg-[#111]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <h2 className="font-display text-4xl font-black uppercase tracking-tighter md:text-6xl">Расписание</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {SCHEDULE_TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`border-2 px-6 py-3 font-display text-xs font-black uppercase tracking-widest transition-colors ${
                    tab === t.id ? "border-[#ff6b2e] bg-[#ff6b2e] text-[#0a0a0a]" : "border-[#f5f5f5] text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {SCHEDULE[tab].map((g) => (
                <article key={g.group} className="border-2 border-[#f5f5f5] p-7">
                  <h3 className="font-display text-xl font-black uppercase">{g.group}</h3>
                  <ul className="mt-4 space-y-3">
                    {g.slots.map((s) => (
                      <li key={s.days} className="flex justify-between border-b-2 border-[#f5f5f5]/15 pb-3 text-sm">
                        <span className="font-bold">{s.days}</span>
                        <span className="font-display font-black text-[#ff6b2e]">{s.time}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="font-display text-4xl font-black uppercase tracking-tighter md:text-6xl">Абонементы</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRICING.map((p) => (
              <article key={p.title} className={`relative flex flex-col border-2 bg-[#0a0a0a] p-7 ${p.featured ? "border-[#ff6b2e] shadow-[8px_8px_0_#ff6b2e]" : "border-[#f5f5f5]"}`}>
                {p.featured && (
                  <span className="absolute -top-4 left-6 rotate-[-3deg] bg-[#ff6b2e] px-3 py-1 font-display text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">
                    Оптимальный
                  </span>
                )}
                <h3 className="font-display text-lg font-black uppercase">{p.title}</h3>
                <p className="mt-4 font-display text-4xl font-black text-[#ff6b2e]">
                  {p.price}
                  {p.price !== "по запросу" && <span className="text-lg text-[#f5f5f5]/60"> ₽</span>}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#f5f5f5]/60">{p.period}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm text-[#f5f5f5]/70">+ {f}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => openSignup(p.title === "Пробное" ? undefined : `Абонемент «${p.title}»`)}
                  className={`mt-7 w-full border-2 py-3 font-display text-xs font-black uppercase tracking-widest transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${
                    p.featured ? "border-[#ff6b2e] bg-[#ff6b2e] text-[#0a0a0a] shadow-[4px_4px_0_#f5f5f5]" : "border-[#f5f5f5] text-[#f5f5f5] shadow-[4px_4px_0_#ff6b2e]"
                  }`}
                >
                  Записаться
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-y-4 border-[#ff6b2e]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <h2 className="font-display text-4xl font-black uppercase tracking-tighter md:text-6xl">О клубе</h2>
            <p className="mt-6 max-w-3xl text-lg text-[#f5f5f5]/70">
              «ФАЙТБОКСИНГ» (КЕФ) — официальная спортивная организация, развивающая любительские и профессиональные виды единоборств. Клуб входит в состав Федерации СБЕ ММА Нижегородской области.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PREP.map((p, i) => (
                <article key={p.title} className="border-2 border-[#f5f5f5] p-7">
                  <p className="font-display text-xs font-black text-[#ff6b2e]">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-lg font-black uppercase">{p.title} подготовка</h3>
                  <p className="mt-3 text-sm text-[#f5f5f5]/60">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trainer" className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative h-96 border-2 border-[#f5f5f5] shadow-[10px_10px_0_#ff6b2e]">
            <Image src="/images/trainer.jpg" alt="Старший тренер Жалилов Рамиль Рафаильевич" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover object-top" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-black uppercase tracking-tighter md:text-5xl">{TRAINER.name}</h2>
            <p className="mt-3 inline-block bg-[#ff6b2e] px-2 py-1 text-xs font-black uppercase tracking-widest text-[#0a0a0a]">{TRAINER.role}</p>
            <ul className="mt-7 space-y-3">
              {TRAINER.facts.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-[#f5f5f5]/70">
                  <span aria-hidden className="mt-1 h-3 w-3 shrink-0 bg-[#ff6b2e]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t-4 border-[#ff6b2e] bg-[#ff6b2e]">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:py-20 lg:flex-row lg:items-center">
            <h2 className="max-w-3xl font-display text-4xl font-black uppercase leading-none tracking-tighter text-[#0a0a0a] md:text-6xl">
              Готов начать? Запишись на пробное
            </h2>
            <button type="button" onClick={() => openSignup()} className="border-2 border-[#0a0a0a] bg-[#0a0a0a] px-8 py-4 font-display text-sm font-black uppercase tracking-widest text-[#ff6b2e] shadow-[6px_6px_0_#f5f5f5] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              Записаться
            </button>
          </div>
        </section>
      </main>

      <footer id="contacts" className="border-t-4 border-[#ff6b2e]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-black uppercase tracking-tighter">ФАЙТ<span className="text-[#ff6b2e]">БОКСИНГ</span></p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#f5f5f5]/60">{CLUB.tagline} · {CLUB.city}</p>
            <p className="mt-3 text-sm font-black text-[#ff6b2e]">{CLUB.slogan}</p>
          </div>
          <div className="space-y-2 text-sm text-[#f5f5f5]/70">
            <a href={`https://yandex.ru/maps/?text=${encodeURIComponent(CLUB.address)}`} target="_blank" rel="noopener noreferrer" className="block underline underline-offset-4 hover:text-[#ff6b2e]">{CLUB.address}</a>
            <a href={CLUB.phoneHref} className="block font-bold text-[#f5f5f5] hover:text-[#ff6b2e]">{CLUB.phone}</a>
            <p>Открываемся в {CLUB.opensAt}</p>
          </div>
          <div className="text-sm">
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href} className="text-[#f5f5f5]/70 hover:text-[#ff6b2e]">{n.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <VariantNav />
    </div>
  );
}
