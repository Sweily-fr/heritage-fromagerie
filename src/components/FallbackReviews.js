import Reveal from "@/components/Reveal";
import { googleMapsUrl, googleReviewUrl } from "@/data/site";

/**
 * Bloc d'avis écrit en dur, affiché tant que GOOGLE_PLACES_API_KEY n'est pas
 * configurée (ou si l'API Google ne répond pas). Dès que la clé est en place,
 * GoogleReviews affiche les vrais avis de la fiche à la place.
 */
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

export default function FallbackReviews() {
  return (
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
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-foreground/60 underline decoration-accent/40 underline-offset-4 hover:text-accent"
            >
              sur 98 avis Google
            </a>
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

      <Reveal delay={200}>
        <p className="mt-12 text-center text-sm font-light text-foreground/60">
          Vous êtes déjà venu ?{" "}
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-dark"
          >
            Laissez-nous un avis sur Google
          </a>
        </p>
      </Reveal>
    </section>
  );
}
