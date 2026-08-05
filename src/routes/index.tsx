import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Catalog } from "@/components/site/Catalog";
import { HowToOrder } from "@/components/site/HowToOrder";
import { Contact, SiteFooter } from "@/components/site/Contact";
import type { Lang } from "@/lib/copy";

const title = "NT KROSS — кроссовки в Узбекистане | Nike, Adidas, Onitsuka Tiger";
const description =
  "NT KROSS — магазин кроссовок в Узбекистане. Nike, Adidas, Onitsuka Tiger, On, Asics, Puma. Размеры 36–46, оплата Payme и Click, заказ в Telegram.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [lang, setLang] = useState<Lang>("ru");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Catalog lang={lang} />
        <HowToOrder lang={lang} />
        <Contact lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
