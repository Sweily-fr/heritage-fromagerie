import Link from "next/link";
import ProductImage from "./ProductImage";
import Reveal from "./Reveal";
import ProductSuggestions from "./ProductSuggestions";

const siteUrl = "https://heritage-fromagerie.fr";

export default function ProductDetail({ product, allProducts, backHref, backLabel }) {
  // L'épicerie fine regroupe aussi les vins et la charcuterie : les libellés
  // laitiers n'y ont pas de sens.
  const labels =
    product.category === "epicerie-fine"
      ? ["Composition", "Caractère", "Conservation", "Accord"]
      : ["Type de lait", "Texture", "Affinage", "Accord"];

  const infoItems = [
    { label: labels[0], value: product.milkType },
    { label: labels[1], value: product.texture },
    { label: labels[2], value: product.affinage },
    { label: labels[3], value: product.accord },
  ].filter((item) => item.value);

  const priceMatch = product.price?.match(/(\d+[.,]\d+)/);
  const priceValue = priceMatch ? priceMatch[1].replace(",", ".") : null;
  // "22,95 € / kg" => prix au kilo ; "5,95 € / pièce" => prix unitaire.
  const pricePerKg = /kg/i.test(product.price || "");
  const productUrl = `${siteUrl}/${product.category}/${product.slug}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": productUrl,
    name: product.name,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    url: productUrl,
    category: backLabel,
    ...(product.origin && { countryOfOrigin: product.origin }),
    ...(priceValue && {
      offers: {
        "@type": "Offer",
        url: productUrl,
        price: priceValue,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStoreOnly",
        ...(pricePerKg && {
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: priceValue,
            priceCurrency: "EUR",
            unitCode: "KGM",
            unitText: "kg",
          },
        }),
        seller: { "@id": `${siteUrl}/#fromagerie` },
      },
    }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
      { "@type": "ListItem", position: 2, name: backLabel, item: `${siteUrl}${backHref}` },
      { "@type": "ListItem", position: 3, name: product.name },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Breadcrumb */}
      <nav className="animate-fade-up">
        <ol className="flex items-center gap-2 text-[0.65rem] font-light tracking-[0.2em] uppercase text-foreground/40">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Accueil
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={backHref} className="hover:text-accent transition-colors">
              {backLabel}
            </Link>
          </li>
          <li>/</li>
          <li className="text-accent">{product.name}</li>
        </ol>
      </nav>

      {/* Product layout */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image */}
        <div className="animate-fade-up">
          <div className="relative aspect-[4/3] overflow-hidden bg-cream">
            <ProductImage
              src={product.image}
              alt={product.name}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-block px-3 py-1 text-[0.6rem] font-light tracking-[0.2em] uppercase border border-accent/30 text-accent animate-fade-up">
            {product.tag}
          </span>

          <h1 className="mt-6 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl animate-fade-up delay-100">
            {product.name}
          </h1>

          <p className="mt-2 text-[0.7rem] font-light tracking-[0.2em] text-accent/60 animate-fade-up delay-100">
            {product.origin}
          </p>

          <div className="gold-separator animate-reveal-line delay-200" />

          <p className="mt-6 text-lg font-light leading-8 text-foreground/70 animate-fade-up delay-300">
            {product.description}
          </p>

          <p className="mt-6 text-base font-light leading-8 text-foreground/60 animate-fade-up delay-400">
            {product.details}
          </p>

          <p className="mt-8 text-lg font-serif text-primary animate-fade-up delay-400">
            {product.price}
          </p>

          <div className="mt-8 animate-fade-up delay-500">
            <Link href="/contact" className="btn-luxury btn-luxury-filled">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      {/* Caractéristiques */}
      {infoItems.length > 0 && (
        <div className="mt-16 animate-fade-up delay-300">
          <div className="luxury-card p-8 lg:p-10">
            <h2 className="text-[0.65rem] font-medium tracking-[0.3em] uppercase text-foreground/40">
              Caractéristiques
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {infoItems.map((item) => (
                <div key={item.label}>
                  <p className="text-[0.6rem] font-light tracking-[0.25em] uppercase text-accent/60">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-light text-foreground/80">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Suggestions */}
      <ProductSuggestions
        products={allProducts}
        currentSlug={product.slug}
      />
    </div>
  );
}
