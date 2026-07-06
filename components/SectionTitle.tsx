type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  as?: "h1" | "h2";
};

export function SectionTitle({ eyebrow, title, subtitle, center = false, as = "h2" }: SectionTitleProps) {
  const Heading = as;

  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">{eyebrow}</p> : null}
      <Heading className="mt-2 text-3xl font-black leading-tight tracking-wide text-brand-dark md:text-5xl">
        {title}
      </Heading>
      {subtitle ? <p className="mt-4 text-base font-medium leading-8 text-slate-600 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
