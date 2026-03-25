import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire de L'Héritage, fromagerie artisanale à Pontault-Combault. Une passion familiale pour les fromages d'exception, la crèmerie fermière et l'épicerie fine.",
};

const values = [
  {
    title: "Authenticité",
    description:
      "Nous sélectionnons des fromages et produits artisanaux fabriqués selon des méthodes traditionnelles, loin de l'industrialisation.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 4 L28 16 H40 L30 24 L34 36 L24 28 L14 36 L18 24 L8 16 H20 Z" />
      </svg>
    ),
  },
  {
    title: "Savoir-faire",
    description:
      "Chaque fromage que nous proposons est le fruit d'un savoir-faire transmis de génération en génération par des maîtres fromagers passionnés.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="24" cy="16" r="8" />
        <path d="M8 44 c0-8 7.2-14 16-14 s16 6 16 14" />
        <path d="M30 14 l4-4 m-4 0 l4 4" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Proximité",
    description:
      "Nous privilégions les circuits courts et les producteurs locaux. Nous connaissons personnellement chacun de nos fournisseurs.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 4 C16 4 8 12 8 20 c0 10 16 24 16 24 s16-14 16-24 C40 12 32 4 24 4Z" />
        <circle cx="24" cy="20" r="6" />
      </svg>
    ),
  },
  {
    title: "Exigence",
    description:
      "Chaque produit est goûté et approuvé avant d'intégrer nos vitrines. Nous ne faisons aucun compromis sur la qualité.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="24" cy="24" r="18" />
        <path d="M15 24 l6 6 12-12" />
      </svg>
    ),
  },
];

const milestones = [
  {
    year: "2024",
    title: "L'ouverture",
    description:
      "L'Héritage ouvre ses portes au 32 avenue Charles Rouxel à Pontault-Combault. Un rêve qui devient réalité après des mois de préparation.",
  },
  {
    year: "2024",
    title: "Premiers plateaux",
    description:
      "Lancement du service de plateaux sur mesure. Le bouche-à-oreille fonctionne et les commandes pour les mariages et événements affluent.",
  },
  {
    year: "2025",
    title: "La livraison",
    description:
      "Mise en place de la livraison à domicile en Île-de-France pour apporter nos produits artisanaux directement chez nos clients.",
  },
  {
    year: "2025",
    title: "Et demain…",
    description:
      "De nouveaux projets se dessinent : dégustations privées, ateliers fromagers et collaborations avec des producteurs d'exception.",
  },
];

