import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import fromages from "@/data/produits/fromages";

const categories = [
  {
    name: "Fromages",
    href: "/fromages",
    subtitle: "Collection",
    description:
      "Des chèvres délicats aux pâtes molles onctueuses, chaque pièce est affinée avec patience pour révéler des saveurs d'exception.",
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
    description:
      "Crèmes, beurres et délices laitiers issus de fermes artisanales, où la fraîcheur se conjugue au savoir-faire.",
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
    description:
      "Condiments rares, vins choisis et accompagnements raffinés pour sublimer chaque dégustation.",
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

const services = [
  {
    title: "Plateaux sur mesure",
    description:
      "Des compositions raffinées pour vos événements, réceptions et moments de partage. Chaque plateau est pensé comme une dégustation unique.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="24" cy="32" rx="20" ry="6" />
        <path d="M4 32 C4 28 14 16 24 16 S44 28 44 32" />
        <line x1="24" y1="10" x2="24" y2="16" />
        <circle cx="24" cy="8" r="2" />
      </svg>
    ),
  },
  {
    title: "Livraison à domicile",
    description:
      "Recevez nos fromages frais et produits artisanaux directement chez vous, dans le respect de la chaîne du froid.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="14" width="28" height="18" rx="2" />
        <path d="M30 20 h10 l6 8 v4 h-16 v-12z" />
        <circle cx="12" cy="36" r="4" />
        <circle cx="38" cy="36" r="4" />
      </svg>
    ),
  },
  {
    title: "Conseils d\u2019experts",
    description:
      "Notre équipe de passionnés vous guide dans vos choix, accords fromages-vins et découvertes gustatives.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="24" cy="16" r="8" />
        <path d="M8 44 c0-8 7.2-14 16-14 s16 6 16 14" />
        <path d="M30 14 l4-4 m-4 0 l4 4" opacity="0.5" />
      </svg>
    ),
  },
];

const featuredProducts = fromages.slice(0, 4);

