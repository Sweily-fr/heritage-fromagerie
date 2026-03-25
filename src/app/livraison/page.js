import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Livraison à domicile",
  description:
    "Recevez nos fromages artisanaux, produits de crèmerie et épicerie fine directement chez vous à Pontault-Combault et alentours. Livraison dans le respect de la chaîne du froid.",
};

const zones = [
  {
    name: "Zone 1",
    label: "Pontault-Combault",
    distance: "0 – 5 km",
    delay: "Jour même ou J+1",
    price: "Offerte dès 40 €",
    details: "Pontault-Combault, Roissy-en-Brie, Ozoir-la-Ferrière",
  },
  {
    name: "Zone 2",
    label: "Alentours proches",
    distance: "5 – 15 km",
    delay: "Sous 24 – 48h",
    price: "5,90 €  ·  Offerte dès 80 €",
    details:
      "Brie-Comte-Robert, Lésigny, Noisiel, Torcy, Sucy-en-Brie, Lognes…",
  },
  {
    name: "Zone 3",
    label: "Île-de-France",
    distance: "15 – 30 km",
    delay: "Sous 48h",
    price: "9,90 €  ·  Offerte dès 120 €",
    details: "Paris, Créteil, Melun, Meaux et communes environnantes",
  },
];

const guarantees = [
  {
    title: "Chaîne du froid",
    description:
      "Vos fromages voyagent dans des emballages isothermes avec packs réfrigérants pour garantir une fraîcheur optimale à l'arrivée.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 4 v40 M24 4 l-6 10 M24 4 l6 10 M24 44 l-6-10 M24 44 l6-10" />
        <path d="M7.2 14 l33.6 20 M7.2 14 l10 6 M7.2 14 l4-6" />
        <path d="M40.8 34 l-10-6 M40.8 34 l-4 6" />
        <path d="M7.2 34 l33.6-20 M7.2 34 l4 6 M7.2 34 l10-6" />
        <path d="M40.8 14 l-4-6 M40.8 14 l-10 6" />
      </svg>
    ),
  },
  {
    title: "Produits frais",
    description:
      "Votre commande est préparée le jour même de la livraison. Nos fromagers sélectionnent chaque pièce à maturité parfaite.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 10 v14 l8 8" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Emballage soigné",
    description:
      "Chaque produit est emballé individuellement dans du papier fromager professionnel pour préserver ses arômes.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M6 16 l18-10 18 10 v20 l-18 10 -18-10 Z" />
        <path d="M6 16 l18 10 18-10" />
        <path d="M24 26 v20" />
      </svg>
    ),
  },
  {
    title: "Satisfaction garantie",
    description:
      "Si un produit ne vous satisfait pas, nous nous engageons à le remplacer ou à vous rembourser sans condition.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 4 l5 10 h11 l-9 7 3 11 -10-7 -10 7 3-11 -9-7 h11 Z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Commandez",
    description:
      "Appelez-nous, passez en boutique ou contactez-nous en ligne pour passer votre commande.",
  },
  {
    number: "02",
    title: "Préparation",
    description:
      "Nos fromagers préparent votre commande avec soin le jour de la livraison.",
  },
  {
    number: "03",
    title: "Livraison",
    description:
      "Votre commande est livrée à l'adresse de votre choix, dans le respect de la chaîne du froid.",
  },
];

const faqs = [
  {
    question: "Quels sont les jours de livraison ?",
    answer:
      "Nous livrons du mardi au samedi. Les commandes passées avant 16h sont livrées le lendemain (zone 1) ou sous 48h (zones 2 et 3).",
  },
  {
    question: "Puis-je choisir un créneau horaire ?",
    answer:
      "Oui, vous pouvez choisir un créneau de livraison le matin (9h-12h) ou l'après-midi (14h-18h).",
  },
  {
    question: "Que se passe-t-il si je suis absent ?",
    answer:
      "Nos livreurs vous contactent avant la livraison. En cas d'absence, nous pouvons déposer votre commande chez un voisin ou reprogrammer la livraison.",
  },
  {
    question: "Y a-t-il un minimum de commande ?",
    answer:
      "Il n'y a pas de minimum de commande. Cependant, la livraison est offerte à partir de 40 € en zone 1, 80 € en zone 2 et 120 € en zone 3.",
  },
  {
    question: "Livrez-vous les plateaux de fromages ?",
    answer:
      "Absolument ! Nos plateaux de fromages sont livrés prêts à déguster, dans des emballages spéciaux qui préservent la présentation et la fraîcheur.",
  },
];

