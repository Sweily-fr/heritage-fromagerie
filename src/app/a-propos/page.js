export const metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire de L'Héritage, une jeune fromagerie artisanale, dédiée à la production de fromages authentiques et de qualité, élaborés selon les traditions.",
};

export default function APropos() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent animate-fade-up">
          Notre maison
        </p>
        <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl animate-fade-up delay-100">
          À propos
        </h1>
        <div className="mx-auto gold-separator animate-reveal-line delay-200" style={{ margin: "1.5rem auto" }} />
      </div>

      <div className="mt-12 max-w-3xl mx-auto space-y-8 text-base font-light leading-8 text-foreground/70 animate-fade-up delay-300">
        <p>
          L&apos;Héritage est une jeune fromagerie artisanale, dédiée à la
          production de fromages authentiques et de qualité, élaborés selon les
          traditions.
        </p>
        <p>
          Chaque produit est le fruit d&apos;un savoir-faire transmis de
          génération en génération, alliant respect des méthodes ancestrales et
          passion du goût.
        </p>
        <p>
          Notre mission est de vous proposer des fromages d&apos;exception, une
          crèmerie de qualité et une épicerie fine soigneusement sélectionnée
          pour accompagner tous vos moments gourmands.
        </p>
      </div>
    </div>
  );
}
