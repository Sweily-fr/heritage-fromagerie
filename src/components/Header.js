"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import SearchOverlay from "./SearchOverlay";

const navigation = [
  {
    name: "Nos Services",
    href: "/services",
    children: [
      { name: "Plateaux de fromages", href: "/plateaux-de-fromages" },
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

function MobileDropdown({ item, onNavigate }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="block text-[0.7rem] font-light tracking-[0.2em] uppercase text-cream/60 hover:text-accent transition-colors"
        onClick={onNavigate}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-1">
        {item.href ? (
          <Link
            href={item.href}
            className="text-[0.7rem] font-light tracking-[0.2em] uppercase text-cream/60 hover:text-accent transition-colors"
            onClick={onNavigate}
          >
            {item.name}
          </Link>
        ) : (
          <span className="text-[0.7rem] font-light tracking-[0.2em] uppercase text-cream/60">
            {item.name}
          </span>
        )}
        <button
          type="button"
          className="text-cream/60 hover:text-accent transition-colors p-1"
          onClick={() => setOpen(!open)}
          aria-label={`${open ? "Fermer" : "Ouvrir"} ${item.name}`}
        >
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
      </div>

      {open && (
        <div className="pl-4 mt-2 space-y-2 border-l border-accent/10">
          {item.children.map((child) => (
            <Link
              key={child.name}
              href={child.href}
              className="block text-[0.65rem] font-light tracking-[0.15em] uppercase text-cream/50 hover:text-accent transition-colors"
              onClick={onNavigate}
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="relative z-50 bg-primary text-cream">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo_heritage_white.png"
            alt="L'Héritage - Fromagerie Artisanale"
            width={64}
            height={64}
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-accent/10">
          <div className="px-6 py-6 space-y-4">
            {navigation.map((item) => (
              <MobileDropdown
                key={item.name}
                item={item}
                onNavigate={() => setMobileMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
