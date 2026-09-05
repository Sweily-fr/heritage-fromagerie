import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { business, siteUrl } from "@/data/site";

export const metadata = {
  title: "Événements - Pièce montée de fromages, buffets & réceptions",
  description:
    "Pièce montée de fromages, buffets et plateaux XXL pour vos mariages, anniversaires, baptêmes et événements d'entreprise. Fromagerie L'Héritage, Pontault-Combault (77), livraison en Île-de-France.",
  alternates: {
    canonical: "/evenements",
  },
  openGraph: {
    url: "/evenements",
    images: [{ url: "/images/evenements/piece-montee-01.jpg", alt: "Pièce montée de fromages L'Héritage" }],
  },
};

const gallery = [
  { src: "/images/evenements/piece-montee-02.jpg", alt: "Pièce montée de fromages à quatre étages pour une réception" },
  { src: "/images/evenements/piece-montee-04.jpg", alt: "Détail du sommet : bries, raisin et kiwi" },
  { src: "/images/evenements/piece-montee-06.jpg", alt: "Étage intermédiaire avec camembert, eucalyptus et carte L'Héritage" },
  { src: "/images/evenements/piece-montee-05.jpg", alt: "Pâtes pressées et fruits sur les plateaux inférieurs" },
  { src: "/images/evenements/piece-montee-03.jpg", alt: "Pièce montée de fromages vue de face" },
  { src: "/images/evenements/piece-montee-07.jpg", alt: "Pièce montée de fromages devant le mur en pierre de la boutique" },
];

const formats = [
  {
    name: "La pièce montée",
    persons: "20 à 100 convives",
    description:
      "Notre signature. Une tour de fromages à plusieurs étages, dressée sur présentoir en bois, habillée de fruits frais, fruits secs et feuillage d'eucalyptus. Un centre de table qui remplace le gâteau ou l'accompagne.",
    includes: [
      "3 à 5 étages selon le nombre de convives",
      "12 à 20 fromages, toutes familles représentées",
      "Fruits frais et secs, feuillage, étiquettes",
      "Présentoir prêté, installé sur place",
    ],
    accent: true,
  },
  {
    name: "Le buffet de fromages",
    persons: "30 à 300 convives",
    description:
      "Des pièces entières et des fromages pré-coupés disposés sur planches et présentoirs à plusieurs niveaux, pour un service fluide sur un grand nombre d'invités.",
    includes: [
      "Meules et pièces entières pour le visuel",
      "Fromages coupés pour le service",
      "Pains, beurre de baratte, accompagnements",
      "Couteaux et étiquettes fournis",
    ],
    accent: false,
  },
  {
    name: "Les plateaux XXL",
    persons: "10 à 40 convives",
    description:
      "De grands plateaux composés, livrés prêts à servir. La solution simple pour un cocktail d'entreprise, un anniversaire ou un vin d'honneur.",
    includes: [
      "Plateaux de 10, 20 ou 40 personnes",
      "Sélection adaptée au moment du repas",
      "Accompagnements sucrés et salés",
      "Retrait en boutique ou livraison",
    ],
    accent: false,
  },
];

const occasions = [
  {
    title: "Mariages",
    description:
      "Vin d'honneur, fin de repas ou brunch du lendemain : la pièce montée de fromages est devenue une alternative recherchée à la pièce montée sucrée. Nous coordonnons la livraison avec votre traiteur et votre lieu.",
  },
  {
    title: "Anniversaires & fêtes de famille",
    description:
      "Quarante ans, baptême, communion, retraite : une tour de fromages fait l'effet d'un gâteau et régale tous les âges. Nous adaptons la sélection aux goûts de la famille.",
  },
  {
    title: "Entreprises",
    description:
      "Séminaires, pots de départ, fêtes de fin d'année, inaugurations. Livraison sur site en Seine-et-Marne, Val-de-Marne et Est parisien, facture établie pour chaque commande.",
  },
  {
    title: "Associations & collectivités",
    description:
      "Assemblées générales, remises de prix, marchés de Noël, fêtes de village autour de Pontault-Combault. Des formats généreux à un prix maîtrisé.",
  },
];

