import fromagerieRoissyEnBrie from "./articles/fromagerie-roissy-en-brie";
import fromagerieOzoirLaFerriere from "./articles/fromagerie-ozoir-la-ferriere";
import fromagerieEmerainvilleChampsSurMarne from "./articles/fromagerie-emerainville-champs-sur-marne";
import livraisonFromagesMarneLaVallee from "./articles/livraison-fromages-marne-la-vallee";
import plateauFromagesMariageSeineEtMarne from "./articles/plateau-fromages-mariage-seine-et-marne";
import fromagerieQueueEnBriePlessisTrevise from "./articles/fromagerie-la-queue-en-brie-plessis-trevise";
import brieDeMeauxBrieDeMelun from "./articles/brie-de-meaux-brie-de-melun";
import fromageriePontaultCombault from "./articles/fromagerie-pontault-combault";
import fromagerieLesignyBrieComteRobert from "./articles/fromagerie-lesigny-brie-comte-robert";
import marcheOuFromagerie from "./articles/marche-ou-fromagerie-pontault-combault";
import quelFromagePourRaclette from "./articles/quel-fromage-pour-la-raclette";
import montDorSaison from "./articles/mont-d-or-saison-degustation";
import composerPlateauFromages from "./articles/composer-un-plateau-de-fromages";
import chevresDeLaLoire from "./articles/fromages-de-chevre-de-la-loire";
import roquefortCarlesPapillonVieuxBerger from "./articles/roquefort-carles-papillon-vieux-berger";
import fromagesTruffes from "./articles/fromages-truffes-selection";
import conserverSesFromages from "./articles/conserver-ses-fromages";
import accordsVinsFromages from "./articles/accords-vins-et-fromages";
import fromagesSuisses from "./articles/fromages-suisses-appenzeller-kaltbach-tete-de-moine";
import plateauFromagesNoel from "./articles/plateau-de-fromages-noel-pontault-combault";

export const categories = [
  "Autour de nous",
  "Nos fromages",
  "Conseils & dégustation",
  "Plateaux & événements",
];

function readingTime(markdown) {
  const words = markdown.replace(/[#*>\-\[\]()!]/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 200));
}

const articles = [
  fromagerieRoissyEnBrie,
  fromagerieOzoirLaFerriere,
  fromagerieEmerainvilleChampsSurMarne,
  livraisonFromagesMarneLaVallee,
  plateauFromagesMariageSeineEtMarne,
  fromagerieQueueEnBriePlessisTrevise,
  brieDeMeauxBrieDeMelun,
  fromageriePontaultCombault,
  fromagerieLesignyBrieComteRobert,
  marcheOuFromagerie,
  quelFromagePourRaclette,
  montDorSaison,
  composerPlateauFromages,
  chevresDeLaLoire,
  roquefortCarlesPapillonVieuxBerger,
  fromagesTruffes,
  conserverSesFromages,
  accordsVinsFromages,
  fromagesSuisses,
  plateauFromagesNoel,
]
  .map((a) => ({ ...a, readingTime: readingTime(a.content) }))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function formatDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

export function getRelated(article, count = 3) {
  const same = articles.filter((a) => a.slug !== article.slug && a.category === article.category);
  const others = articles.filter((a) => a.slug !== article.slug && a.category !== article.category);
  return [...same, ...others].slice(0, count);
}

export default articles;
