"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";

const PAGE_SIZE = 24;

export default function ProductGrid({ products, columns = 4 }) {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filters = useMemo(() => {
    const tags = [...new Set(products.map((p) => p.tag))];
    return ["Tous", ...tags];
  }, [products]);

  const filtered = useMemo(() => {
    if (activeFilter === "Tous") return products;
    return products.filter((p) => p.tag === activeFilter);
  }, [products, activeFilter]);

  const selectFilter = (filter) => {
    setActiveFilter(filter);
    setVisible(PAGE_SIZE);
  };

  const shown = filtered.slice(0, visible);

  const gridCols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      {/* Filters */}
      <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up delay-400">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => selectFilter(filter)}
            className={`
              px-6 py-2.5 rounded-full text-sm tracking-wide
              transition-all duration-300 cursor-pointer
              ${
                activeFilter === filter
                  ? "bg-primary text-white font-medium shadow-md"
                  : "bg-transparent text-foreground/40 font-light hover:text-foreground/70"
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Compteur */}
      {filtered.length > 0 && (
        <p className="mt-6 text-[0.65rem] font-light tracking-[0.2em] uppercase text-foreground/40">
          {shown.length} produit{shown.length > 1 ? "s" : ""} affiché
          {shown.length > 1 ? "s" : ""} sur {filtered.length}
        </p>
      )}

      {/* Grid */}
      <div className={`mt-10 grid grid-cols-1 gap-6 ${gridCols}`}>
        {shown.map((product) => (
          <div
            key={product.slug}
            className="h-full animate-fade-up"
            style={{ animationDuration: "0.5s" }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Voir plus */}
      {visible < filtered.length && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="btn-luxury btn-luxury-outline cursor-pointer"
          >
            Voir plus de produits
          </button>
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-16 luxury-card p-14 text-center">
          <p className="text-sm font-light tracking-[0.1em] text-foreground/40">
            Aucun produit ne correspond à ce filtre.
          </p>
        </div>
      )}
    </>
  );
}
