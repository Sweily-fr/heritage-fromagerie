import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import articles, { getArticle, getRelated, formatDate } from "@/data/blog";
import ArticleContent from "@/components/ArticleContent";
import ArticleCard from "@/components/ArticleCard";

const siteUrl = "https://heritage-fromagerie.fr";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `/blog/${slug}`;
  return {
    title: { absolute: `${article.metaTitle || article.title} | L'Héritage` },
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      modifiedTime: article.updated || article.date,
      images: [{ url: article.cover.src, alt: article.cover.alt }],
    },
  };
}

export default async function BlogArticle({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelated(article);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteUrl}/blog/${article.slug}`,
    headline: article.title,
    description: article.description,
    image: `${siteUrl}${article.cover.src}`,
    datePublished: article.date,
    dateModified: article.updated || article.date,
    inLanguage: "fr-FR",
    author: {
      "@type": "Organization",
      name: "L'Héritage - Fromagerie Artisanale",
      url: siteUrl,
    },
    publisher: { "@id": `${siteUrl}/#fromagerie` },
    mainEntityOfPage: `${siteUrl}/blog/${article.slug}`,
    keywords: article.tags?.join(", "),
    ...(article.about && {
      about: article.about.map((name) => ({ "@type": "Place", name })),
    }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: article.title },
    ],
  };

  const faqJsonLd = article.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      {/* En-tête */}
      <header className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light opacity-80" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
          <nav aria-label="Fil d'Ariane" className="animate-fade-up">
            <ol className="flex flex-wrap items-center gap-2 text-[0.65rem] font-light tracking-[0.2em] uppercase text-cream/40">
              <li><Link href="/" className="hover:text-accent transition-colors">Accueil</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li>/</li>
              <li className="text-accent">{article.category}</li>
            </ol>
          </nav>
          <h1 className="mt-8 font-serif text-4xl font-light leading-tight tracking-[0.02em] text-cream sm:text-5xl animate-fade-up delay-100">
            {article.title}
          </h1>
          <div className="animate-reveal-line delay-200 mt-1 gold-separator" />
          <p className="mt-6 text-base font-light leading-8 text-cream/60 animate-fade-up delay-300">
            {article.description}
          </p>
          <p className="mt-6 text-[0.65rem] font-light tracking-[0.2em] uppercase text-cream/40 animate-fade-up delay-400">
            Publié le <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readingTime} min de lecture · Par l&apos;équipe L&apos;Héritage
          </p>
        </div>
      </header>

      {/* Image de couverture */}
      <div className="mx-auto max-w-5xl px-6 lg:px-8 -mt-0 lg:-mt-10 relative z-10">
        <div className="relative aspect-[16/9] overflow-hidden animate-fade-up delay-300">
          <Image src={article.cover.src} alt={article.cover.alt} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
        </div>
      </div>

      {/* Corps */}
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
        <ArticleContent markdown={article.content} />

        {article.faq?.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-3xl font-light tracking-[0.02em] text-primary">Questions fréquentes</h2>
            <div className="mt-8 divide-y divide-gold-line border-y border-gold-line">
              {article.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg font-light text-primary list-none">
                    {f.q}
                    <span className="text-accent transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-base font-light leading-8 text-foreground/70">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <aside className="mt-16 luxury-card p-8 lg:p-10 text-center">
          <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">L&apos;Héritage, Pontault-Combault</p>
          <p className="mt-4 font-serif text-2xl font-light text-primary">32 Avenue Charles Rouxel · 77340 Pontault-Combault</p>
          <p className="mt-3 text-sm font-light leading-7 text-foreground/60">
            Du mardi au samedi de 9h30 à 20h, le dimanche de 9h à 13h. Plateaux sur commande et livraison à domicile en Île-de-France.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/fromages" className="btn-luxury btn-luxury-filled">Découvrir nos fromages</Link>
            <Link href="/contact" className="btn-luxury btn-luxury-outline">Nous contacter</Link>
          </div>
        </aside>

        {article.tags?.length > 0 && (
          <p className="mt-10 flex flex-wrap gap-2 text-[0.65rem] font-light tracking-[0.15em] uppercase text-foreground/40">
            {article.tags.map((t) => (
              <span key={t} className="border border-gold-line px-3 py-1">{t}</span>
            ))}
          </p>
        )}
      </div>

      {/* Articles liés */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">À lire aussi</p>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-[0.02em] text-primary lg:text-4xl">D&apos;autres articles du blog</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
          <div className="mt-12">
            <Link href="/blog" className="btn-luxury btn-luxury-outline">Tous les articles</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
