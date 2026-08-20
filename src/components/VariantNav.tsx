const VARIANTS = [
  { href: "/", label: "V1" },
  { href: "/v2", label: "V2" },
  { href: "/v3", label: "V3" },
];

export const VariantNav = () => (
  <nav
    aria-label="Вариации дизайна"
    className="fixed bottom-4 right-4 z-[80] flex gap-1 border border-bone/20 bg-ink/90 p-1 backdrop-blur"
  >
    {VARIANTS.map((v) => (
      <a
        key={v.href}
        href={v.href}
        className="px-3 py-1 font-display text-xs font-bold text-bone transition-colors hover:bg-flame hover:text-ink"
      >
        {v.label}
      </a>
    ))}
  </nav>
);
