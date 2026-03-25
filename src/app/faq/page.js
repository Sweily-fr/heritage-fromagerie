import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "FAQ",
  description:
    "Vous avez une question ? Retrouvez les réponses aux questions les plus fréquentes sur nos fromages, la livraison, les plateaux et nos services.",
};

const categories = [
  {
    title: "La boutique",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 20 h40 v22 H4 Z" />
        <path d="M4 20 L10 8 h28 l6 12" />
        <path d="M20 42 v-12 h8 v12" />
      </svg>
    ),
    questions: [
      {
        q: "Où se trouve la boutique ?",
        a: "L'Héritage est situé au 32 avenue Charles Rouxel, 77340 Pontault-Combault. Nous disposons d'un parking à proximité et d'un accès PMR.",
      },
      {
        q: "Quels sont vos horaires d'ouverture ?",
        a: "Nous sommes ouverts du mardi au samedi de 9h30 à 20h00 et le dimanche de 9h00 à 13h00. La boutique est fermée le lundi.",
      },
      {
        q: "Acceptez-vous les paiements par carte bancaire ?",
        a: "Oui, nous acceptons les cartes bancaires (Visa, Mastercard), les espèces ainsi que les paiements sans contact.",
      },
      {
        q: "Proposez-vous des dégustations en boutique ?",
        a: "Absolument ! Nos fromagers vous proposent régulièrement de goûter nos nouveautés et nos fromages de saison. N'hésitez pas à demander en boutique.",
      },
    ],
  },
  {
    title: "Nos fromages & produits",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M6 36 L24 8 L42 36 Z" strokeLinejoin="round" />
        <circle cx="18" cy="28" r="2.5" />
        <circle cx="28" cy="26" r="2" />
        <circle cx="24" cy="32" r="1.5" />
      </svg>
    ),
    questions: [
      {
        q: "Comment sont sélectionnés vos fromages ?",
        a: "Chaque fromage est choisi personnellement par nos fromagers auprès de producteurs artisanaux que nous connaissons et visitons régulièrement. Nous privilégions les AOP, les fermiers et les produits au lait cru.",
      },
      {
        q: "Vos produits sont-ils tous artisanaux ?",
        a: "Oui, nous sélectionnons exclusivement des produits artisanaux et fermiers, fabriqués selon des méthodes traditionnelles. Nous ne proposons aucun produit industriel.",
      },
      {
        q: "Comment conserver mes fromages à la maison ?",
        a: "Nous recommandons de conserver vos fromages dans le bac à légumes du réfrigérateur, dans leur papier d'emballage d'origine. Sortez-les 30 minutes à 1 heure avant la dégustation pour qu'ils expriment tous leurs arômes.",
      },
      {
        q: "Proposez-vous des fromages pour les personnes intolérantes au lactose ?",
        a: "Oui ! Les fromages à pâte dure longuement affinés (Comté, Gruyère, Parmesan…) contiennent naturellement très peu de lactose. Nous proposons aussi des fromages de chèvre et de brebis, souvent mieux tolérés. N'hésitez pas à nous demander conseil.",
      },
    ],
  },
  {
    title: "Plateaux de fromages",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="24" cy="32" rx="20" ry="6" />
        <path d="M4 32 C4 28 14 16 24 16 S44 28 44 32" />
        <line x1="24" y1="10" x2="24" y2="16" />
        <circle cx="24" cy="8" r="2" />
      </svg>
    ),
    questions: [
      {
        q: "Comment commander un plateau de fromages ?",
        a: "Vous pouvez commander par téléphone, en boutique ou via notre page de contact. Nous vous recommandons de passer commande au moins 48 heures à l'avance pour les petits plateaux et une semaine pour les événements importants.",
      },
      {
        q: "Peut-on personnaliser la composition du plateau ?",
        a: "Bien sûr ! Nos plateaux sont entièrement personnalisables. Indiquez-nous vos préférences, allergies éventuelles et le nombre de convives, et nous composerons le plateau idéal pour vous.",
      },
      {
        q: "Pour combien de personnes proposez-vous des plateaux ?",
        a: "Nous proposons trois formules : L'Essentiel (4-6 personnes), Le Raffiné (8-12 personnes) et Le Prestige (15-25 personnes). Pour les événements de plus grande envergure, nous élaborons des compositions sur mesure pouvant aller jusqu'à 200+ convives.",
      },
      {
        q: "Les plateaux incluent-ils des accompagnements ?",
        a: "Oui, tous nos plateaux incluent des accompagnements soigneusement sélectionnés : pains artisanaux, fruits secs, confitures et parfois du miel ou des chutneys maison selon la formule choisie.",
      },
    ],
  },
  {
    title: "Livraison",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="14" width="28" height="18" rx="2" />
        <path d="M30 20 h10 l6 8 v4 h-16 v-12z" />
        <circle cx="12" cy="36" r="4" />
        <circle cx="38" cy="36" r="4" />
      </svg>
    ),
    questions: [
      {
        q: "Dans quelles zones livrez-vous ?",
        a: "Nous livrons dans un rayon de 30 km autour de Pontault-Combault, couvrant toute l'Île-de-France : Roissy-en-Brie, Ozoir-la-Ferrière, Brie-Comte-Robert, Noisiel, Paris, Créteil, Melun et bien d'autres communes.",
      },
      {
        q: "Quels sont les frais de livraison ?",
        a: "La livraison est offerte dès 40 € pour Pontault-Combault et alentours (0-5 km). Pour la zone 5-15 km, elle est à 5,90 € et offerte dès 80 €. Pour la zone 15-30 km, elle est à 9,90 € et offerte dès 120 €.",
      },
      {
        q: "Comment la chaîne du froid est-elle respectée ?",
        a: "Vos produits voyagent dans des emballages isothermes avec packs réfrigérants professionnels. La température est contrôlée tout au long de la livraison pour garantir une fraîcheur optimale à l'arrivée.",
      },
      {
        q: "Quels sont les délais de livraison ?",
        a: "Pour la zone 1 (Pontault-Combault) : livraison le jour même ou J+1. Pour la zone 2 (5-15 km) : sous 24 à 48h. Pour la zone 3 (15-30 km) : sous 48h. Les commandes passées avant 16h bénéficient d'un traitement prioritaire.",
      },
      {
        q: "Puis-je choisir un créneau de livraison ?",
        a: "Oui, vous pouvez choisir entre un créneau le matin (9h-12h) ou l'après-midi (14h-18h). En cas d'absence, nous vous contactons pour reprogrammer la livraison.",
      },
    ],
  },
  {
    title: "Événements & services",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="6" y="20" width="36" height="22" rx="2" />
        <path d="M6 20 h36 v-6 H6 Z" />
        <path d="M24 14 v28" />
        <path d="M24 14 C20 14 14 8 14 8 s4-2 6 0 c2 2 4 6 4 6 s2-4 4-6 c2-2 6 0 6 0 S28 14 24 14Z" />
      </svg>
    ),
    questions: [
      {
        q: "Proposez-vous un service traiteur ?",
        a: "Oui, nous proposons des buffets fromagers complets pour vos événements professionnels et privés : cocktails, séminaires, vernissages, fêtes de famille. Nous pouvons également mettre à disposition du personnel de service.",
      },
      {
        q: "Organisez-vous des dégustations privées ?",
        a: "Nous proposons des séances de dégustation de 1h à 1h30 pour 4 à 15 participants, avec accords fromages-vins. Idéal pour un anniversaire, un team building ou simplement un moment entre amis.",
      },
      {
        q: "Proposez-vous des coffrets cadeaux ?",
        a: "Oui ! Nous composons des coffrets cadeaux personnalisés associant fromages affinés, accompagnements gourmands et accessoires dans un emballage soigné. Parfaits pour offrir à un amateur de bons produits.",
      },
    ],
  },
];

