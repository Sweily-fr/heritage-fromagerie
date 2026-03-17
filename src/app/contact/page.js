export const metadata = {
  title: "Contact",
  description:
    "Vous avez une question ou besoin d'informations ? Contactez notre équipe de L'Héritage, nous sommes à votre disposition pour vous conseiller et vous aider.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <div className="text-center">
        <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent animate-fade-up">
          Nous écrire
        </p>
        <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.02em] text-primary lg:text-5xl animate-fade-up delay-100">
          Contact
        </h1>
        <div className="mx-auto gold-separator animate-reveal-line delay-200" style={{ margin: "1.5rem auto" }} />
        <p className="mt-4 max-w-xl mx-auto text-base font-light leading-8 text-foreground/60 animate-fade-up delay-300">
          Vous avez une question ou besoin d&apos;informations ? Notre équipe est
          à votre disposition pour vous conseiller.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 animate-fade-up delay-400">
        {/* Form */}
        <form className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-primary/70"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 block w-full border-0 border-b border-accent/30 bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-0 transition-colors"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-primary/70"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 block w-full border-0 border-b border-accent/30 bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-0 transition-colors"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-primary/70"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 block w-full border-0 border-b border-accent/30 bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-0 transition-colors resize-none"
              placeholder="Votre message..."
            />
          </div>
          <button type="submit" className="btn-luxury btn-luxury-filled">
            Envoyer
          </button>
        </form>

        {/* Info */}
        <div className="luxury-card p-10 self-start">
          <p className="text-[0.65rem] font-light tracking-[0.3em] uppercase text-accent/60">
            Informations
          </p>
          <h2 className="mt-3 font-serif text-2xl font-light tracking-[0.03em] text-primary">
            Nos coordonnées
          </h2>
          <div className="gold-separator" />
          <p className="text-sm font-light leading-7 text-foreground/50">
            Les informations de contact seront bientôt ajoutées ici (adresse,
            téléphone, horaires d&apos;ouverture).
          </p>
        </div>
      </div>
    </div>
  );
}