const testimonials = [
  {
    text: "Des fromages d'une qualité exceptionnelle et un accueil chaleureux. Les plateaux pour notre mariage étaient magnifiques, tous nos invités ont adoré !",
    author: "Sophie M.",
    context: "Plateau mariage",
  },
  {
    text: "Enfin une vraie fromagerie artisanale à Pontault-Combault ! Le choix est remarquable et les conseils toujours pertinents. On y revient chaque semaine.",
    author: "Laurent D.",
    context: "Client fidèle",
  },
  {
    text: "La livraison était impeccable, les fromages parfaitement emballés et à température. Le Comté 18 mois est un pur délice. Je recommande les yeux fermés.",
    author: "Marie-Claire B.",
    context: "Livraison",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — keeps its own load animations, no scroll-reveal needed */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light opacity-80" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            <div className="max-w-2xl lg:flex-1">
              <h1 className="animate-fade-up font-serif text-5xl font-light tracking-[0.05em] text-cream sm:text-6xl lg:text-7xl">
                L&apos;Héritage
              </h1>

              <p className="animate-fade-up delay-100 mt-4 text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/70 leading-none">
                Fromagerie Artisanale &mdash; Pontault-Combault
              </p>

              <div className="animate-reveal-line delay-200 mt-1 gold-separator" />

              <p className="animate-fade-up delay-300 mt-8 text-base font-light leading-8 text-cream/60 max-w-lg">
                Explorez notre sélection de fromages, crèmerie et épicerie fine,
                soigneusement choisis pour ravir les palais les plus exigeants.
              </p>

              <div className="animate-fade-up delay-400 mt-10 flex flex-wrap gap-4 sm:gap-6">
                <Link href="/fromages" className="btn-luxury btn-luxury-filled">
                  Découvrir nos fromages
                </Link>
                <Link href="/contact" className="btn-luxury btn-luxury-outline">
                  Nous rendre visite
                </Link>
              </div>
            </div>

            <div className="animate-fade-up delay-500 hidden lg:block lg:flex-1">
              <div className="relative hero-image-frame group">
                <div
                  className="absolute -top-4 -right-4 bottom-8 left-8 border border-accent/25 z-0 hero-frame-reveal transition-all duration-700 ease-out group-hover:-top-3 group-hover:-right-3 group-hover:bottom-9 group-hover:left-9"
                />
                <div className="absolute top-1/2 -left-12 w-12 h-px bg-gradient-to-r from-transparent to-accent/40 hero-line-extend" />
                <div className="relative z-10 overflow-hidden hero-image-reveal">
                  <Image
                    src="/images/vitrine_02.png"
                    alt="Devanture de la boutique L'Héritage"
                    width={600}
                    height={700}
                    className="relative object-cover w-full h-[420px] hero-image-zoom"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-primary/20" />
                  <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(26,40,61,0.35)]" />
                </div>
                <div className="absolute -bottom-8 right-0 z-20 hero-caption-reveal">
                  <div className="flex items-center gap-3">
                    <span className="block w-8 h-px bg-accent/40" />
                    <span className="font-serif italic text-sm text-accent/60 tracking-wide">
                      Notre boutique
                    </span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 z-20 hero-diamond-reveal">
                  <div className="w-[6px] h-[6px] rotate-45 bg-accent/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="text-center">
          <Reveal>
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
              Nos collections
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Produits d&apos;exception
            </h2>
          </Reveal>
          <Reveal variant="line" delay={200} className="mx-auto mt-6 gold-separator" style={{ margin: "1.5rem auto" }} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.name} delay={i * 150} className="h-full">
              <Link
                href={category.href}
                className="luxury-card group p-10 block h-full"
              >
                <div className="text-accent/50 group-hover:text-accent transition-colors">
                  {category.icon}
                </div>
                <p className="mt-4 text-[0.6rem] font-light tracking-[0.3em] uppercase text-accent/60">
                  {category.subtitle}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-light tracking-[0.03em] text-primary group-hover:text-accent-dark transition-colors">
                  {category.name}
                </h3>
                <p className="mt-4 text-sm font-light leading-7 text-foreground/60">
                  {category.description}
                </p>
                <span className="mt-6 inline-block text-[0.65rem] font-light tracking-[0.2em] uppercase text-accent group-hover:tracking-[0.3em] transition-all">
                  Explorer &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About / Savoir-faire */}
      <section className="relative bg-cream">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                  Notre maison
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                  Un savoir-faire transmis de génération en génération
                </h2>
              </Reveal>
              <Reveal variant="line" delay={200} className="mt-6 gold-separator" />
              <Reveal delay={300}>
                <p className="mt-8 text-base font-light leading-8 text-foreground/70">
                  L&apos;Héritage célèbre l&apos;art de la fromagerie avec un
                  artisanat et un savoir-faire transmis de génération en génération.
                  Notre sélection de fromages artisanaux est élaborée avec passion
                  par des maîtres fromagers qui respectent les traditions tout en
                  explorant de nouvelles saveurs.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <p className="mt-6 text-base font-light leading-8 text-foreground/70">
                  Des pâtes molles délicates et crémeuses aux fromages plus robustes,
                  chaque pièce est choisie pour son caractère unique et sa qualité
                  exceptionnelle.
                </p>
              </Reveal>
              <Reveal delay={500}>
                <Link
                  href="/a-propos"
                  className="mt-10 btn-luxury btn-luxury-outline"
                >
                  Notre histoire
                </Link>
              </Reveal>
            </div>

            <Reveal variant="fade" delay={200}>
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src="/images/vitrine_01.png"
                    alt="Devanture de la boutique L'Héritage"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-center">
                    <p className="font-serif text-5xl font-light text-white/40 lg:text-6xl">
                      &ldquo;
                    </p>
                    <p className="mt-2 font-serif text-lg font-light italic text-white/90 leading-relaxed lg:text-xl">
                      L&apos;excellence du fromage, c&apos;est le respect du
                      temps, du terroir et du geste.
                    </p>
                    <div className="mx-auto mt-4 w-12 h-px bg-white/30" />
                    <p className="mt-4 text-[0.65rem] font-light tracking-[0.3em] uppercase text-white/60">
                      L&apos;Héritage
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="text-center">
          <Reveal>
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
              Sélection
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Nos fromages vedettes
            </h2>
          </Reveal>
          <Reveal variant="line" delay={200} className="mx-auto mt-6 gold-separator" style={{ margin: "1.5rem auto" }} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.slug} delay={i * 120} className="h-full">
              <ProductCard product={product} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-12 text-center">
            <Link href="/fromages" className="btn-luxury btn-luxury-outline">
              Voir tous nos fromages
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/70">
                À votre service
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-cream lg:text-5xl">
                Nos services
              </h2>
            </Reveal>
            <Reveal variant="line" delay={200} className="mx-auto mt-6 gold-separator" style={{ margin: "1.5rem auto" }} />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-3 bg-accent/10">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 150}>
                <div className="group relative bg-primary p-10 lg:p-12 h-full transition-colors duration-700 hover:bg-primary-light/30">
                  {/* Number — top right */}
                  <span className="absolute top-8 right-8 font-serif text-3xl font-light text-accent/10 group-hover:text-accent/25 transition-colors duration-700">
                    0{i + 1}
                  </span>

                  <div className="text-accent/40 group-hover:text-accent transition-colors duration-500">
                    {service.icon}
                  </div>

                  <div className="mt-4 w-8 h-px bg-accent/20 group-hover:w-12 group-hover:bg-accent/50 transition-all duration-700" />

                  <h3 className="mt-6 font-serif text-xl font-light tracking-[0.02em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm font-light leading-7 text-cream/40 group-hover:text-cream/60 transition-colors duration-700">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="text-center">
          <Reveal>
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
              Témoignages
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Ce que disent nos clients
            </h2>
          </Reveal>
          <Reveal variant="line" delay={200} className="mx-auto mt-6 gold-separator" style={{ margin: "1.5rem auto" }} />

          <Reveal delay={300}>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-primary">5/5</span>
              <span className="text-sm font-light text-foreground/60">sur 67 avis Google</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.author} delay={i * 150} className="h-full">
              <div className="luxury-card p-10 h-full">
                <p className="font-serif text-4xl font-light text-accent/20">&ldquo;</p>
                <p className="mt-2 text-sm font-light leading-7 text-foreground/70 italic">
                  {testimonial.text}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gold-line" />
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-[0.6rem] font-light tracking-[0.15em] uppercase text-accent/60">
                      {testimonial.context}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visit / CTA */}
      <section className="relative bg-cream">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Reveal>
                <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                  Rendez-nous visite
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                  Venez nous rencontrer
                </h2>
              </Reveal>
              <Reveal variant="line" delay={200} className="mt-6 gold-separator" />
              <Reveal delay={300}>
                <p className="mt-8 text-base font-light leading-8 text-foreground/70">
                  Poussez la porte de notre fromagerie au c&oelig;ur de
                  Pontault-Combault et laissez-vous guider par nos fromagers
                  passionnés. Dégustations, conseils personnalisés et découvertes
                  gustatives vous attendent.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
                  <Link href="/contact" className="btn-luxury btn-luxury-filled">
                    Nous contacter
                  </Link>
                  <a
                    href="https://maps.google.com/?q=32+Avenue+Charles+Rouxel+77340+Pontault-Combault"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury btn-luxury-outline"
                  >
                    Itinéraire
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="space-y-8">
              <Reveal delay={100}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1 text-accent/50">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-foreground/40">
                      Adresse
                    </h4>
                    <p className="mt-2 text-sm font-light leading-7 text-foreground/70">
                      32 Avenue Charles Rouxel<br />
                      77340 Pontault-Combault
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1 text-accent/50">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-foreground/40">
                      Horaires
                    </h4>
                    <div className="mt-2 space-y-1 text-sm font-light text-foreground/70">
                      <p>Lundi : <span className="text-accent">Fermé</span></p>
                      <p>Mardi &ndash; Samedi : 9h30 &ndash; 20h00</p>
                      <p>Dimanche : 9h00 &ndash; 13h00</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1 text-accent/50">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <circle cx="12" cy="4" r="2" />
                      <path d="M12 6v6m-4 2l4-2 4 2m-8 0l-2 6m10-6l2 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-foreground/40">
                      Accessibilité
                    </h4>
                    <p className="mt-2 text-sm font-light text-foreground/70">
                      Accès PMR &bull; Parking &bull; Carte bancaire acceptée
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
