"use server";

import { Resend } from "resend";
import { business, contactSubjects } from "@/data/site";

// L'adresse d'expédition doit appartenir au domaine vérifié dans Resend.
const FROM_ADDRESS = "L'Héritage <site@heritage-fromagerie.fr>";
const MAX_LENGTHS = { name: 100, phone: 30, email: 254, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SEND_ERROR = `Votre message n'a pas pu être envoyé. Réessayez dans quelques instants ou appelez-nous au ${business.telephoneDisplay}.`;

function validate({ name, phone, email, message }) {
  if (!name || !email || !message) {
    return "Merci de renseigner votre nom, votre e-mail et votre message.";
  }
  if (!EMAIL_PATTERN.test(email)) {
    return "Cette adresse e-mail ne semble pas valide.";
  }
  const tooLong =
    name.length > MAX_LENGTHS.name ||
    phone.length > MAX_LENGTHS.phone ||
    email.length > MAX_LENGTHS.email ||
    message.length > MAX_LENGTHS.message;
  return tooLong ? "Un des champs est trop long." : null;
}

export async function sendContactMessage(_previousState, formData) {
  const field = (key) => String(formData.get(key) ?? "").trim();
  const values = {
    name: field("name").replace(/\s+/g, " "),
    phone: field("phone"),
    email: field("email"),
    subject: field("subject"),
    message: field("message"),
  };

  // Champ invisible rempli uniquement par les robots : on simule un succès sans rien envoyer.
  if (field("website")) return { status: "success" };

  const validationError = validate(values);
  if (validationError) return { status: "error", message: validationError, values };

  if (!process.env.RESEND_API_KEY) {
    console.error("Formulaire de contact : RESEND_API_KEY n'est pas définie.");
    return { status: "error", message: SEND_ERROR, values };
  }

  const subjectLabel =
    contactSubjects.find(({ value }) => value === values.subject)?.label ??
    "Demande de contact";

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: business.email,
      replyTo: values.email,
      subject: `[Site] ${subjectLabel} - ${values.name}`,
      // Texte brut : le contenu saisi par le visiteur n'est jamais interprété comme du HTML.
      text: [
        `Nom : ${values.name}`,
        `E-mail : ${values.email}`,
        `Téléphone : ${values.phone || "non renseigné"}`,
        `Objet : ${subjectLabel}`,
        "",
        values.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Formulaire de contact : refus de Resend :", error.name, error.message);
      return { status: "error", message: SEND_ERROR, values };
    }
  } catch (error) {
    console.error("Formulaire de contact : échec de l'envoi :", error);
    return { status: "error", message: SEND_ERROR, values };
  }

  return { status: "success" };
}
