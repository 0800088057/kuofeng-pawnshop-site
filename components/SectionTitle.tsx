type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export function SectionTitle({ eyebrow, title, subtitle, center = false }: SectionTitleProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-black leading-tight tracking-wide text-brand-dark md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base font-medium leading-8 text-slate-600 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
