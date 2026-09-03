import Link from "next/link";

/**
 * Index alphabétique de tous les produits d'une catégorie, rendu côté serveur.
 * La grille paginée n'expose que 24 fiches dans le HTML : cet index garantit
 * que chaque fiche produit reçoit un lien interne explorable par Google.
 */
export default function ProductIndex({ products, title, intro }) {
  const sorted = [...products].sort((a, b) =>
    a.name.localeCompare(b.name, "fr", { sensitivity: "base" })
  );

  return (
    <section className="mt-24 border-t border-gold-line pt-16">
      <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
        De A à Z
      </p>
      <h2 className="mt-4 font-serif text-3xl font-light tracking-[0.02em] text-primary lg:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 max-w-3xl text-sm font-light leading-7 text-foreground/60">
          {intro}
        </p>
      )}
      <ul className="mt-10 columns-2 gap-x-8 sm:columns-3 lg:columns-4">
        {sorted.map((product) => (
          <li key={product.slug} className="mb-2 break-inside-avoid">
            <Link
              href={`/${product.category}/${product.slug}`}
              className="text-sm font-light text-foreground/70 hover:text-accent transition-colors"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
