import type { ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
};

export const ClipButton = ({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  external,
  className = "",
}: Props) => {
  const classes = [
    "clip-cut-sm inline-flex items-center justify-center gap-2 font-display font-bold uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame",
    size === "md"
      ? "px-7 py-4 text-xs tracking-[0.2em]"
      : "px-5 py-2.5 text-[11px] tracking-[0.18em]",
    variant === "primary"
      ? "bg-flame text-ink hover:bg-bone hover:shadow-[0_8px_30px_rgba(255,107,46,0.35)]"
      : "bg-moss text-bone hover:text-flame",
    className,
  ].join(" ");

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
