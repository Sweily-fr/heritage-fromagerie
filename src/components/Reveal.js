"use client";

import { useEffect, useRef } from "react";

/**
 * Luxury scroll-reveal component.
 *
 * Variants:
 *   "up"    — fade + translate up (default, for text blocks)
 *   "line"  — scaleX reveal (for gold separators)
 *   "fade"  — opacity only (for images, backgrounds)
 *
 * delay: stagger delay in ms (e.g. 100, 200)
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "line"
      ? "reveal-line"
      : variant === "fade"
        ? "reveal-fade"
        : "reveal-up";

  return (
    <Tag
      ref={ref}
      className={`${variantClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
