"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import allProduits from "@/data/produits";

const categoryLabels = {
  fromages: "Fromages",
  cremerie: "Crèmerie",
  "epicerie-fine": "Épicerie fine",
};

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const results = query.trim().length >= 2
    ? allProduits.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      })
    : [];

  const handleClose = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [open, handleClose]);

  const overlayRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const el = overlayRef.current;
    if (!el) return;
    const stopWheel = (e) => e.stopPropagation();
    const stopTouch = (e) => e.stopPropagation();
    el.addEventListener("wheel", stopWheel, true);
    el.addEventListener("touchmove", stopTouch, true);
    return () => {
      el.removeEventListener("wheel", stopWheel, true);
      el.removeEventListener("touchmove", stopTouch, true);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[100] flex flex-col">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/90 backdrop-blur-md animate-fade-in"
        onClick={handleClose}
      />

      {/* Search panel — full height, scrollable */}
      <div className="relative flex flex-col flex-1 mx-auto w-full max-w-3xl px-6 pt-8 pb-6 overflow-hidden">
        {/* Header: input + close */}
        <div className="flex-shrink-0">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/60">
              Recherche
            </p>
            <button
              onClick={handleClose}
              className="text-cream/40 hover:text-cream transition-colors cursor-pointer"
              aria-label="Fermer la recherche"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Input */}
          <div className="relative animate-fade-up">
            <svg
              className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-6 text-accent/50"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un produit..."
              className="w-full bg-transparent border-b border-accent/30 pl-10 pr-4 py-5 text-2xl font-light text-cream placeholder:text-cream/30 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Result count */}
          {query.trim().length >= 2 && results.length > 0 && (
            <p className="mt-4 text-[0.65rem] font-light tracking-[0.2em] text-cream/30">
              {results.length} résultat{results.length > 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* Results — scrollable area */}
        <div className="flex-1 mt-6 overflow-y-auto overscroll-contain pr-2 -mr-2">
          {query.trim().length >= 2 && results.length === 0 && (
            <p className="text-sm font-light text-cream/30 text-center py-12">
              Aucun produit trouvé pour &laquo;&nbsp;{query}&nbsp;&raquo;
            </p>
          )}

          {results.length > 0 && (
            <div className="space-y-1 animate-fade-up" style={{ animationDuration: "0.3s" }}>
              {results.map((product) => (
                <Link
                  key={product.slug}
                  href={`/${product.category}/${product.slug}`}
                  onClick={handleClose}
                  className="flex items-center gap-5 p-4 rounded-lg hover:bg-cream/5 transition-colors group"
                >
                  <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded bg-cream/10">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-light text-cream group-hover:text-accent transition-colors truncate">
                      {product.name}
                    </p>
                    <p className="mt-1 text-[0.65rem] font-light tracking-[0.1em] text-cream/40">
                      {categoryLabels[product.category]} &middot; {product.origin}
                    </p>
                  </div>
                  <span className="hidden sm:inline text-[0.6rem] font-light tracking-[0.15em] uppercase text-accent/50 group-hover:text-accent transition-colors">
                    Voir &rarr;
                  </span>
                </Link>
              ))}
            </div>
          )}

          {query.trim().length < 2 && (
            <p className="text-sm font-light text-cream/20 text-center py-12">
              Tapez au moins 2 caractères pour rechercher
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
