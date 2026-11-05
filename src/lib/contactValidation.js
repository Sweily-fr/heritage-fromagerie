/**
 * Règles du formulaire de contact, partagées entre le navigateur (retour immédiat)
 * et le serveur (seule vérification qu'on ne peut pas contourner).
 */
export const CONTACT_LIMITS = { name: 100, phone: 30, email: 254, message: 5000 };

const MIN_MESSAGE_LENGTH = 10;

// Lettres (accents compris), espaces, apostrophes, tirets et points : « Jean-Luc O'Neil », « J. Dupont ».
const NAME_PATTERN = /^\p{L}[\p{L}\p{M} '’.-]*$/u;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[^\s@.]{2,}$/;
// Après retrait des séparateurs : 0612345678, +33612345678, 0033612345678 ou numéro étranger.
const PHONE_PATTERN = /^(0[1-9]\d{8}|(\+|00)33[1-9]\d{8}|(\+|00)(?!33)[1-9]\d{8,14})$/;

export function readContactFields(formData) {
  const field = (key) => String(formData.get(key) ?? "").trim();
  return {
    name: field("name").replace(/\s+/g, " "),
    phone: field("phone"),
    email: field("email"),
    subject: field("subject"),
    message: field("message"),
  };
}

function nameError(name) {
  if (!name) return "Merci d'indiquer votre nom.";
  if (name.length < 2) return "Votre nom doit contenir au moins 2 caractères.";
  if (name.length > CONTACT_LIMITS.name) return "Votre nom est trop long.";
  if (!NAME_PATTERN.test(name)) {
    return "Votre nom ne peut contenir que des lettres, des espaces, des tirets et des apostrophes.";
  }
  return null;
}

function phoneError(phone) {
  if (!phone) return null; // Champ facultatif
  const isValid =
    phone.length <= CONTACT_LIMITS.phone &&
    PHONE_PATTERN.test(phone.replace(/[\s.()-]/g, ""));
  return isValid ? null : "Ce numéro ne semble pas valide. Exemple : 06 12 34 56 78.";
}

function emailError(email) {
  if (!email) return "Merci d'indiquer votre e-mail.";
  const isValid = email.length <= CONTACT_LIMITS.email && EMAIL_PATTERN.test(email);
  return isValid ? null : "Cette adresse e-mail ne semble pas valide. Exemple : nom@exemple.fr.";
}

function messageError(message) {
  if (!message) return "Merci d'écrire votre message.";
  if (message.length < MIN_MESSAGE_LENGTH) {
    return `Votre message doit contenir au moins ${MIN_MESSAGE_LENGTH} caractères.`;
  }
  if (message.length > CONTACT_LIMITS.message) {
    return `Votre message ne doit pas dépasser ${CONTACT_LIMITS.message} caractères.`;
  }
  return null;
}

/** Renvoie les erreurs par champ, avec null pour chaque champ valide. */
export function validateContactFields({ name, phone, email, message }) {
  return {
    name: nameError(name),
    phone: phoneError(phone),
    email: emailError(email),
    message: messageError(message),
  };
}

export function hasContactErrors(errors) {
  return Object.values(errors).some(Boolean);
}
