import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Plateaux de Fromages",
  description:
    "Composez votre plateau de fromages sur mesure pour vos événements, réceptions et moments de partage. Plateaux artisanaux livrés à Pontault-Combault et alentours.",
};

const plateaux = [
  {
    name: "L'Essentiel",
    persons: "4 – 6 personnes",
    description:
      "Une sélection de 5 fromages affinés, idéale pour un apéritif entre amis ou un dîner en famille.",
    includes: [
      "5 fromages affinés",
      "Pain artisanal",
      "Fruits secs & confiture",
    ],
    price: "À partir de 35 €",
    accent: false,
  },
  {
    name: "Le Raffiné",
    persons: "8 – 12 personnes",
    description:
      "Notre plateau signature avec 8 fromages d'exception, accompagnements gourmands et décoration soignée.",
    includes: [
      "8 fromages d'exception",
      "Pain & gressins artisanaux",
      "Fruits frais, secs & confitures",
      "Miel & chutney maison",
    ],
    price: "À partir de 65 €",
    accent: true,
  },
  {
    name: "Le Prestige",
    persons: "15 – 25 personnes",
    description:
      "Le summum de la dégustation. Un plateau grandiose pensé pour vos réceptions et événements d'exception.",
    includes: [
      "12 fromages rares & affinés",
      "Assortiment de pains artisanaux",
      "Fruits frais de saison",
      "Charcuterie fine (en option)",
      "Décoration florale",
    ],
    price: "À partir de 120 €",
    accent: false,
  },
];

const occasions = [
  {
    title: "Mariages & Réceptions",
    description:
      "Des plateaux spectaculaires qui subliment vos moments les plus précieux. Nous travaillons avec vous pour créer une expérience fromagère inoubliable.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 4 L28 16 H40 L30 24 L34 36 L24 28 L14 36 L18 24 L8 16 H20 Z" />
      </svg>
    ),
  },
  {
    title: "Événements d'entreprise",
    description:
      "Impressionnez vos collaborateurs et clients avec des plateaux professionnels livrés directement dans vos locaux.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="6" y="14" width="36" height="28" rx="2" />
        <path d="M6 22 h36" />
        <path d="M16 14 V10 a8 8 0 0 1 16 0 v4" />
      </svg>
    ),
  },
  {
    title: "Soirées entre amis",
    description:
      "Un plateau convivial pour partager un moment gourmand. Parfait pour accompagner un bon vin.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="16" cy="16" r="8" />
        <circle cx="32" cy="16" r="8" />
        <circle cx="24" cy="30" r="8" />
      </svg>
    ),
  },
  {
    title: "Fêtes de famille",
    description:
      "Noël, anniversaires, communions… Confiez-nous vos plateaux pour des fêtes réussies.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 4 v40 M14 10 h20 M10 20 h28 M6 30 h36 M2 40 h44" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Contactez-nous",
    description:
      "Appelez-nous ou passez en boutique pour discuter de votre événement et de vos envies.",
  },
  {
    number: "02",
    title: "Composition sur mesure",
    description:
      "Nous élaborons ensemble un plateau adapté à vos goûts, au nombre de convives et à votre budget.",
  },
  {
    number: "03",
    title: "Préparation artisanale",
    description:
      "Nos fromagers préparent votre plateau le jour J avec des produits frais et affinés à point.",
  },
  {
    number: "04",
    title: "Retrait ou livraison",
    description:
      "Récupérez votre plateau en boutique ou faites-vous livrer dans un rayon de 20 km.",
  },
];