export default function APropos() {
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
              Notre maison
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.03em] text-cream sm:text-5xl lg:text-6xl animate-fade-up delay-100">
              L&apos;Héritage
            </h1>
            <div className="animate-reveal-line delay-200 mt-1 gold-separator" />
            <p className="animate-fade-up delay-300 mt-8 text-base font-light leading-8 text-cream/60 max-w-xl">
              Une fromagerie artisanale née d&apos;une passion familiale pour
              les produits d&apos;exception. À Pontault-Combault, nous
              perpétuons l&apos;art de bien manger en sélectionnant le meilleur
              du terroir français.
            </p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                Notre histoire
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                Une passion devenue réalité
              </h2>
            </Reveal>
            <Reveal variant="line" delay={200} className="mt-6 gold-separator" />
            <Reveal delay={300}>
              <p className="mt-8 text-base font-light leading-8 text-foreground/70">
                L&apos;Héritage est née d&apos;un constat simple&nbsp;: à
                Pontault-Combault et ses alentours, il manquait un lieu dédié
                aux vrais amateurs de fromages. Un endroit où chaque pièce est
                choisie avec soin, où le conseil est sincère et où la qualité
                n&apos;est jamais négociée.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-6 text-base font-light leading-8 text-foreground/70">
                Portée par une passion transmise en famille pour les produits du
                terroir, notre fromagerie a ouvert ses portes en 2024 avec une
                ambition claire&nbsp;: proposer une sélection artisanale
                d&apos;exception, des fromages affinés aux produits de crèmerie
                fermière, en passant par une épicerie fine soigneusement
                composée.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <p className="mt-6 text-base font-light leading-8 text-foreground/70">
                Aujourd&apos;hui, L&apos;Héritage est devenu un rendez-vous
                incontournable pour les gourmets de la région. Chaque semaine,
                nous accueillons des clients fidèles et de nouveaux curieux,
                unis par le même amour du bon fromage.
              </p>
            </Reveal>
          </div>

          <Reveal variant="fade" delay={200}>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/devanture_boutique.png"
                  alt="La boutique L'Héritage à Pontault-Combault"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
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
              <div className="absolute -top-4 -right-4 bottom-8 left-8 border border-accent/20 -z-10" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/70">
                Ce qui nous anime
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-cream lg:text-5xl">
                Nos valeurs
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
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 120}>
                <div className="group relative bg-primary p-10 lg:p-8 h-full transition-colors duration-700 hover:bg-primary-light/30">
                  <div className="text-accent/40 group-hover:text-accent transition-colors duration-500">
                    {value.icon}
                  </div>
                  <div className="mt-4 w-8 h-px bg-accent/20 group-hover:w-12 group-hover:bg-accent/50 transition-all duration-700" />
                  <h3 className="mt-6 font-serif text-lg font-light tracking-[0.02em] text-white">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-7 text-cream/40 group-hover:text-cream/60 transition-colors duration-700">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notre parcours — timeline */}
      <section className="relative bg-cream">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                Notre parcours
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                Les étapes clés
              </h2>
            </Reveal>
            <Reveal
              variant="line"
              delay={200}
              className="mx-auto mt-6 gold-separator"
              style={{ margin: "1.5rem auto" }}
            />
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="relative flex gap-8 pb-12 last:pb-0">
                  {/* Vertical line */}
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-accent/20" />
                  )}

                  {/* Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center bg-cream">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <p className="text-[0.6rem] font-light tracking-[0.3em] uppercase text-accent/60">
                      {milestone.year}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-light tracking-[0.02em] text-primary">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-7 text-foreground/60">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="fade" delay={100}>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/decoration_boutique.png"
                  alt="Intérieur de la fromagerie L'Héritage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 top-8 right-8 border border-accent/20 -z-10" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                Notre engagement
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                Plus qu&apos;une fromagerie, une expérience
              </h2>
            </Reveal>
            <Reveal variant="line" delay={200} className="mt-6 gold-separator" />
            <Reveal delay={300}>
              <p className="mt-8 text-base font-light leading-8 text-foreground/70">
                Chez L&apos;Héritage, nous croyons que le fromage est bien plus
                qu&apos;un aliment&nbsp;: c&apos;est un art de vivre. Chaque
                visite dans notre boutique est une invitation à la découverte,
                au partage et au plaisir.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-6 text-base font-light leading-8 text-foreground/70">
                Nous nous engageons à vous offrir un accueil chaleureux, des
                conseils sincères et des produits dont nous sommes fiers. Parce
                que derrière chaque fromage, il y a un producteur, un terroir et
                une histoire que nous avons à c&oelig;ur de vous transmettre.
              </p>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { number: "67", label: "Avis 5 étoiles" },
                  { number: "20+", label: "Producteurs partenaires" },
                  { number: "3", label: "Collections" },
                  { number: "30km", label: "Zone de livraison" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl font-light text-accent">
                      {stat.number}
                    </p>
                    <p className="mt-1 text-xs font-light tracking-[0.15em] uppercase text-foreground/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="relative bg-cream">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                Ils parlent de nous
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                Ce que disent nos clients
              </h2>
            </Reveal>
            <Reveal
              variant="line"
              delay={200}
              className="mx-auto mt-6 gold-separator"
              style={{ margin: "1.5rem auto" }}
            />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
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
            ].map((testimonial, i) => (
              <Reveal key={testimonial.author} delay={i * 150} className="h-full">
                <div className="luxury-card p-10 h-full">
                  <p className="font-serif text-4xl font-light text-accent/20">
                    &ldquo;
                  </p>
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
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
              Rencontrons-nous
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Poussez la porte de L&apos;Héritage
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
              Venez découvrir notre boutique au 32 avenue Charles Rouxel à
              Pontault-Combault. Notre équipe vous accueille du mardi au
              dimanche pour vous faire partager sa passion.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
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
      </section>
    </>
  );
}
