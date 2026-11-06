"use server";

import { Resend } from "resend";
import { business, contactSubjects } from "@/data/site";
import {
  hasContactErrors,
  readContactFields,
  validateContactFields,
} from "@/lib/contactValidation";

// L'adresse d'expédition doit appartenir au domaine vérifié dans Resend.
const FROM_ADDRESS = "Heritage Fromagerie <site@heritage-fromagerie.fr>";
const SEND_ERROR = `Votre message n'a pas pu être envoyé. Réessayez dans quelques instants ou appelez-nous au ${business.telephoneDisplay}.`;

export async function sendContactMessage(_previousState, formData) {
  const values = readContactFields(formData);

  // Champ invisible rempli uniquement par les robots : on simule un succès sans rien envoyer.
  if (formData.get("website")) return { status: "success" };

  const fieldErrors = validateContactFields(values);
  if (hasContactErrors(fieldErrors)) return { status: "error", fieldErrors, values };

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