export default function PlateauxDeFromages() {
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
              Sur mesure
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.03em] text-cream sm:text-5xl lg:text-6xl animate-fade-up delay-100">
              Plateaux de fromages
            </h1>
            <div className="animate-reveal-line delay-200 mt-1 gold-separator" />
            <p className="animate-fade-up delay-300 mt-8 text-base font-light leading-8 text-cream/60 max-w-xl">
              Des compositions raffinées pour vos événements, réceptions et
              moments de partage. Chaque plateau est pensé comme une dégustation
              unique, composé avec soin par nos fromagers passionnés.
            </p>
            <div className="animate-fade-up delay-400 mt-10 flex flex-wrap gap-4 sm:gap-6">
              <Link href="/contact" className="btn-luxury btn-luxury-filled">
                Commander un plateau
              </Link>
              <a
                href="tel:+33160000000"
                className="btn-luxury btn-luxury-outline"
              >
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Plateaux */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="text-center">
          <Reveal>
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
              Nos formules
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Choisissez votre plateau
            </h2>
          </Reveal>
          <Reveal
            variant="line"
            delay={200}
            className="mx-auto mt-6 gold-separator"
            style={{ margin: "1.5rem auto" }}
          />
          <Reveal delay={300}>
            <p className="mt-4 mx-auto max-w-2xl text-base font-light leading-8 text-foreground/60">
              Trois formules pour répondre à toutes vos envies. Chaque plateau
              est entièrement personnalisable selon vos goûts et préférences.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plateaux.map((plateau, i) => (
            <Reveal key={plateau.name} delay={i * 150} className="h-full">
              <div
                className={`relative luxury-card p-10 h-full flex flex-col ${
                  plateau.accent
                    ? "border-accent/40 bg-cream/50"
                    : ""
                }`}
              >
                {plateau.accent && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[0.55rem] font-light tracking-[0.3em] uppercase px-4 py-1">
                    Populaire
                  </span>
                )}

                <p className="text-[0.6rem] font-light tracking-[0.3em] uppercase text-accent/60">
                  {plateau.persons}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-light tracking-[0.03em] text-primary">
                  {plateau.name}
                </h3>
                <div className="mt-4 w-8 h-px bg-accent/30" />
                <p className="mt-4 text-sm font-light leading-7 text-foreground/60 flex-grow">
                  {plateau.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {plateau.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-light text-foreground/70"
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 text-accent/60 flex-shrink-0"
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
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gold-line">
                  <p className="font-serif text-xl font-light text-primary">
                    {plateau.price}
                  </p>
                  <Link
                    href="/contact"
                    className={`mt-4 btn-luxury w-full text-center ${
                      plateau.accent
                        ? "btn-luxury-filled"
                        : "btn-luxury-outline"
                    }`}
                  >
                    Réserver ce plateau
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-10 text-center text-sm font-light text-foreground/50 italic">
            Tous nos plateaux sont personnalisables. Contactez-nous pour un
            devis adapté à vos besoins.
          </p>
        </Reveal>
      </section>

      {/* Comment ça marche */}
      <section className="relative bg-cream">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                Simplicité
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                Comment ça marche
              </h2>
            </Reveal>
            <Reveal
              variant="line"
              delay={200}
              className="mx-auto mt-6 gold-separator"
              style={{ margin: "1.5rem auto" }}
            />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 120}>
                <div className="relative text-center lg:text-left">
                  <span className="font-serif text-5xl font-light text-accent/15">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-light tracking-[0.02em] text-primary">
                    {step.title}
                  </h3>
                  <div className="mx-auto lg:mx-0 mt-3 w-8 h-px bg-accent/30" />
                  <p className="mt-4 text-sm font-light leading-7 text-foreground/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/70">
                Pour chaque moment
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-cream lg:text-5xl">
                À chaque occasion, son plateau
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
            {occasions.map((occasion, i) => (
              <Reveal key={occasion.title} delay={i * 120}>
                <div className="group relative bg-primary p-10 lg:p-8 h-full transition-colors duration-700 hover:bg-primary-light/30">
                  <div className="text-accent/40 group-hover:text-accent transition-colors duration-500">
                    {occasion.icon}
                  </div>
                  <div className="mt-4 w-8 h-px bg-accent/20 group-hover:w-12 group-hover:bg-accent/50 transition-all duration-700" />
                  <h3 className="mt-6 font-serif text-lg font-light tracking-[0.02em] text-white">
                    {occasion.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-7 text-cream/40 group-hover:text-cream/60 transition-colors duration-700">
                    {occasion.description}
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
              Prêt à commander ?
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Créons votre plateau idéal
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
              Que ce soit pour 4 ou 200 convives, nous composons le plateau
              parfait pour votre événement. Passez en boutique ou
              contactez-nous pour en discuter.
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
