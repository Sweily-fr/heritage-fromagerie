import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { fromages, cremerie, epicerieFine } from "@/data/produits";

export const metadata = {
  title: "Nos Produits",
  description:
    "Découvrez notre sélection de fromages artisanaux, produits de crèmerie fermière et épicerie fine. Des produits d'exception choisis avec passion par nos fromagers.",
};

const categories = [
  {
    name: "Fromages",
    href: "/fromages",
    subtitle: "Collection",
    count: fromages.length,
    description:
      "Des chèvres délicats aux pâtes molles onctueuses, chaque pièce est affinée avec patience pour révéler des saveurs d'exception.",
    products: fromages.slice(0, 4),
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 48 L32 12 L56 48 Z" strokeLinejoin="round" />
        <circle cx="22" cy="38" r="3" />
        <circle cx="36" cy="34" r="2.5" />
        <circle cx="30" cy="42" r="2" />
        <circle cx="42" cy="40" r="3.5" />
      </svg>
    ),
  },
  {
    name: "Crèmerie",
    href: "/cremerie",
    subtitle: "Sélection",
    count: cremerie.length,
    description:
      "Crèmes, beurres et délices laitiers issus de fermes artisanales, où la fraîcheur se conjugue au savoir-faire.",
    products: cremerie.slice(0, 4),
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="32" cy="20" rx="20" ry="8" />
        <path d="M12 20 v20 c0 4.4 8.95 8 20 8 s20-3.6 20-8 V20" />
        <ellipse cx="32" cy="32" rx="20" ry="8" strokeDasharray="4 3" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Épicerie fine",
    href: "/epicerie-fine",
    subtitle: "Maison",
    count: epicerieFine.length,
    description:
      "Condiments rares, vins choisis et accompagnements raffinés pour sublimer chaque dégustation.",
    products: epicerieFine.slice(0, 4),
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 8 h16 v12 l4 4 v28 c0 2-2 4-4 4 H24 c-2 0-4-2-4-4 V24 l4-4 V8z" />
        <path d="M24 8 h16" strokeLinecap="round" />
        <path d="M20 32 h24" opacity="0.4" />
        <circle cx="32" cy="42" r="5" opacity="0.4" />
      </svg>
    ),
  },
];

const totalProducts = fromages.length + cremerie.length + epicerieFine.length;