const steps = [
  {
    number: "01",
    title: "Un échange",
    description:
      "Par téléphone, en boutique ou via le formulaire : date, lieu, nombre de convives, moment du repas, goûts et budget.",
  },
  {
    number: "02",
    title: "Une proposition",
    description:
      "Nous vous envoyons une sélection et un devis sous 48h. Une dégustation en boutique est proposée pour les mariages.",
  },
  {
    number: "03",
    title: "Le montage",
    description:
      "Le jour J, nos fromagers coupent et dressent la pièce montée en boutique, à partir de fromages sortis de cave à point.",
  },
  {
    number: "04",
    title: "La livraison",
    description:
      "Nous livrons en caisses isothermes et installons la pièce sur votre lieu de réception, à l'heure convenue avec vous.",
  },
];

const faq = [
  {
    q: "Qu'est-ce qu'une pièce montée de fromages ?",
    a: "C'est une tour à plusieurs étages composée de fromages entiers et coupés, dressée sur un présentoir et décorée de fruits et de feuillage. Elle se sert comme un buffet : les invités se servent directement, ou un fromager la découpe pour eux.",
  },
  {
    q: "Pour combien de personnes ?",
    a: "Nos pièces montées vont de 20 à une centaine de convives. Au-delà, nous les complétons par un buffet de fromages sur planches. Comptez 80 à 100 g de fromage par personne en fin de repas, 150 g si le fromage remplace le plat.",
  },
  {
    q: "Quel délai pour commander ?",
    a: "Deux semaines pour un anniversaire ou un événement d'entreprise, trois à quatre semaines pour un mariage, afin de réserver les pièces entières et d'organiser une dégustation.",
  },
  {
    q: "Livrez-vous sur le lieu de réception ?",
    a: "Oui, dans un rayon d'environ 30 km autour de Pontault-Combault : Seine-et-Marne, Val-de-Marne, Est parisien. Nous installons la pièce montée sur place et reprenons le présentoir après l'événement.",
  },
  {
    q: "Combien coûte une pièce montée de fromages ?",
    a: "Le prix dépend du nombre de convives, des fromages choisis et de la livraison. Comptez un ordre de grandeur de 9 à 15 € par personne. Chaque projet fait l'objet d'un devis gratuit.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/evenements#service`,
  name: "Pièces montées et buffets de fromages pour événements",
  serviceType: "Traiteur fromager pour événements",
  description: metadata.description,
  url: `${siteUrl}/evenements`,
  image: `${siteUrl}/images/evenements/piece-montee-01.jpg`,
  provider: { "@id": `${siteUrl}/#fromagerie` },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Seine-et-Marne" },
    { "@type": "AdministrativeArea", name: "Val-de-Marne" },
    { "@type": "City", name: "Pontault-Combault" },
  ],
  offers: { "@type": "Offer", priceCurrency: "EUR", price: "9", priceSpecification: { "@type": "UnitPriceSpecification", price: "9", priceCurrency: "EUR", unitText: "par personne, à partir de" } },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Evenements() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light opacity-80" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="max-w-2xl lg:flex-1">
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/70 animate-fade-up">
                Réceptions & grandes tablées
              </p>
              <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.03em] text-cream sm:text-5xl lg:text-6xl animate-fade-up delay-100">
                Événements
              </h1>
              <div className="animate-reveal-line delay-200 mt-1 gold-separator" />
              <p className="animate-fade-up delay-300 mt-8 text-base font-light leading-8 text-cream/60 max-w-xl">
                Pièce montée de fromages, buffets et plateaux XXL : nous
                habillons vos mariages, anniversaires et réceptions d&apos;entreprise
                d&apos;une pièce qui fait parler, dressée par nos fromagers et
                livrée sur votre lieu de réception.
              </p>
              <div className="animate-fade-up delay-400 mt-10 flex flex-wrap gap-4 sm:gap-6">
                <Link href="/contact" className="btn-luxury btn-luxury-filled">
                  Demander un devis
                </Link>
                <a href={`tel:${business.telephone}`} className="btn-luxury btn-luxury-outline">
                  {business.telephoneDisplay}
                </a>
              </div>
            </div>

            <div className="animate-fade-up delay-500 lg:flex-1">
              <div className="relative hero-image-frame group mx-auto max-w-md">
                <div className="absolute -top-4 -right-4 bottom-8 left-8 border border-accent/25 z-0 hero-frame-reveal transition-all duration-700 ease-out group-hover:-top-3 group-hover:-right-3 group-hover:bottom-9 group-hover:left-9" />
                <div className="relative z-10 aspect-[3/4] overflow-hidden hero-image-reveal">
                  <Image
                    src="/images/evenements/piece-montee-01.jpg"
                    alt="Pièce montée de fromages L'Héritage : bries, chèvres, pâtes pressées, raisin et eucalyptus sur quatre étages"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover hero-image-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-8 right-0 z-20 hero-caption-reveal">
                  <div className="flex items-center gap-3">
                    <span className="block w-8 h-px bg-accent/40" />
                    <span className="font-serif italic text-sm text-accent/60 tracking-wide">
                      Notre pièce montée
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La pièce montée */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="fade" delay={100}>
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/evenements/piece-montee-08.jpg"
                  alt="Pièce montée de fromages dressée dans la boutique L'Héritage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 top-8 right-8 border border-accent/20 -z-10" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                Notre signature
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                La pièce montée de fromages
              </h2>
            </Reveal>
            <Reveal variant="line" delay={200} className="mt-6 gold-separator" />
            <Reveal delay={300}>
              <p className="mt-8 text-base font-light leading-8 text-foreground/70">
                Une tour de trois à cinq étages, dressée sur un présentoir en
                bois. En haut, les pâtes molles coupées en pointes : Brie de
                Meaux, Brillat-Savarin, Camembert. Au centre, les chèvres et
                les fromages de caractère. En bas, les grandes pâtes pressées
                en éventail : Comté, Beaufort, Tomme, Ossau-Iraty. Entre les
                étages, du raisin, du kiwi, des figues, des fruits secs et
                du feuillage d&apos;eucalyptus.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-6 text-base font-light leading-8 text-foreground/70">
                Elle se dresse le jour même à partir de fromages sortis de cave
                à point, et se sert comme un buffet : vos invités se servent,
                ou l&apos;un de nos fromagers découpe et raconte chaque fromage.
                Le présentoir est prêté et repris après l&apos;événement.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <ul className="mt-8 grid grid-cols-2 gap-4 text-sm font-light text-foreground/70">
                {["De 20 à 100 convives", "12 à 20 fromages", "Étiquettes de chaque fromage", "Installée sur place"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-3 h-px w-4 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="relative bg-cream">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">En images</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                Une pièce montée, de près
              </h2>
            </Reveal>
            <Reveal variant="line" delay={200} className="mx-auto mt-6 gold-separator" style={{ margin: "1.5rem auto" }} />
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
            {gallery.map((photo, i) => (
              <Reveal key={photo.src} variant="fade" delay={i * 100}>
                <div className="group relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 transition-colors duration-700 group-hover:bg-transparent" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="text-center">
          <Reveal>
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">Nos formats</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Trois façons de recevoir
            </h2>
          </Reveal>
          <Reveal variant="line" delay={200} className="mx-auto mt-6 gold-separator" style={{ margin: "1.5rem auto" }} />
          <Reveal delay={300}>
            <p className="mt-4 mx-auto max-w-2xl text-base font-light leading-8 text-foreground/60">
              Selon le nombre de convives, le lieu et le moment du repas, nous
              vous orientons vers le format qui servira le mieux vos invités.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {formats.map((format, i) => (
            <Reveal key={format.name} delay={i * 150} className="h-full">
              <div className={`relative luxury-card p-10 h-full flex flex-col ${format.accent ? "border-accent/40 bg-cream/50" : ""}`}>
                {format.accent && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[0.55rem] font-light tracking-[0.3em] uppercase px-4 py-1">
                    Signature
                  </span>
                )}
                <p className="text-[0.6rem] font-light tracking-[0.3em] uppercase text-accent/60">{format.persons}</p>
                <h3 className="mt-3 font-serif text-2xl font-light tracking-[0.03em] text-primary">{format.name}</h3>
                <div className="mt-4 w-8 h-px bg-accent/30" />
                <p className="mt-4 text-sm font-light leading-7 text-foreground/60 flex-grow">{format.description}</p>
                <ul className="mt-6 space-y-2">
                  {format.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-light text-foreground/70">
                      <svg className="w-4 h-4 mt-0.5 text-accent/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gold-line">
                  <p className="font-serif text-xl font-light text-primary">Sur devis</p>
                  <Link href="/contact" className={`mt-4 btn-luxury w-full text-center ${format.accent ? "btn-luxury-filled" : "btn-luxury-outline"}`}>
                    Demander un devis
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-10 text-center text-sm font-light text-foreground/50 italic">
            Pour les tablées de 4 à 25 personnes, voyez nos{" "}
            <Link href="/plateaux-de-fromages" className="text-accent underline decoration-accent/40 underline-offset-4">
              plateaux de fromages
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* Occasions */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/70">Pour chaque moment</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-cream lg:text-5xl">
                Vos événements, de Pontault-Combault à l&apos;Île-de-France
              </h2>
            </Reveal>
            <Reveal variant="line" delay={200} className="mx-auto mt-6 gold-separator" style={{ margin: "1.5rem auto" }} />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4 bg-accent/10">
            {occasions.map((occasion, i) => (
              <Reveal key={occasion.title} delay={i * 120}>
                <div className="group relative bg-primary p-10 lg:p-8 h-full transition-colors duration-700 hover:bg-primary-light/30">
                  <span className="font-serif text-3xl font-light text-accent/30 group-hover:text-accent/50 transition-colors duration-700">0{i + 1}</span>
                  <div className="mt-4 w-8 h-px bg-accent/20 group-hover:w-12 group-hover:bg-accent/50 transition-all duration-700" />
                  <h3 className="mt-6 font-serif text-lg font-light tracking-[0.02em] text-white">{occasion.title}</h3>
                  <p className="mt-4 text-sm font-light leading-7 text-cream/40 group-hover:text-cream/60 transition-colors duration-700">{occasion.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="relative bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">Simplicité</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">Comment ça marche</h2>
            </Reveal>
            <Reveal variant="line" delay={200} className="mx-auto mt-6 gold-separator" style={{ margin: "1.5rem auto" }} />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 120}>
                <div className="relative text-center lg:text-left">
                  <span className="font-serif text-5xl font-light text-accent/15">{step.number}</span>
                  <h3 className="mt-2 font-serif text-lg font-light tracking-[0.02em] text-primary">{step.title}</h3>
                  <div className="mx-auto lg:mx-0 mt-3 w-8 h-px bg-accent/30" />
                  <p className="mt-4 text-sm font-light leading-7 text-foreground/60">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-32">
        <Reveal>
          <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">Questions fréquentes</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">Avant de commander</h2>
        </Reveal>
        <Reveal variant="line" delay={200} className="gold-separator" />
        <div className="mt-10 divide-y divide-gold-line border-y border-gold-line">
          {faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg font-light text-primary list-none">
                {item.q}
                <span className="text-accent transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-base font-light leading-8 text-foreground/70">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-cream">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">Parlons de votre événement</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                Un devis sous 48h
              </h2>
            </Reveal>
            <Reveal variant="line" delay={200} className="mx-auto mt-6 gold-separator" style={{ margin: "1.5rem auto" }} />
            <Reveal delay={300}>
              <p className="mt-8 text-base font-light leading-8 text-foreground/60">
                Dites-nous la date, le lieu et le nombre de convives. Nous
                revenons vers vous avec une proposition de fromages et un prix.
                Les mariés sont invités à une dégustation en boutique.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link href="/contact" className="btn-luxury btn-luxury-filled">Demander un devis</Link>
                <a href={`tel:${business.telephone}`} className="btn-luxury btn-luxury-outline">{business.telephoneDisplay}</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
