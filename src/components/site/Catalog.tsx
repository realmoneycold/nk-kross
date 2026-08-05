import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { COPY, type Lang } from "@/lib/copy";
import { BRANDS, CONTACT, PRODUCTS, formatPrice } from "@/lib/products";

export function Catalog({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const [brand, setBrand] = useState<string>("all");

  const items = useMemo(
    () => (brand === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.brand === brand)),
    [brand],
  );

  return (
    <section id="catalog" className="border-b border-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">{t.catalogKicker}</p>
            <h2 className="mt-3 text-[clamp(2.2rem,6vw,4rem)] leading-none uppercase">{t.catalogTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.catalogText}</p>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-2">
          <FilterChip active={brand === "all"} onClick={() => setBrand("all")}>
            {t.all}
          </FilterChip>
          {BRANDS.map((b) => (
            <FilterChip key={b} active={brand === b} onClick={() => setBrand(b)}>
              {b}
            </FilterChip>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
          {items.map((p) => (
            <li key={p.slug} className="group">
              <div className="relative overflow-hidden bg-card">
                <img
                  src={p.image}
                  alt={`${p.name} — ${t.sizes} ${p.sizes}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {p.tag && (
                  <span
                    className={`absolute left-0 top-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${
                      p.tag === "hit" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {p.tag === "hit" ? "HIT" : "NEW"}
                  </span>
                )}
              </div>

              <div className="mt-3.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{p.brand}</p>
                <h3 className="mt-1 text-lg leading-tight uppercase">{p.name}</h3>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {t.sizes}: {p.sizes}
                </p>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="font-display text-xl text-primary">
                    {formatPrice(p.price)} <span className="text-[11px] tracking-wider text-muted-foreground">{t.sum}</span>
                  </span>
                  <a
                    href={CONTACT.telegramAdmin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Send className="size-3" />
                    {t.buy}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
