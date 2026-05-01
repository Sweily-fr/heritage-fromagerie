import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Nos Services",
  description:
    "Découvrez les services de L'Héritage : plateaux de fromages sur mesure, livraison à domicile, dégustations, conseils d'experts et événements privés à Pontault-Combault.",
};

const services = [
  {
    title: "Plateaux sur mesure",
    href: "/plateaux-de-fromages",
    description:
      "Des compositions raffinées pour vos événements, réceptions et moments de partage. Chaque plateau est pensé comme une dégustation unique, composé avec soin par nos fromagers passionnés.",
    details: [
      "Plateaux de 4 à 200+ convives",
      "Compositions personnalisables",
      "Accompagnements gourmands inclus",
      "Idéal mariages, entreprises & fêtes",
    ],
    cta: "Découvrir nos plateaux",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="24" cy="32" rx="20" ry="6" />
        <path d="M4 32 C4 28 14 16 24 16 S44 28 44 32" />
        <line x1="24" y1="10" x2="24" y2="16" />
        <circle cx="24" cy="8" r="2" />
      </svg>
    ),
  },
  {
    title: "Livraison à domicile",
    href: "/livraison",
    description:
      "Recevez nos fromages frais et produits artisanaux directement chez vous, dans le respect de la chaîne du froid. Nous livrons à Pontault-Combault et dans toute l'Île-de-France.",
    details: [
      "Livraison en Île-de-France",
      "Chaîne du froid garantie",
      "Offerte dès 40 € (zone 1)",
      "Livraison jour même possible",
    ],
    cta: "En savoir plus",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="14" width="28" height="18" rx="2" />
        <path d="M30 20 h10 l6 8 v4 h-16 v-12z" />
        <circle cx="12" cy="36" r="4" />
        <circle cx="38" cy="36" r="4" />
      </svg>
    ),
  },
  {
    title: "Dégustations privées",
    href: "/contact",
    description:
      "Vivez une expérience sensorielle unique au cœur de notre boutique. Nos fromagers vous guident à travers une sélection de fromages d'exception, accompagnés de vins soigneusement choisis.",
    details: [
      "Séances de 1h à 1h30",
      "De 4 à 15 participants",
      "Accords fromages & vins",
      "Certificat de dégustation",
    ],
    cta: "Réserver une dégustation",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M16 40 h16 M24 28 v12" />
        <path d="M12 6 c0 12 -4 16 -4 22 a16 16 0 0 0 32 0 c0-6 -4-10 -4-22 Z" />
        <path d="M14 20 h20" strokeDasharray="3 2" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Conseils d'experts",
    href: "/contact",
    description:
      "Notre équipe de passionnés vous guide dans vos choix, accords fromages-vins et découvertes gustatives. En boutique ou par téléphone, bénéficiez de recommandations personnalisées.",
    details: [
      "Conseils personnalisés en boutique",
      "Accords mets & fromages",
      "Recommandations par téléphone",
      "Suggestions selon la saison",
    ],
    cta: "Nous contacter",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="24" cy="16" r="8" />
        <path d="M8 44 c0-8 7.2-14 16-14 s16 6 16 14" />
        <path d="M30 14 l4-4 m-4 0 l4 4" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Événements & Traiteur",
    href: "/contact",
    description:
      "Pour vos cocktails, vernissages, séminaires ou fêtes privées, nous concevons des buffets fromagers complets. Un service traiteur sur mesure qui s'adapte à chaque occasion.",
    details: [
      "Buffets fromagers complets",
      "Service traiteur personnalisé",
      "Personnel de service (en option)",
      "Cocktails, séminaires & fêtes",
    ],
    cta: "Demander un devis",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="20" width="40" height="20" rx="2" />
        <path d="M4 28 h40" opacity="0.3" />
        <path d="M16 20 V14 a8 8 0 0 1 16 0 v6" />
        <circle cx="24" cy="10" r="2" />
      </svg>
    ),
  },
  {
    title: "Coffrets cadeaux",
    href: "/contact",
    description:
      "Offrez le goût de l'excellence. Nos coffrets cadeaux associent fromages affinés, accompagnements et accessoires dans un écrin élégant, parfait pour toutes les occasions.",
    details: [
      "Coffrets prêts à offrir",
      "Compositions personnalisables",
      "Emballage cadeau soigné",
      "Carte message incluse",
    ],
    cta: "Composer un coffret",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="6" y="20" width="36" height="22" rx="2" />
        <path d="M6 20 h36 v-6 H6 Z" />
        <path d="M24 14 v28" />
        <path d="M24 14 C20 14 14 8 14 8 s4-2 6 0 c2 2 4 6 4 6 s2-4 4-6 c2-2 6 0 6 0 S28 14 24 14Z" />
      </svg>
    ),
  },
];

