type Props = { label: string; className?: string };

export const Placeholder = ({ label, className = "" }: Props) => (
  <div
    className={`clip-cut flex items-center justify-center bg-moss ${className}`}
  >
    <span className="font-display text-xs uppercase tracking-[0.25em] text-khaki">
      {label}
    </span>
  </div>
);
