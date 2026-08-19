type Props = { kicker: string; title: string };

export const SectionTitle = ({ kicker, title }: Props) => (
  <div className="mb-10 md:mb-14">
    <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-flame">
      {kicker}
    </p>
    <h2 className="font-display text-2xl font-black uppercase leading-tight md:text-4xl">
      {title}
    </h2>
  </div>
);
