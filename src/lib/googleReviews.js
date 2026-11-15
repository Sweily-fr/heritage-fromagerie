import { googlePlaceId } from "@/data/site";

/**
 * Note, nombre d'avis et derniers avis de la fiche Google Business Profile,
 * via l'API Google Places (New). La réponse est mise en cache 24 h : la page
 * d'accueil se met à jour toute seule une fois par jour, et l'appel reste
 * dans le quota gratuit de Google.
 *
 * Variable d'environnement requise : GOOGLE_PLACES_API_KEY (clé limitée à
 * « Places API (New) »). Sans clé ou en cas d'erreur, renvoie null et le site
 * affiche simplement les liens vers la fiche Google.
 */
export async function getGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${googlePlaceId}?languageCode=fr`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri",
        },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) {
      console.error("Google Places:", res.status, await res.text());
      return null;
    }
    const data = await res.json();

    const reviews = (data.reviews || [])
      .filter((r) => r.text?.text)
      .map((r) => ({
        author: r.authorAttribution?.displayName || "Client Google",
        authorUrl: r.authorAttribution?.uri,
        rating: r.rating,
        text: r.originalText?.text || r.text.text,
        when: r.relativePublishTimeDescription,
        url: r.googleMapsUri,
      }));

    return {
      rating: data.rating,
      count: data.userRatingCount,
      mapsUrl: data.googleMapsUri,
      reviews,
    };
  } catch (error) {
    console.error("Google Places:", error);
    return null;
  }
}
