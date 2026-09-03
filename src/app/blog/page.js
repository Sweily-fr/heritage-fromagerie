import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ArticleCard from "@/components/ArticleCard";
import articles, { categories } from "@/data/blog";

export const metadata = {
  title: { absolute: "Le blog du fromager | L'Héritage Pontault-Combault" },
  description:
    "Conseils de fromager, saisons, accords, plateaux et actualités de L'Héritage, votre fromagerie artisanale à Pontault-Combault et dans ses environs (77, 94).",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

const siteUrl = "https://heritage-fromagerie.fr";

export default function Blog() {
  const [featured, ...rest] = articles;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/blog`,
    name: "Le blog de L'Héritage",
    url: `${siteUrl}/blog`,
    publisher: { "@id": `${siteUrl}/#fromagerie` },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${siteUrl}/blog/${a.slug}`,
      datePublished: a.date,
      image: `${siteUrl}${a.cover.src}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light opacity-80" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/70 animate-fade-up">
              Le journal de la fromagerie
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.03em] text-cream sm:text-5xl lg:text-6xl animate-fade-up delay-100">
              Le blog de L&apos;Héritage
            </h1>
            <div className="animate-reveal-line delay-200 mt-1 gold-separator" />
            <p className="animate-fade-up delay-300 mt-8 text-base font-light leading-8 text-cream/60 max-w-xl">
              Conseils de fromager, saisons, accords et nouvelles de la boutique
              de Pontault-Combault. Pour choisir, conserver et déguster vos
              fromages comme il se doit.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-center gap-3 text-[0.65rem] font-light tracking-[0.2em] uppercase text-foreground/40">
          <span>Rubriques :</span>
          {categories.map((c) => (
            <a key={c} href={`#${c.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="border border-gold-line px-3 py-1 hover:border-accent hover:text-accent transition-colors">
              {c}
            </a>
          ))}
        </div>

        {/* À la une */}
        <Reveal variant="fade" className="mt-12">
          <Link href={`/blog/${featured.slug}`} className="luxury-card group grid grid-cols-1 overflow-hidden lg:grid-cols-2">
            <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-cream">
              <ArticleCoverImage article={featured} />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-[0.65rem] font-light tracking-[0.3em] uppercase text-accent">À la une · {featured.category}</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-snug tracking-[0.02em] text-primary lg:text-4xl group-hover:text-accent-dark transition-colors">
                {featured.title}
              </h2>
              <p className="mt-5 text-base font-light leading-8 text-foreground/65">{featured.description}</p>
              <span className="mt-8 inline-block text-[0.65rem] font-light tracking-[0.2em] uppercase text-accent group-hover:tracking-[0.3em] transition-all">
                Lire l&apos;article &rarr;
              </span>
            </div>
          </Link>
        </Reveal>

        {categories.map((category) => {
          const list = rest.filter((a) => a.category === category);
          if (!list.length) return null;
          return (
            <section key={category} id={category.toLowerCase().replace(/[^a-z]+/g, "-")} className="mt-24 scroll-mt-28">
              <Reveal>
                <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">Rubrique</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 font-serif text-3xl font-light tracking-[0.02em] text-primary lg:text-4xl">{category}</h2>
              </Reveal>
              <Reveal variant="line" delay={200} className="gold-separator" />
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((article, i) => (
                  <Reveal key={article.slug} delay={i * 100} className="h-full">
                    <ArticleCard article={article} />
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

function ArticleCoverImage({ article }) {
  return (
    <Image
      src={article.cover.src}
      alt={article.cover.alt}
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
  );
}
