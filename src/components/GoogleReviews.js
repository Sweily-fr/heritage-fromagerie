import Reveal from "@/components/Reveal";
import FallbackReviews from "@/components/FallbackReviews";
import { getGoogleReviews } from "@/lib/googleReviews";
import { googleMapsUrl, googleReviewUrl } from "@/data/site";

const MAX_REVIEWS = 3;
const MAX_LENGTH = 320;

function Stars({ rating, className = "h-5 w-5" }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} sur 5`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`${className} ${i < Math.round(rating) ? "text-amber-400" : "text-foreground/15"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function truncate(text) {
  if (text.length <= MAX_LENGTH) return text;
  return `${text.slice(0, MAX_LENGTH).replace(/\s+\S*$/, "")}…`;
}

export default async function GoogleReviews() {
  const data = await getGoogleReviews();
  // Pas de clé API (ou Google indisponible) : on garde l'ancien bloc écrit en dur.
  if (!data) return <FallbackReviews />;

  const mapsUrl = data.mapsUrl || googleMapsUrl;
  const reviews = data.reviews.slice(0, MAX_REVIEWS);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <div className="text-center">
        <Reveal>
          <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
            Avis Google
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
            Ce que disent nos clients
          </h2>
        </Reveal>
        <Reveal variant="line" delay={200} className="mx-auto mt-6 gold-separator" style={{ margin: "1.5rem auto" }} />

        {data.rating && (
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Stars rating={data.rating} />
              <span className="text-lg font-semibold text-primary">
                {data.rating.toLocaleString("fr-FR", { maximumFractionDigits: 1 })}/5
              </span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light text-foreground/60 underline decoration-accent/40 underline-offset-4 hover:text-accent"
              >
                sur {data.count} avis Google
              </a>
            </div>
          </Reveal>
        )}
      </div>

      {reviews.length > 0 && (
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={`${review.author}-${i}`} delay={i * 150} className="h-full">
              <figure className="luxury-card p-10 h-full flex flex-col">
                <Stars rating={review.rating} className="h-4 w-4" />
                <blockquote className="mt-4 flex-1 text-sm font-light leading-7 text-foreground/70 italic">
                  {truncate(review.text)}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gold-line" />
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">
                      {review.authorUrl ? (
                        <a href={review.authorUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-accent">
                          {review.author}
                        </a>
                      ) : (
                        review.author
                      )}
                    </p>
                    {review.when && (
                      <p className="text-[0.6rem] font-light tracking-[0.15em] uppercase text-accent/60">
                        {review.when} · Google
                      </p>
                    )}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      )}

      <Reveal delay={200}>
        <p className="mt-12 text-center text-sm font-light text-foreground/60">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-dark"
          >
            Lire tous nos avis sur Google
          </a>
          {" · "}
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-dark"
          >
            Laisser un avis
          </a>
        </p>
      </Reveal>
    </section>
  );
}
