import { Phone, Send, Instagram, Radio } from "lucide-react";
import { COPY, type Lang } from "@/lib/copy";
import { CONTACT } from "@/lib/products";

export function Contact({ lang }: { lang: Lang }) {
  const t = COPY[lang];

  const rows = [
    { icon: Phone, label: t.phone, value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Send, label: t.tgAdmin, value: "@ntkross_admin", href: CONTACT.telegramAdmin },
    { icon: Radio, label: t.tgChannel, value: "@nt_kross_uzb", href: CONTACT.telegramChannel },
    { icon: Instagram, label: t.ig, value: CONTACT.instagramHandle, href: CONTACT.instagram },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">{t.contactKicker}</p>
          <h2 className="mt-3 text-[clamp(2.2rem,6vw,4rem)] leading-none uppercase">{t.contactTitle}</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{t.contactText}</p>
        </div>

        <ul className="grid gap-px bg-border sm:grid-cols-2">
          {rows.map((r) => (
            <li key={r.label}>
              <a
                href={r.href}
                target={r.href.startsWith("tel:") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex h-full flex-col gap-3 bg-background p-6 transition-colors hover:bg-secondary"
              >
                <r.icon className="size-5 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{r.label}</span>
                <span className="text-lg leading-tight">{r.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  return (
    <footer className="border-t border-border py-9">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-5 sm:px-8">
        <span className="font-display text-xl">
          NT<span className="text-primary">KROSS</span>
        </span>
        <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{t.footer}</span>
        <span className="ml-auto text-xs text-muted-foreground">
          © {new Date().getFullYear()} NT KROSS. {t.rights}
        </span>
      </div>
    </footer>
  );
}
