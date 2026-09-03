import ProductGrid from "@/components/ProductGrid";
import ProductIndex from "@/components/ProductIndex";
import epicerieFine from "@/data/produits/epicerie-fine";

export const metadata = {
  title: "Épicerie fine",
  description:
    "Découvrez nos produits d'épicerie fine, des condiments artisanaux aux vins raffinés, soigneusement sélectionnés pour accompagner vos moments gourmands.",
  alternates: {
    canonical: "/epicerie-fine",
  },
  openGraph: {
    url: "/epicerie-fine",
  }
};

export default function EpicerieFine() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent animate-fade-up">
        Maison
      </p>
      <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl animate-fade-up delay-100">
        Épicerie fine
      </h1>
      <div className="gold-separator animate-reveal-line delay-200" />
      <p className="mt-4 max-w-2xl text-base font-light leading-8 text-foreground/60 animate-fade-up delay-300">
        Découvrez nos produits d&apos;épicerie fine, des condiments artisanaux
        aux vins raffinés, soigneusement sélectionnés pour accompagner vos
        moments gourmands.
      </p>

      <ProductGrid products={epicerieFine} columns={3} />

      <ProductIndex
        products={epicerieFine}
        title="Toute notre épicerie fine"
        intro="Vins, charcuteries, pains et douceurs choisis pour accompagner nos fromages, à retrouver dans notre boutique de Pontault-Combault ou en livraison en Île-de-France."
      />
    </div>
  );
}
