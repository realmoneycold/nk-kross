import { useState } from "react";
import { Menu, X, Send } from "lucide-react";
import { COPY, type Lang } from "@/lib/copy";
import { CONTACT } from "@/lib/products";

export function SiteHeader({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = COPY[lang];
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#catalog", label: t.navCatalog },
    { href: "#how", label: t.navHow },
    { href: "#contact", label: t.navContact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 sm:px-8">
        <a href="#top" className="font-display text-2xl leading-none tracking-wide">
          NT<span className="text-primary">KROSS</span>
        </a>

        <nav className="ml-auto hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <div className="flex items-center rounded-full border border-border p-0.5">
            {(["ru", "uz"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href={CONTACT.telegramAdmin}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <Send className="size-3.5" />
            {t.order}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="text-foreground md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