export default function Produits() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light opacity-80" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/70 animate-fade-up">
              {totalProducts} références
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.03em] text-cream sm:text-5xl lg:text-6xl animate-fade-up delay-100">
              Nos produits
            </h1>
            <div className="animate-reveal-line delay-200 mt-1 gold-separator" />
            <p className="animate-fade-up delay-300 mt-8 text-base font-light leading-8 text-cream/60 max-w-xl">
              Fromages affinés avec soin, produits laitiers fermiers et
              accompagnements d&apos;exception&nbsp;: explorez notre sélection
              artisanale, choisie avec passion par nos fromagers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories overview */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="text-center">
          <Reveal>
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
              Nos univers
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Trois collections, une exigence
            </h2>
          </Reveal>
          <Reveal
            variant="line"
            delay={200}
            className="mx-auto mt-6 gold-separator"
            style={{ margin: "1.5rem auto" }}
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.name} delay={i * 150} className="h-full">
              <Link
                href={category.href}
                className="luxury-card group p-10 block h-full"
              >
                <div className="flex items-center justify-between">
                  <div className="text-accent/50 group-hover:text-accent transition-colors">
                    {category.icon}
                  </div>
                  <span className="font-serif text-3xl font-light text-accent/15 group-hover:text-accent/30 transition-colors">
                    {String(category.count).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-[0.6rem] font-light tracking-[0.3em] uppercase text-accent/60">
                  {category.subtitle}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-light tracking-[0.03em] text-primary group-hover:text-accent-dark transition-colors">
                  {category.name}
                </h3>
                <div className="mt-4 w-8 h-px bg-accent/30 group-hover:w-12 group-hover:bg-accent/50 transition-all duration-700" />
                <p className="mt-4 text-sm font-light leading-7 text-foreground/60">
                  {category.description}
                </p>
                <span className="mt-6 inline-block text-[0.65rem] font-light tracking-[0.2em] uppercase text-accent group-hover:tracking-[0.3em] transition-all">
                  Explorer la collection &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fromages — section */}
      {categories.map((category, catIndex) => (
        <section
          key={category.name}
          className={
            catIndex % 2 === 0
              ? "relative bg-cream"
              : "mx-auto max-w-7xl px-6 lg:px-8"
          }
        >
          {catIndex % 2 === 0 && (
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />
          )}

          <div
            className={
              catIndex % 2 === 0
                ? "mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32"
                : "py-20 lg:py-32"
            }
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <Reveal>
                  <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                    {category.subtitle}
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="mt-4 font-serif text-3xl font-light tracking-[0.02em] text-primary lg:text-4xl">
                    {category.name}
                  </h2>
                </Reveal>
                <Reveal variant="line" delay={200} className="mt-4 gold-separator" />
              </div>
              <Reveal delay={200}>
                <Link
                  href={category.href}
                  className="btn-luxury btn-luxury-outline"
                >
                  Voir tout
                </Link>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {category.products.map((product, i) => (
                <Reveal key={product.slug} delay={i * 100} className="h-full">
                  <ProductCard product={product} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Nos engagements */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/70">
                Notre promesse
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-cream lg:text-5xl">
                L&apos;exigence au quotidien
              </h2>
            </Reveal>
            <Reveal
              variant="line"
              delay={200}
              className="mx-auto mt-6 gold-separator"
              style={{ margin: "1.5rem auto" }}
            />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4 bg-accent/10">
            {[
              {
                title: "Sélection rigoureuse",
                description:
                  "Chaque produit est goûté et approuvé par nos fromagers avant d'intégrer notre sélection.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="24" cy="24" r="18" />
                    <path d="M15 24 l6 6 12-12" />
                  </svg>
                ),
              },
              {
                title: "Producteurs locaux",
                description:
                  "Nous privilégions les circuits courts et les producteurs artisanaux que nous visitons régulièrement.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M24 4 C16 4 4 14 4 24 c0 12 10 20 20 20 s20-8 20-20 C44 14 32 4 24 4Z" />
                    <path d="M4 24 h40" opacity="0.3" />
                    <path d="M24 4 c-6 6-8 12-8 20 s2 14 8 20" />
                    <path d="M24 4 c6 6 8 12 8 20 s-2 14-8 20" />
                  </svg>
                ),
              },
              {
                title: "Fraîcheur garantie",
                description:
                  "Nos vitrines sont renouvelées quotidiennement pour vous offrir des produits d'une fraîcheur irréprochable.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M24 4 v20 M24 24 l-8 14 M24 24 l8 14" />
                    <circle cx="24" cy="4" r="2" />
                    <circle cx="16" cy="38" r="2" />
                    <circle cx="32" cy="38" r="2" />
                    <path d="M10 44 h28" />
                  </svg>
                ),
              },
              {
                title: "Conseils personnalisés",
                description:
                  "Notre équipe vous guide dans vos choix pour composer le plateau ou le repas parfait.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="24" cy="16" r="8" />
                    <path d="M8 44 c0-8 7.2-14 16-14 s16 6 16 14" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="group relative bg-primary p-10 lg:p-8 h-full transition-colors duration-700 hover:bg-primary-light/30">
                  <div className="text-accent/40 group-hover:text-accent transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div className="mt-4 w-8 h-px bg-accent/20 group-hover:w-12 group-hover:bg-accent/50 transition-all duration-700" />
                  <h3 className="mt-6 font-serif text-lg font-light tracking-[0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-7 text-cream/40 group-hover:text-cream/60 transition-colors duration-700">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
              Envie de goûter ?
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Rendez-nous visite en boutique
            </h2>
          </Reveal>
          <Reveal
            variant="line"
            delay={200}
            className="mx-auto mt-6 gold-separator"
            style={{ margin: "1.5rem auto" }}
          />
          <Reveal delay={300}>
            <p className="mt-8 text-base font-light leading-8 text-foreground/60">
              Notre sélection évolue au fil des saisons et des arrivages.
              Passez en boutique pour découvrir nos nouveautés et profiter des
              conseils de nos fromagers.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/contact" className="btn-luxury btn-luxury-filled">
                Nous rendre visite
              </Link>
              <Link
                href="/livraison"
                className="btn-luxury btn-luxury-outline"
              >
                Se faire livrer
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
