"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import SearchOverlay from "./SearchOverlay";
import { business, socialLinks } from "@/data/site";

const navigation = [
  {
    name: "Nos Services",
    href: "/services",
    children: [
      { name: "Plateaux de fromages", href: "/plateaux-de-fromages" },
      { name: "Événements", href: "/evenements" },
      { name: "Livraison à domicile", href: "/livraison" },
    ],
  },
  {
    name: "Nos Produits",
    href: "/produits",
    children: [
      { name: "Fromages", href: "/fromages" },
      { name: "Crémeries", href: "/cremerie" },
      { name: "Épiceries fine", href: "/epicerie-fine" },
    ],
  },
  {
    name: "L'Héritage",
    children: [
      { name: "À propos", href: "/a-propos" },
      { name: "Le blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-[0.7rem] font-light tracking-[0.2em] uppercase text-cream/60 hover:text-accent transition-colors"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {item.href ? (
        <Link
          href={item.href}
          className="flex items-center gap-1 text-[0.7rem] font-light tracking-[0.2em] uppercase text-cream/60 hover:text-accent transition-colors"
        >
          {item.name}
          <svg
            className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </Link>
      ) : (
        <button
          type="button"
          className="flex items-center gap-1 text-[0.7rem] font-light tracking-[0.2em] uppercase text-cream/60 hover:text-accent transition-colors"
          onClick={() => setOpen(!open)}
        >
          {item.name}
          <svg
            className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      )}

      {open && (
        <div className="absolute top-full left-0 mt-3 min-w-[220px] bg-primary-light border border-accent/20 shadow-2xl py-3 backdrop-blur-sm">
          {item.children.map((child) => (
            <Link
              key={child.name}
              href={child.href}
              className="block px-5 py-2.5 text-[0.65rem] font-light tracking-[0.15em] uppercase text-cream/80 hover:text-accent hover:bg-accent/10 transition-colors"
              onClick={() => setOpen(false)}
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileMenu({ open, onClose, onSearch }) {
  // Verrouille le scroll de la page (et Lenis) tant que le menu est ouvert,
  // ferme sur Échap.
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    window.__lenis?.stop();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col bg-primary text-cream animate-fade-in lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      {/* Fond : dégradé + grande lettre en filigrane */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />
      <div className="pointer-events-none absolute top-1/2 -right-10 -translate-y-1/2 select-none font-serif text-[20rem] leading-none text-accent/[0.05]">
        H
      </div>
      <div className="pointer-events-none absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      {/* Barre du haut : logo + fermer */}
      <div className="relative flex items-center justify-between px-6 py-5">
        <Link href="/" onClick={onClose} className="flex items-center">
          <Image
            src="/logo/heritage_logo_blanc.png"
            alt="L'Héritage - Fromagerie Artisanale"
            width={344}
            height={208}
            className="h-14 w-auto"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center border border-accent/30 text-cream/70 transition-colors hover:border-accent hover:text-accent"
          aria-label="Fermer le menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="relative flex-1 overflow-y-auto overscroll-contain px-6 pt-3 pb-6">
        <ul className="space-y-5">
          {navigation.map((item, i) => (
            <li key={item.name} className={`animate-fade-up delay-${(i + 1) * 100}`}>
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-xs text-accent/50">0{i + 1}</span>
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="font-serif text-3xl font-light tracking-[0.03em] text-cream transition-colors hover:text-accent"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="font-serif text-3xl font-light tracking-[0.03em] text-cream">
                    {item.name}
                  </span>
                )}
              </div>
              {item.children && (
                <ul className="mt-2 ml-8 space-y-2 border-l border-accent/15 pl-5">
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <Link
                        href={child.href}
                        onClick={onClose}
                        className="group inline-flex items-center gap-3 text-[0.7rem] font-light tracking-[0.2em] uppercase text-cream/55 transition-colors hover:text-accent"
                      >
                        <span className="h-px w-3 bg-accent/40 transition-all group-hover:w-5 group-hover:bg-accent" />
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => {
            onClose();
            onSearch();
          }}
          className="animate-fade-up delay-500 mt-8 flex w-full items-center justify-between border border-accent/25 px-5 py-3.5 text-[0.7rem] font-light tracking-[0.25em] uppercase text-cream/70 transition-colors hover:border-accent hover:text-accent"
        >
          Rechercher un produit
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </nav>

      {/* Pied : coordonnées + réseaux */}
      <div className="relative shrink-0 animate-fade-up delay-600 border-t border-accent/15 bg-primary/60 px-6 py-5">
        <div className="flex items-end justify-between gap-6">
          <div className="text-[0.7rem] font-light leading-6 tracking-[0.05em] text-cream/50">
            <p>{business.streetAddress}</p>
            <p>
              {business.postalCode} {business.city}
            </p>
            <a href={`tel:${business.telephone}`} className="mt-1 inline-block text-accent hover:text-accent-light">
              {business.telephoneDisplay}
            </a>
            <p className="mt-1 text-cream/35">Mar–Sam 9h30–20h · Dim 9h–13h</p>
          </div>
          <div className="flex gap-4 text-cream/50">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 7.3a4.7 4.7 0 100 9.4 4.7 4.7 0 000-9.4zm0 7.7a3 3 0 110-6 3 3 0 010 6zm5.9-7.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM12 2c-2.7 0-3.05.01-4.12.06-1.07.05-1.8.22-2.43.47a4.9 4.9 0 00-1.78 1.16 4.9 4.9 0 00-1.16 1.78c-.25.64-.42 1.36-.47 2.43C2.01 8.95 2 9.3 2 12s.01 3.05.06 4.12c.05 1.07.22 1.8.47 2.43a4.9 4.9 0 001.16 1.78 4.9 4.9 0 001.78 1.16c.64.25 1.36.42 2.43.47C8.95 21.99 9.3 22 12 22s3.05-.01 4.12-.06c1.07-.05 1.8-.22 2.43-.47a4.9 4.9 0 001.78-1.16 4.9 4.9 0 001.16-1.78c.25-.64.42-1.36.47-2.43.05-1.07.06-1.42.06-4.12s-.01-3.05-.06-4.12c-.05-1.07-.22-1.8-.47-2.43a4.9 4.9 0 00-1.16-1.78 4.9 4.9 0 00-1.78-1.16c-.64-.25-1.36-.42-2.43-.47C15.05 2.01 14.7 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.2 1.86.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.35.3.88.34 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.2 1.5-.34 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.35.14-.88.3-1.86.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.2-1.86-.34a3.1 3.1 0 01-1.15-.75 3.1 3.1 0 01-.75-1.15c-.14-.35-.3-.88-.34-1.86C3.81 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.98.2-1.5.34-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.35-.14.88-.3 1.86-.34C9.01 3.81 9.33 3.8 12 3.8z" />
              </svg>
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-cream">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/heritage_logo_blanc.png"
            alt="L'Héritage - Fromagerie Artisanale"
            width={344}
            height={208}
            priority
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navigation.map((item) => (
            <DesktopDropdown key={item.name} item={item} />
          ))}

          {/* Search button */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="text-cream/60 hover:text-accent transition-colors cursor-pointer"
            aria-label="Rechercher un produit"
          >
            <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>

        {/* Mobile: search + menu buttons */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="text-cream/60 hover:text-accent transition-colors cursor-pointer"
            aria-label="Rechercher un produit"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>

          <button
            type="button"
            className="text-cream/60 hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onSearch={() => setSearchOpen(true)}
      />
    </header>
  );
}
