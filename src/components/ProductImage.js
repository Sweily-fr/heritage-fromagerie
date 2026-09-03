"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Affiche la photo du produit et bascule sur un visuel de repli tant que
 * le fichier correspondant n'a pas ete depose dans /public/images/produits.
 */
export default function ProductImage({ src, alt, sizes, priority = false }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-cream">
        <span
          aria-hidden="true"
          className="font-serif text-3xl font-light tracking-[0.2em] text-accent/30"
        >
          L&apos;H
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
  );
}
