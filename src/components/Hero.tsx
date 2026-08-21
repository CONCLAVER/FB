"use client";

import Image from "next/image";
import { CLUB } from "../data/club";
import { ClipButton } from "./ClipButton";
import { useSignup } from "./SignupModal";

export const Hero = () => {
  const openSignup = useSignup();

  return (
    <section id="top" className="relative overflow-hidden pt-16 md:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_10%,rgba(109,116,72,0.25),transparent)]"
      />
      <div
        aria-hidden
        className="text-outline pointer-events-none absolute -right-8 top-24 hidden font-display text-[11rem] font-black uppercase leading-none select-none xl:block"
      >
        MMA
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-flame">
            {CLUB.slogan} · {CLUB.city}
          </p>
          <h1 className="font-display text-3xl font-black uppercase leading-[1.05] md:text-5xl">
            ММА и ударные техники{" "}
            <span className="text-flame">в Нижнем Новгороде</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-khaki md:text-lg">
            Клуб смешанных боевых единоборств «ФАЙТБОКСИНГ». Лицензированные
            тренеры с педагогическим образованием, группы для детей с 7 лет и
            взрослых.
          </p>
          <div className="mt-8">
            <ClipButton onClick={openSignup}>Записаться на пробное</ClipButton>
          </div>
        </div>

        <div className="clip-cut group relative aspect-video overflow-hidden md:h-96">
          <Image
            src="/images/hero.jpg"
            alt="Спарринг в зале клуба ФАЙТБОКСИНГ"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};
