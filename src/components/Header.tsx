"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CLUB, NAV } from "../data/club";
import { ClipButton } from "./ClipButton";
import { useSignup } from "./SignupModal";

const navLink =
  "relative text-sm font-semibold uppercase tracking-wider text-khaki transition-colors hover:text-flame after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-flame after:transition-transform after:duration-300 hover:after:scale-x-100";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const openSignup = useSignup();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="ФАЙТБОКСИНГ — к началу страницы"
        >
          <span className="clip-cut-sm flex h-9 w-9 items-center justify-center bg-flame font-display text-sm font-black text-ink transition-transform duration-300 hover:scale-105">
            ФБ
          </span>
          <span className="leading-none">
            <span className="block font-display text-sm font-black uppercase tracking-widest">
              Fightboxing
            </span>
            <span className="mt-1 hidden text-[10px] uppercase tracking-[0.3em] text-khaki sm:block">
              клуб единоборств · НН
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-5 xl:flex"
          aria-label="Основная навигация"
        >
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={CLUB.phoneHref}
            className="text-sm font-bold tracking-wide transition-colors hover:text-flame"
          >
            {CLUB.phone}
          </a>
          <ClipButton size="sm" onClick={openSignup}>
            Записаться
          </ClipButton>
        </div>

        <button
          type="button"
          className="clip-cut-sm inline-flex h-9 w-9 items-center justify-center border border-bone/15 bg-ink text-flame xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-4 border-t border-bone/10 bg-ink px-4 py-6 xl:hidden"
          aria-label="Мобильная навигация"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-sm font-bold uppercase tracking-widest text-bone transition-colors hover:text-flame"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CLUB.phoneHref}
            className="text-sm font-bold text-khaki transition-colors hover:text-flame"
          >
            {CLUB.phone}
          </a>
          <ClipButton
            size="sm"
            className="self-start"
            onClick={() => {
              setOpen(false);
              openSignup();
            }}
          >
            Записаться
          </ClipButton>
        </nav>
      )}
    </header>
  );
};