export default function FAQ() {
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
              Besoin d&apos;aide ?
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.03em] text-cream sm:text-5xl lg:text-6xl animate-fade-up delay-100">
              Questions fréquentes
            </h1>
            <div className="animate-reveal-line delay-200 mt-1 gold-separator" />
            <p className="animate-fade-up delay-300 mt-8 text-base font-light leading-8 text-cream/60 max-w-xl">
              Retrouvez les réponses aux questions les plus courantes sur notre
              boutique, nos fromages, la livraison et nos services. Vous ne
              trouvez pas votre réponse ? Contactez-nous directement.
            </p>
            <div className="animate-fade-up delay-400 mt-10">
              <Link href="/contact" className="btn-luxury btn-luxury-filled">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ par catégories */}
      {categories.map((category, catIndex) => (
        <section
          key={category.title}
          className={catIndex % 2 === 0 ? "" : "relative bg-cream"}
        >
          {catIndex % 2 !== 0 && (
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />
          )}

          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="flex items-center gap-4">
              <Reveal>
                <div className="text-accent/50">
                  {category.icon}
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif text-2xl font-light tracking-[0.02em] text-primary lg:text-3xl">
                  {category.title}
                </h2>
              </Reveal>
            </div>
            <Reveal variant="line" delay={150} className="mt-4 gold-separator" />

            <div className="mt-10 space-y-0 divide-y divide-gold-line">
              {category.questions.map((faq, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="py-7">
                    <h3 className="font-serif text-lg font-light tracking-[0.02em] text-primary">
                      {faq.q}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-7 text-foreground/60">
                      {faq.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/70">
                Une autre question ?
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-cream lg:text-5xl">
                Nous sommes à votre écoute
              </h2>
            </Reveal>
            <Reveal
              variant="line"
              delay={200}
              className="mx-auto mt-6 gold-separator"
              style={{ margin: "1.5rem auto" }}
            />
            <Reveal delay={300}>
              <p className="mt-8 text-base font-light leading-8 text-cream/60">
                Notre équipe est disponible en boutique, par téléphone ou par
                e-mail pour répondre à toutes vos questions et vous accompagner
                dans vos choix.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link href="/contact" className="btn-luxury btn-luxury-filled">
                  Nous contacter
                </Link>
                <a
                  href="tel:+33160000000"
                  className="btn-luxury btn-luxury-outline border-cream/30 text-cream/70 hover:border-accent hover:text-accent"
                >
                  01 60 00 00 00
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
