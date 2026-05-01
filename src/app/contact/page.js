import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact",
  description:
    "Vous avez une question ou besoin d'informations ? Contactez notre équipe de L'Héritage, nous sommes à votre disposition pour vous conseiller et vous aider.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light opacity-80" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent/70 animate-fade-up">
              Nous écrire
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light tracking-[0.05em] text-cream sm:text-5xl lg:text-6xl animate-fade-up delay-100">
              Contactez-nous
            </h1>
            <div
              className="mx-auto gold-separator animate-reveal-line delay-200"
              style={{ margin: "1.5rem auto" }}
            />
            <p className="mt-4 text-base font-light leading-8 text-cream/50 animate-fade-up delay-300">
              Vous avez une question, une commande spéciale ou souhaitez
              organiser un événement ? Notre équipe est à votre écoute.
            </p>
          </div>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="relative bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gold-line">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                ),
                label: "Adresse",
                value: "32 Av. Charles Rouxel, 77340 Pontault-Combault",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
                label: "Téléphone",
                value: "01 64 43 67 89",
                href: "tel:+33164436789",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                label: "Horaires",
                value: "Mar-Sam 9h30-20h | Dim 9h-13h",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 py-6 sm:py-8 sm:px-8 first:sm:pl-0 last:sm:pr-0">
                <div className="flex-shrink-0 text-accent/60">{item.icon}</div>
                <div>
                  <p className="text-[0.6rem] font-medium tracking-[0.25em] uppercase text-foreground/30">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-sm font-light text-foreground/70 hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-light text-foreground/70">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />
      </section>

      {/* Form + Sidebar */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                Formulaire
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-[0.02em] text-primary lg:text-4xl">
                Envoyez-nous un message
              </h2>
            </Reveal>
            <Reveal variant="line" delay={200} className="mt-5 gold-separator" />

            <Reveal delay={300}>
              <form className="mt-10 space-y-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
                      required
                      className="mt-2 block w-full border-0 border-b border-accent/30 bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-0 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-primary/70"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-2 block w-full border-0 border-b border-accent/30 bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-0 transition-colors"
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
                      required
                      className="mt-2 block w-full border-0 border-b border-accent/30 bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-0 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-primary/70"
                    >
                      Objet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="mt-2 block w-full border-0 border-b border-accent/30 bg-transparent px-0 py-3 text-sm font-light text-foreground focus:border-accent focus:outline-none focus:ring-0 transition-colors"
                    >
                      <option value="">Choisir un sujet</option>
                      <option value="commande">Commande de fromages</option>
                      <option value="plateau">Plateau sur mesure</option>
                      <option value="livraison">Livraison</option>
                      <option value="evenement">Événement / Réception</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
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
                    rows={6}
                    required
                    className="mt-2 block w-full border-0 border-b border-accent/30 bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-0 transition-colors resize-none"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                <button type="submit" className="btn-luxury btn-luxury-filled">
                  Envoyer le message
                </button>
              </form>
            </Reveal>
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hours card */}
            <Reveal delay={100}>
              <div className="luxury-card p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <div className="text-accent/50">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <p className="text-[0.65rem] font-light tracking-[0.3em] uppercase text-accent/60">
                    Horaires d&apos;ouverture
                  </p>
                </div>
                <div className="gold-separator" />
                <div className="space-y-3 text-sm font-light">
                  {[
                    { day: "Lundi", hours: "Fermé", closed: true },
                    { day: "Mardi", hours: "9h30 \u2013 20h00" },
                    { day: "Mercredi", hours: "9h30 \u2013 20h00" },
                    { day: "Jeudi", hours: "9h30 \u2013 20h00" },
                    { day: "Vendredi", hours: "9h30 \u2013 20h00" },
                    { day: "Samedi", hours: "9h30 \u2013 20h00" },
                    { day: "Dimanche", hours: "9h00 \u2013 13h00" },
                  ].map((row) => (
                    <div
                      key={row.day}
                      className="flex justify-between items-center"
                    >
                      <span className="text-foreground/60">{row.day}</span>
                      <span
                        className={
                          row.closed
                            ? "text-accent font-medium"
                            : "text-foreground/80"
                        }
                      >
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Address card */}
            <Reveal delay={200}>
              <div className="luxury-card p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <div className="text-accent/50">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <p className="text-[0.65rem] font-light tracking-[0.3em] uppercase text-accent/60">
                    Nous trouver
                  </p>
                </div>
                <div className="gold-separator" />
                <p className="text-sm font-light leading-7 text-foreground/70">
                  32 Avenue Charles Rouxel
                  <br />
                  77340 Pontault-Combault
                </p>
                <p className="mt-3 text-sm font-light text-foreground/50">
                  Accès PMR &bull; Parking &bull; Carte bancaire
                </p>
                <a
                  href="https://maps.google.com/?q=32+Avenue+Charles+Rouxel+77340+Pontault-Combault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 btn-luxury btn-luxury-outline text-center block"
                >
                  Itinéraire
                </a>
              </div>
            </Reveal>

            {/* Social card */}
            <Reveal delay={300}>
              <div className="luxury-card p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <div className="text-accent/50">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
                    </svg>
                  </div>
                  <p className="text-[0.65rem] font-light tracking-[0.3em] uppercase text-accent/60">
                    Suivez-nous
                  </p>
                </div>
                <div className="gold-separator" />
                <p className="text-sm font-light text-foreground/50">
                  Retrouvez nos nouveautés, arrivages et coulisses sur nos
                  réseaux sociaux.
                </p>
                <div className="mt-5 flex gap-5">
                  <a
                    href="#"
                    className="text-foreground/30 hover:text-accent transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-foreground/30 hover:text-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative bg-cream">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-line to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="text-center">
            <Reveal>
              <p className="text-[0.65rem] font-light tracking-[0.4em] uppercase text-accent">
                Localisation
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[0.02em] text-primary lg:text-4xl">
                Nous rendre visite
              </h2>
            </Reveal>
            <Reveal
              variant="line"
              delay={200}
              className="mx-auto mt-6 gold-separator"
              style={{ margin: "1.5rem auto" }}
            />
          </div>

          <Reveal delay={300}>
            <div className="mt-12 overflow-hidden border border-gold-line">
              <iframe
                title="L'Héritage — Fromagerie Artisanale"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.5!2d2.6183!3d48.7897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s32+Avenue+Charles+Rouxel+77340+Pontault-Combault!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
