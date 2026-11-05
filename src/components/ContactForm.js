"use client";

import { useActionState, useState } from "react";
import { sendContactMessage } from "@/app/contact/actions";
import { contactSubjects } from "@/data/site";
import {
  CONTACT_LIMITS,
  hasContactErrors,
  readContactFields,
  validateContactFields,
} from "@/lib/contactValidation";

const labelClassName =
  "block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-primary/70";
const fieldClassName =
  "mt-2 block w-full border-0 border-b border-accent/30 bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-0 transition-colors aria-invalid:border-red-800 aria-invalid:focus:border-red-800";

function FieldError({ name, error }) {
  if (!error) return null;
  return (
    <p id={`${name}-error`} className="mt-2 text-xs font-light leading-5 text-red-800">
      {error}
    </p>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, null);
  const [clientErrors, setClientErrors] = useState({});

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
  // Le serveur couvre le cas sans JavaScript ; toute vérification locale plus récente prime.
  const errors = { ...state?.fieldErrors, ...clientErrors };

  const validateField = (input) => {
    const fieldErrors = validateContactFields(readContactFields(new FormData(input.form)));
    setClientErrors((previous) => ({ ...previous, [input.name]: fieldErrors[input.name] }));
  };

  const handleSubmit = (event) => {
    const fieldErrors = validateContactFields(
      readContactFields(new FormData(event.currentTarget))
    );
    setClientErrors(fieldErrors);
    if (hasContactErrors(fieldErrors)) {
      event.preventDefault();
      const firstInvalid = Object.keys(fieldErrors).find((name) => fieldErrors[name]);
      event.currentTarget.elements[firstInvalid].focus();
    }
  };

  const fieldProps = (name) => ({
    id: name,
    name,
    defaultValue: values[name],
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    // Pas d'erreur tant que le champ n'a pas été rempli : « requis » n'apparaît qu'à l'envoi.
    onBlur: (event) => {
      if (event.target.value.trim()) validateField(event.target);
    },
    // Une fois l'erreur affichée, elle disparaît dès que la saisie devient correcte.
    onChange: (event) => {
      if (errors[name]) validateField(event.target);
    },
  });

  return (
    // noValidate : ces messages remplacent les bulles du navigateur.
    <form action={formAction} onSubmit={handleSubmit} noValidate className="mt-10 space-y-8">
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
            {...fieldProps("name")}
            type="text"
            required
            maxLength={CONTACT_LIMITS.name}
            autoComplete="name"
            className={fieldClassName}
            placeholder="Votre nom"
          />
          <FieldError name="name" error={errors.name} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClassName}>
            Téléphone
          </label>
          <input
            {...fieldProps("phone")}
            type="tel"
            maxLength={CONTACT_LIMITS.phone}
            autoComplete="tel"
            className={fieldClassName}
            placeholder="06 00 00 00 00"
          />
          <FieldError name="phone" error={errors.phone} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClassName}>
            Email
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            required
            maxLength={CONTACT_LIMITS.email}
            autoComplete="email"
            className={fieldClassName}
            placeholder="votre@email.com"
          />
          <FieldError name="email" error={errors.email} />
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
          {...fieldProps("message")}
          rows={6}
          required
          maxLength={CONTACT_LIMITS.message}
          className={`${fieldClassName} resize-none`}
          placeholder="Décrivez votre demande..."
        />
        <FieldError name="message" error={errors.message} />
      </div>

      {state?.message && (
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
