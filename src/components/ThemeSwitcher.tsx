"use client";

import { useEffect, useState } from "react";

export const THEMES = [
  { id: "olive", label: "Олива", swatch: "#6d7448" },
  { id: "steel", label: "Графит", swatch: "#565a63" },
  { id: "navy", label: "Ночь", swatch: "#131a2c" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

const getInitialTheme = (): ThemeId => {
  if (typeof window === "undefined") return "olive";
  const stored = localStorage.getItem("theme");
  return THEMES.some((t) => t.id === stored) ? (stored as ThemeId) : "olive";
};

export const ThemeSwitcher = () => {
  const [active, setActive] = useState<ThemeId>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = active;
    localStorage.setItem("theme", active);
  }, [active]);

  return (
    <div
      className="flex items-center gap-2"
      role="group"
      aria-label="Цветовая схема"
    >
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => setActive(t.id)}
          aria-label={t.label}
          title={t.label}
          className={`h-6 w-6 rounded-full border border-bone/20 transition-all duration-300 hover:scale-110 ${
            active === t.id
              ? "ring-2 ring-bone ring-offset-2 ring-offset-ink"
              : ""
          }`}
          style={{ backgroundColor: t.swatch }}
        />
      ))}
    </div>
  );
};
