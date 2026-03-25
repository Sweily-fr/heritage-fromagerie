import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product, index = 0 }) {
  return (
    <Link
      href={`/${product.category}/${product.slug}`}
      className="luxury-card group h-full block overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
        {/* Tag overlay */}
        <span className="absolute top-4 left-4 px-3 py-1 text-[0.6rem] font-light tracking-[0.2em] uppercase bg-white/90 text-accent backdrop-blur-sm">
          {product.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <h3 className="font-serif text-xl font-light tracking-[0.02em] text-primary group-hover:text-accent-dark transition-colors duration-500">
          {product.name}
        </h3>

        {/* Origin */}
        <p className="mt-1 text-[0.65rem] font-light tracking-[0.15em] text-accent/60">
          {product.origin}
        </p>

        {/* Description */}
        <p className="mt-3 text-sm font-light leading-7 text-foreground/60 line-clamp-2">
          {product.description}
        </p>

        {/* Price + CTA */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-medium text-primary/80">
            {product.price}
          </p>
          <span className="text-[0.65rem] font-light tracking-[0.2em] uppercase text-accent group-hover:tracking-[0.3em] transition-all duration-500">
            Voir &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
