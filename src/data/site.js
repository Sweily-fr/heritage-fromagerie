/**
 * Coordonnées et identifiants publics de la boutique, partagés entre le schéma
 * LocalBusiness, les pages et le blog. À modifier ici uniquement.
 */
export const siteUrl = "https://heritage-fromagerie.fr";

export const business = {
  name: "L'Héritage - Fromagerie Artisanale",
  streetAddress: "32 Avenue Charles Rouxel",
  postalCode: "77340",
  city: "Pontault-Combault",
  telephone: "+33695984075",
  telephoneDisplay: "06 95 98 40 75",
  email: "contact@heritage-fromagerie.fr",
  geo: { latitude: 48.796264, longitude: 2.604213 },
};

// Fiche Google Business Profile (place_id) : lien Maps stable + lien "laisser un avis".
export const googlePlaceId = "ChIJvV58AbcP5kcRh9NWstYDpRc";
export const googleMapsUrl = `https://www.google.com/maps/place/?q=place_id:${googlePlaceId}`;
export const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${googlePlaceId}`;

export const socialLinks = {
  instagram: "https://www.instagram.com/heritage_fromagerie/",
  facebook: "https://www.facebook.com/p/LH%C3%A9ritage-Fromagerie-61569304264945/",
};

// Communes voisines desservies : alimente le schéma LocalBusiness (areaServed)
// et les pages locales du blog.
export const nearbyCities = [
  "Pontault-Combault",
  "Roissy-en-Brie",
  "Émerainville",
  "Ozoir-la-Ferrière",
  "Lésigny",
  "La Queue-en-Brie",
  "Le Plessis-Trévise",
  "Villiers-sur-Marne",
  "Champs-sur-Marne",
  "Croissy-Beaubourg",
  "Pontcarré",
  "Torcy",
  "Noisiel",
  "Lognes",
  "Brie-Comte-Robert",
  "Servon",
  "Chevry-Cossigny",
  "Gretz-Armainvilliers",
  "Tournan-en-Brie",
  "Noisy-le-Grand",
];
