"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Phone, X } from "lucide-react";
import { CLUB } from "@/data/club";
import { ClipButton } from "./ClipButton";

const SignupContext = createContext<() => void>(() => {});

export const useSignup = () => useContext(SignupContext);

export const SignupModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const openSignup = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <SignupContext.Provider value={openSignup}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Запись на пробное занятие"
        >
          <button
            type="button"
            aria-label="Закрыть окно записи"
            onClick={close}
            className="animate-fade-in absolute inset-0 h-full w-full cursor-default bg-ink/85 backdrop-blur-sm"
          />
          <div className="animate-modal-in clip-cut relative w-full max-w-md bg-moss p-8 md:p-10">
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Закрыть"
              className="absolute right-4 top-4 text-khaki/70 transition-colors hover:text-flame focus-visible:outline-2 focus-visible:outline-flame"
            >
              <X />
            </button>
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-flame">
              {CLUB.name}
            </p>
            <h2 className="mt-3 font-display text-xl font-black uppercase leading-tight md:text-2xl">
              Запись на пробное занятие
            </h2>
            <p className="mt-4 text-sm text-khaki">
              Запись — через связь с администрацией клуба или тренером:
            </p>
            <div className="mt-6">
              <ClipButton href={CLUB.phoneHref}>
                <Phone className="h-4 w-4" />
                {CLUB.phone}
              </ClipButton>
            </div>
          </div>
        </div>
      )}
    </SignupContext.Provider>
  );
};
