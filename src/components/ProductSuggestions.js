import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function ProductSuggestions({ products, currentSlug }) {
  const suggestions = products
    .filter((p) => p.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (suggestions.length === 0) return null;

  return (
    <section className="mt-20 pt-20 border-t border-accent/10">
      <Reveal>
        <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
          À découvrir aussi
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-4 font-serif text-3xl font-light tracking-[0.02em] text-primary lg:text-4xl">
          Vous aimerez également
        </h2>
      </Reveal>
      <Reveal variant="line" delay={200} className="mt-6 gold-separator" />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {suggestions.map((product, i) => (
          <Reveal key={product.slug} delay={i * 120} className="h-full">
            <ProductCard product={product} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
