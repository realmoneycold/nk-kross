import onitsuka from "@/assets/products/onitsuka-mexico-66.jpg.asset.json";
import onitsukaPatou from "@/assets/products/onitsuka-patou.jpg.asset.json";
import jordanLow from "@/assets/products/jordan-1-low.jpg.asset.json";
import jordanParis from "@/assets/products/jordan-1-paris.jpg.asset.json";
import sbDunk from "@/assets/products/nike-sb-dunk.jpg.asset.json";
import af1Nocta from "@/assets/products/air-force-1-nocta.jpg.asset.json";
import pegasus from "@/assets/products/nike-pegasus.jpg.asset.json";
import nikeAir from "@/assets/products/nike-air-max.jpg.asset.json";
import journeyRun from "@/assets/products/nike-journey-run.jpg.asset.json";
import samba from "@/assets/products/adidas-samba.jpg.asset.json";
import superstar from "@/assets/products/adidas-superstar.jpg.asset.json";
import hyperBoost from "@/assets/products/adidas-hyper-boost.jpg.asset.json";
import puma from "@/assets/products/puma-suede.jpg.asset.json";
import onCloud from "@/assets/products/on-cloud.jpg.asset.json";
import onBoom from "@/assets/products/oncloud-boom.jpg.asset.json";
import asics from "@/assets/products/asics-kahana.jpg.asset.json";
import vans from "@/assets/products/vans-knu.jpg.asset.json";
import crocs from "@/assets/products/crocs.jpg.asset.json";
import margiela from "@/assets/products/margiela-replica.jpg.asset.json";
import goldenGoose from "@/assets/products/golden-goose.jpg.asset.json";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  price: number;
  sizes: string;
  image: string;
  tag?: "hit" | "new";
};

export const PRODUCTS: Product[] = [
  { slug: "onitsuka-mexico-66", name: "Onitsuka Tiger Mexico 66", brand: "Onitsuka Tiger", price: 435000, sizes: "40–45", image: onitsuka.url, tag: "hit" },
  { slug: "onitsuka-patou", name: "Onitsuka Tiger Mexico 66 × Patou", brand: "Onitsuka Tiger", price: 435000, sizes: "36–40", image: onitsukaPatou.url, tag: "new" },
  { slug: "jordan-1-low", name: "Nike Air Jordan 1 Low", brand: "Nike", price: 335000, sizes: "36–45", image: jordanLow.url, tag: "hit" },
  { slug: "jordan-1-paris", name: "Nike Air Jordan 1 Paris", brand: "Nike", price: 395000, sizes: "40–45", image: jordanParis.url },
  { slug: "nike-sb-dunk", name: "Nike SB Dunk", brand: "Nike", price: 335000, sizes: "36–44", image: sbDunk.url, tag: "hit" },
  { slug: "air-force-1-nocta", name: "Nike Air Force 1 × NOCTA", brand: "Nike", price: 395000, sizes: "40–45", image: af1Nocta.url },
  { slug: "nike-pegasus", name: "Nike Pegasus 41", brand: "Nike", price: 305000, sizes: "36–45", image: pegasus.url },
  { slug: "nike-air", name: "Nike Air", brand: "Nike", price: 305000, sizes: "36–40", image: nikeAir.url },
  { slug: "nike-journey-run", name: "Nike Journey Run", brand: "Nike", price: 455000, sizes: "41–45", image: journeyRun.url },
  { slug: "adidas-samba", name: "Adidas Samba", brand: "Adidas", price: 345000, sizes: "40–45", image: samba.url, tag: "hit" },
  { slug: "adidas-superstar", name: "Adidas Superstar", brand: "Adidas", price: 355000, sizes: "40–45", image: superstar.url },
  { slug: "adidas-hyper-boost", name: "Adidas Hyper Boost Edge", brand: "Adidas", price: 505000, sizes: "40–45", image: hyperBoost.url, tag: "new" },
  { slug: "puma-suede", name: "Puma Suede Classic", brand: "Puma", price: 355000, sizes: "36–40", image: puma.url },
  { slug: "on-cloud", name: "On Cloud", brand: "On", price: 455000, sizes: "40–45", image: onCloud.url },
  { slug: "oncloud-boom", name: "On Cloud Boom Strike", brand: "On", price: 455000, sizes: "41–45", image: onBoom.url, tag: "new" },
  { slug: "asics-kahana", name: "Asics Kahana 8", brand: "Asics", price: 455000, sizes: "40–45", image: asics.url },
  { slug: "vans-knu", name: "Vans Knu Skool", brand: "Vans", price: 355000, sizes: "36–44", image: vans.url },
  { slug: "crocs", name: "Crocs", brand: "Crocs", price: 200000, sizes: "39–46", image: crocs.url },
  { slug: "margiela-replica", name: "Maison Margiela Replica", brand: "Maison Margiela", price: 465000, sizes: "40–45", image: margiela.url },
  { slug: "golden-goose", name: "Golden Goose", brand: "Golden Goose", price: 415000, sizes: "37–40", image: goldenGoose.url },
];

export const BRANDS = Array.from(new Set(PRODUCTS.map((p) => p.brand)));

export const CONTACT = {
  phone: "+998 91 163-00-34",
  phoneHref: "tel:+998911630034",
  telegramAdmin: "https://t.me/ntkross_admin",
  telegramChannel: "https://t.me/nt_kross_uzb",
  instagram: "https://www.instagram.com/nt.kross/",
  instagramHandle: "@nt.kross",
};

export function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value);
}

export const HERO_IMAGE = onitsuka.url;
