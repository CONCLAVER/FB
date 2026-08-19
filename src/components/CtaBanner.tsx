"use client";

import { ClipButton } from "./ClipButton";
import { useSignup } from "./SignupModal";

export const CtaBanner = () => {
  const openSignup = useSignup();

  return (
    <section className="border-y border-bone/10 bg-moss">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-16 md:px-6 md:py-20 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-2xl font-display text-2xl font-black uppercase leading-tight md:text-4xl">
          Готов начать?{" "}
          <span className="text-flame">Запишись на пробное занятие</span>
        </h2>
        <ClipButton onClick={openSignup}>Записаться на пробное</ClipButton>
      </div>
    </section>
  );
};