const commitments = [
  {
    value: "100%",
    label: "Artisanal",
    description: "Des produits sélectionnés auprès de producteurs passionnés",
  },
  {
    value: "67",
    label: "Avis 5 étoiles",
    description: "La satisfaction de nos clients est notre plus belle récompense",
  },
  {
    value: "30km",
    label: "De livraison",
    description: "Un service de livraison couvrant toute l'Île-de-France",
  },
  {
    value: "7j/7",
    label: "À votre écoute",
    description: "Notre équipe est disponible pour répondre à vos questions",
  },
];

export default function Services() {
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
              À votre service
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.03em] text-cream sm:text-5xl lg:text-6xl animate-fade-up delay-100">
              Nos services
            </h1>
            <div className="animate-reveal-line delay-200 mt-1 gold-separator" />
            <p className="animate-fade-up delay-300 mt-8 text-base font-light leading-8 text-cream/60 max-w-xl">
              Bien plus qu&apos;une fromagerie, L&apos;Héritage vous accompagne
              dans tous vos moments de dégustation. Plateaux sur mesure,
              livraison, dégustations privées&nbsp;: découvrez nos services
              pensés pour vous.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="text-center">
          <Reveal>
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
              Ce que nous proposons
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Une expérience complète
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
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100} className="h-full">
              <div className="luxury-card group p-10 h-full flex flex-col">
                <div className="text-accent/40 group-hover:text-accent transition-colors duration-500">
                  {service.icon}
                </div>

                <h3 className="mt-5 font-serif text-2xl font-light tracking-[0.03em] text-primary group-hover:text-accent-dark transition-colors">
                  {service.title}
                </h3>
                <div className="mt-4 w-8 h-px bg-accent/30 group-hover:w-12 group-hover:bg-accent/50 transition-all duration-700" />

                <p className="mt-4 text-sm font-light leading-7 text-foreground/60">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2 flex-grow">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm font-light text-foreground/70"
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 text-accent/50 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="mt-8 inline-block text-[0.65rem] font-light tracking-[0.2em] uppercase text-accent group-hover:tracking-[0.3em] transition-all"
                >
                  {service.cta} &rarr;
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {commitments.map((item, i) => (
              <Reveal key={item.label} delay={i * 120}>
                <div className="text-center">
                  <p className="font-serif text-4xl font-light text-accent lg:text-5xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[0.65rem] font-light tracking-[0.3em] uppercase text-cream/80">
                    {item.label}
                  </p>
                  <div className="mx-auto mt-3 w-8 h-px bg-accent/30" />
                  <p className="mt-3 text-xs font-light leading-6 text-cream/40">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approche personnalisée */}
      <section className="relative bg-cream">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                  Notre approche
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                  Un accompagnement sur mesure
                </h2>
              </Reveal>
              <Reveal variant="line" delay={200} className="mt-6 gold-separator" />
              <Reveal delay={300}>
                <p className="mt-8 text-base font-light leading-8 text-foreground/70">
                  Chez L&apos;Héritage, chaque client est unique. Que vous
                  prépariez un dîner intime, un mariage grandiose ou un
                  événement d&apos;entreprise, nous prenons le temps de
                  comprendre vos envies pour créer une expérience fromagère
                  inoubliable.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <p className="mt-6 text-base font-light leading-8 text-foreground/70">
                  Nos fromagers sont à votre écoute pour vous conseiller sur les
                  fromages de saison, les accords mets-vins et les quantités
                  adaptées au nombre de convives. Chaque détail compte pour
                  faire de votre moment un souvenir gustatif mémorable.
                </p>
              </Reveal>
              <Reveal delay={500}>
                <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
                  <Link href="/contact" className="btn-luxury btn-luxury-filled">
                    Nous contacter
                  </Link>
                  <Link href="/a-propos" className="btn-luxury btn-luxury-outline">
                    Notre histoire
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal variant="fade" delay={200}>
              <div className="space-y-6">
                {[
                  {
                    title: "Écoute & conseil",
                    text: "Nous commençons toujours par comprendre vos goûts, votre événement et vos contraintes pour proposer la solution idéale.",
                  },
                  {
                    title: "Qualité artisanale",
                    text: "Chaque produit est sélectionné avec rigueur auprès de producteurs que nous connaissons personnellement.",
                  },
                  {
                    title: "Flexibilité totale",
                    text: "Modification de dernière minute, ajustement des quantités, régime alimentaire spécifique : nous nous adaptons.",
                  },
                ].map((item, i) => (
                  <div key={item.title} className="luxury-card p-8">
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-2xl font-light text-accent/50 flex-shrink-0">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-light tracking-[0.02em] text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm font-light leading-7 text-foreground/60">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
              Parlons de votre projet
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Comment pouvons-nous vous aider ?
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
              Quel que soit votre besoin, notre équipe est à votre disposition.
              Passez nous voir en boutique, appelez-nous ou envoyez-nous un
              message&nbsp;: nous serons ravis de vous accompagner.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/contact" className="btn-luxury btn-luxury-filled">
                Nous contacter
              </Link>
              <a
                href="tel:+33160000000"
                className="btn-luxury btn-luxury-outline"
              >
                01 60 00 00 00
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
