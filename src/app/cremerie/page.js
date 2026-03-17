export const metadata = {
  title: "Crèmerie",
  description:
    "Savourez la fraîcheur de nos produits laitiers artisanaux. Découvrez notre sélection de crèmes, beurres et autres délices issus de fermes locales.",
};

export default function Cremerie() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent animate-fade-up">
        Sélection
      </p>
      <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl animate-fade-up delay-100">
        Crèmerie
      </h1>
      <div className="gold-separator animate-reveal-line delay-200" />
      <p className="mt-4 max-w-2xl text-base font-light leading-8 text-foreground/60 animate-fade-up delay-300">
        Savourez la fraîcheur de nos produits laitiers artisanaux. Découvrez
        notre sélection de crèmes, beurres et autres délices issus de fermes
        locales.
      </p>

      <div className="mt-16 luxury-card p-14 text-center animate-fade-up delay-400">
        <p className="text-sm font-light tracking-[0.1em] text-foreground/40">
          Les produits seront bientôt ajoutés ici.
        </p>
      </div>
    </div>
  );
}
