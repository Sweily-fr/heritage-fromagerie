import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center lg:px-8">
      <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
        Erreur 404
      </p>
      <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl">
        Cette page n&apos;existe pas
      </h1>
      <div className="mx-auto gold-separator" style={{ margin: "1.5rem auto" }} />
      <p className="mt-4 text-base font-light leading-8 text-foreground/60">
        La page demandée a peut-être été déplacée. Retrouvez nos fromages, notre
        crèmerie et notre épicerie fine depuis la boutique.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
        <Link href="/" className="btn-luxury btn-luxury-filled">
          Retour à l&apos;accueil
        </Link>
        <Link href="/fromages" className="btn-luxury btn-luxury-outline">
          Voir nos fromages
        </Link>
      </div>
    </div>
  );
}
