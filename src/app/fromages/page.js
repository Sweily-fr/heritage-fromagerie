import ProductGrid from "@/components/ProductGrid";
import ProductIndex from "@/components/ProductIndex";
import fromages from "@/data/produits/fromages";

export const metadata = {
  title: "Fromages",
  description:
    "Parcourez notre gamme exceptionnelle de fromages, des chèvres aux pâtes molles, affinés avec soin pour offrir des saveurs authentiques et uniques.",
  alternates: {
    canonical: "/fromages",
  },
  openGraph: {
    url: "/fromages",
  }
};

export default function Fromages() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent animate-fade-up">
        Collection
      </p>
      <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl animate-fade-up delay-100">
        Nos Fromages
      </h1>
      <div className="gold-separator animate-reveal-line delay-200" />
      <p className="mt-4 max-w-2xl text-base font-light leading-8 text-foreground/60 animate-fade-up delay-300">
        Parcourez notre gamme exceptionnelle de fromages, des chèvres aux pâtes
        molles, affinés avec soin pour offrir des saveurs authentiques et
        uniques.
      </p>

      <ProductGrid products={fromages} columns={4} />

      <ProductIndex
        products={fromages}
        title="Tous nos fromages"
        intro="Plus de 200 fromages affinés, sélectionnés auprès de producteurs et d'affineurs de toute la France et d'Europe, disponibles à la coupe dans notre fromagerie de Pontault-Combault (Seine-et-Marne) ou en livraison à domicile autour de Roissy-en-Brie, Ozoir-la-Ferrière, Émerainville et dans toute l'Île-de-France."
      />
    </div>
  );
}
