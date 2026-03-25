import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import ProductSuggestions from "./ProductSuggestions";

export default function ProductDetail({ product, allProducts, backHref, backLabel }) {
  const infoItems = [
    { label: "Type de lait", value: product.milkType },
    { label: "Texture", value: product.texture },
    { label: "Affinage", value: product.affinage },
    { label: "Accord", value: product.accord },
  ].filter((item) => item.value && item.value !== "—");

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
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
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
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
