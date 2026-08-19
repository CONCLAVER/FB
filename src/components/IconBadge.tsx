import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export const IconBadge = ({ children, className = "" }: Props) => (
  <span
    className={`clip-cut-sm inline-flex h-9 w-9 shrink-0 items-center justify-center border border-bone/15 bg-ink text-flame ${className}`}
  >
    {children}
  </span>
);
