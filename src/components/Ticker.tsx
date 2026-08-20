import { DIRECTIONS } from "@/data/club";

const Row = () => (
  <div className="flex shrink-0 items-center">
    {DIRECTIONS.map((d) => (
      <span
        key={d.title}
        className="flex items-center gap-6 pr-6 md:gap-10 md:pr-10"
      >
        <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-khaki md:text-base">
          {d.title}
        </span>
        <span aria-hidden className="h-2 w-2 rotate-45 bg-flame" />
      </span>
    ))}
  </div>
);

export const Ticker = () => (
  <div aria-hidden className="overflow-hidden border-y border-bone/10 bg-moss py-4">
    <div className="animate-marquee flex w-max">
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  </div>
);
