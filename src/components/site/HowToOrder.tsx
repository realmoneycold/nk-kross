import { COPY, type Lang } from "@/lib/copy";

export function HowToOrder({ lang }: { lang: Lang }) {
  const t = COPY[lang];

  return (
    <section id="how" className="border-b border-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">{t.howKicker}</p>
        <h2 className="mt-3 text-[clamp(2.2rem,6vw,4rem)] leading-none uppercase">{t.howTitle}</h2>

        <ol className="mt-10 grid gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s, i) => (
            <li key={s.t} className="bg-background p-6 lg:p-8">
              <span className="font-display text-4xl text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-xl uppercase leading-tight">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border border-border p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">{t.payKicker}</p>
          <p className="font-display text-2xl uppercase">{t.payTitle}</p>
          <p className="ml-auto text-xs text-muted-foreground">{t.noExchange}</p>
        </div>
      </div>
    </section>
  );
}
