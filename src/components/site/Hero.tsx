import { ArrowDownRight, Send } from "lucide-react";
import { COPY, type Lang } from "@/lib/copy";
import { CONTACT, HERO_IMAGE } from "@/lib/products";

export function Hero({ lang }: { lang: Lang }) {
  const t = COPY[lang];

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-14 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:pt-20 lg:pb-24">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">{t.heroKicker}</p>
          <h1 className="mt-5 text-[clamp(2.9rem,9vw,6.5rem)] leading-[0.88] uppercase">
            {t.heroTitle1}
            <br />
            <span className="text-outline">{t.heroTitle2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">{t.heroText}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.heroCta}
              <ArrowDownRight className="size-4" />
            </a>
            <a
              href={CONTACT.telegramAdmin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-secondary"
            >
              <Send className="size-4" />
              {t.heroCta2}
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-7">
            {[
              [t.stat1, t.stat1l],
              [t.stat2, t.stat2l],
              [t.stat3, t.stat3l],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-primary">{v}</dt>
                <dd className="mt-1 text-[11px] uppercase leading-snug tracking-[0.12em] text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 bg-primary/10 blur-3xl" aria-hidden />
          <img
            src={HERO_IMAGE}
            alt="Onitsuka Tiger Mexico 66 sneakers from NT KROSS"
            className="aspect-square w-full object-cover shadow-[var(--shadow-card)]"
            loading="eager"
          />
          <span className="absolute bottom-4 left-4 bg-background/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-foreground">
            {CONTACT.instagramHandle}
          </span>
        </div>
      </div>
    </section>
  );
}