export default function Livraison() {
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
              Service
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.03em] text-cream sm:text-5xl lg:text-6xl animate-fade-up delay-100">
              Livraison à domicile
            </h1>
            <div className="animate-reveal-line delay-200 mt-1 gold-separator" />
            <p className="animate-fade-up delay-300 mt-8 text-base font-light leading-8 text-cream/60 max-w-xl">
              Recevez nos fromages frais et produits artisanaux directement chez
              vous, dans le respect de la chaîne du froid. Nous livrons à
              Pontault-Combault et dans toute l&apos;Île-de-France.
            </p>
            <div className="animate-fade-up delay-400 mt-10 flex flex-wrap gap-4 sm:gap-6">
              <Link href="/contact" className="btn-luxury btn-luxury-filled">
                Commander une livraison
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

      {/* Zones de livraison */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="text-center">
          <Reveal>
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
              Tarifs & zones
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Zones de livraison
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
              Nous livrons dans un rayon de 30 km autour de notre boutique.
              Plus vous êtes proche, plus vite vous dégustez.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {zones.map((zone, i) => (
            <Reveal key={zone.name} delay={i * 150} className="h-full">
              <div className="luxury-card p-10 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <p className="text-[0.6rem] font-light tracking-[0.3em] uppercase text-accent/60">
                    {zone.name}
                  </p>
                  <span className="text-[0.6rem] font-light tracking-[0.2em] uppercase text-foreground/40">
                    {zone.distance}
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-light tracking-[0.03em] text-primary">
                  {zone.label}
                </h3>
                <div className="mt-4 w-8 h-px bg-accent/30" />

                <p className="mt-4 text-sm font-light leading-7 text-foreground/50">
                  {zone.details}
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-2 text-sm font-light text-foreground/70">
                    <svg
                      className="w-4 h-4 text-accent/50 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {zone.delay}
                  </div>
                  <div className="mt-3 pt-4 border-t border-gold-line">
                    <p className="font-serif text-lg font-light text-primary">
                      {zone.price}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comment commander */}
      <section className="relative bg-cream">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                Simple & rapide
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                Comment commander
              </h2>
            </Reveal>
            <Reveal
              variant="line"
              delay={200}
              className="mx-auto mt-6 gold-separator"
              style={{ margin: "1.5rem auto" }}
            />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 150}>
                <div className="relative text-center">
                  <span className="font-serif text-6xl font-light text-accent/15">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-light tracking-[0.02em] text-primary">
                    {step.title}
                  </h3>
                  <div className="mx-auto mt-3 w-8 h-px bg-accent/30" />
                  <p className="mt-4 text-sm font-light leading-7 text-foreground/60">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-6 text-accent/20">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nos garanties */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/70">
                Qualité & confiance
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-cream lg:text-5xl">
                Nos engagements
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
            {guarantees.map((item, i) => (
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

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="text-center">
          <Reveal>
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
              Questions fréquentes
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
              Tout savoir sur la livraison
            </h2>
          </Reveal>
          <Reveal
            variant="line"
            delay={200}
            className="mx-auto mt-6 gold-separator"
            style={{ margin: "1.5rem auto" }}
          />
        </div>

        <div className="mt-16 max-w-3xl mx-auto space-y-0 divide-y divide-gold-line">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="py-8">
                <h3 className="font-serif text-lg font-light tracking-[0.02em] text-primary">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm font-light leading-7 text-foreground/60">
                  {faq.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-cream">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                Prêt à vous régaler ?
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
                Faites-vous livrer
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
                Passez commande dès maintenant et recevez nos fromages
                artisanaux et produits d&apos;exception directement chez vous.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link href="/contact" className="btn-luxury btn-luxury-filled">
                  Commander maintenant
                </Link>
                <Link
                  href="/plateaux-de-fromages"
                  className="btn-luxury btn-luxury-outline"
                >
                  Découvrir nos plateaux
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
