"use client";

export const CtaBanner = () => {
  const handleSignup = () => {
    if ((window as any).openSignupModal) {
      (window as any).openSignupModal();
    }
  };

  return (
    <section className="border-y border-bone/10 bg-moss">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-16 md:px-6 md:py-20 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-2xl font-display text-2xl font-black uppercase leading-tight md:text-4xl">
          Готов начать?{" "}
          <span className="text-flame">Запишись на пробное занятие</span>
        </h2>
        <button
          type="button"
          onClick={handleSignup}
          className="clip-cut-sm inline-flex items-center justify-center gap-2 bg-flame px-7 py-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-bone hover:shadow-[0_8px_30px_rgba(255,107,46,0.35)]"
        >
          Записаться на пробное
        </button>
      </div>
    </section>
  );
};
