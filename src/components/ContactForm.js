"use client";

import { useActionState } from "react";
import { sendContactMessage } from "@/app/contact/actions";
import { contactSubjects } from "@/data/site";

const labelClassName =
  "block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-primary/70";
const fieldClassName =
  "mt-2 block w-full border-0 border-b border-accent/30 bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-0 transition-colors";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, null);

  if (state?.status === "success") {
    return (
      <div role="status" className="mt-10 border border-gold-line p-8">
        <p className="font-serif text-2xl font-light text-primary">Message envoyé</p>
        <p className="mt-3 text-sm font-light leading-7 text-foreground/70">
          Merci, nous avons bien reçu votre message. Notre équipe vous répondra
          dans les meilleurs délais.
        </p>
      </div>
    );
  }

  // Après une erreur, les valeurs renvoyées par le serveur évitent de tout ressaisir.
  const values = state?.values ?? {};

  return (
    <form action={formAction} className="mt-10 space-y-8">
      {/* Piège à robots : invisible pour les visiteurs, voir sendContactMessage */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Ne pas remplir ce champ</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClassName}>
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            defaultValue={values.name}
            className={fieldClassName}
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClassName}>
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            maxLength={30}
            autoComplete="tel"
            defaultValue={values.phone}
            className={fieldClassName}
            placeholder="06 00 00 00 00"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClassName}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={254}
            autoComplete="email"
            defaultValue={values.email}
            className={fieldClassName}
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className={labelClassName}>
            Objet
          </label>
          {/* key : un select n'applique pas de nouvelle valeur par défaut sans être recréé */}
          <select
            key={values.subject}
            id="subject"
            name="subject"
            defaultValue={values.subject ?? ""}
            className={fieldClassName}
          >
            <option value="">Choisir un sujet</option>
            {contactSubjects.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          maxLength={5000}
          defaultValue={values.message}
          className={`${fieldClassName} resize-none`}
          placeholder="Décrivez votre demande..."
        />
      </div>

      {state?.status === "error" && (
        <p role="alert" className="text-sm font-light leading-6 text-red-800">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-luxury btn-luxury-filled disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
}
