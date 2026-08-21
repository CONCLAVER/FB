"use client";

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { CLUB } from "../data/club";

export const SignupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (window as any).openSignupModal = () => setIsOpen(true);
    (window as any).closeSignupModal = () => setIsOpen(false);

    return () => {
      delete (window as any).openSignupModal;
      delete (window as any).closeSignupModal;
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink/90 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full max-w-md bg-moss border border-bone/15 p-8 md:p-10">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Закрыть"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border border-bone/15 bg-ink text-flame transition-colors hover:bg-flame hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-flame">
          {CLUB.name}
        </p>
        <h2 className="mt-3 font-display text-xl font-black uppercase leading-tight md:text-2xl">
          {CLUB.slogan}
        </h2>
        <p className="mt-4 text-sm text-khaki">
          Для записи позвоните по номеру телефона:
        </p>
        <div className="mt-6">
          <a
            href={CLUB.phoneHref}
            className="clip-cut-sm inline-flex items-center justify-center gap-2 bg-flame px-7 py-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-bone hover:shadow-[0_8px_30px_rgba(255,107,46,0.35)]"
          >
            <Phone className="h-4 w-4" />
            {CLUB.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
