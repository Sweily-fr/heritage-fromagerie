import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothSnap from "@/components/SmoothSnap";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://heritage-fromagerie.fr";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "L'Héritage - Fromagerie Artisanale à Pontault-Combault",
    template: "%s | L'Héritage - Fromagerie Artisanale",
  },
  description:
    "L'Héritage, fromagerie artisanale à Pontault-Combault. Fromages affinés, crèmerie fermière, épicerie fine et plateaux sur mesure. Livraison en Île-de-France.",
  keywords: [
    "fromagerie",
    "fromagerie artisanale",
    "fromages",
    "Pontault-Combault",
    "crèmerie",
    "épicerie fine",
    "plateau de fromages",
    "livraison fromages Île-de-France",
    "L'Héritage",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "L'Héritage",
    title: "L'Héritage - Fromagerie Artisanale à Pontault-Combault",
    description:
      "Fromages affinés, crèmerie fermière et épicerie fine. Plateaux sur mesure et livraison en Île-de-France.",
    images: [
      {
        url: "/images/vitrine_02.png",
        width: 1200,
        height: 630,
        alt: "Devanture de la fromagerie L'Héritage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Héritage - Fromagerie Artisanale à Pontault-Combault",
    description:
      "Fromages affinés, crèmerie fermière et épicerie fine. Plateaux sur mesure et livraison en Île-de-France.",
    images: ["/images/vitrine_02.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": `${siteUrl}/#fromagerie`,
  name: "L'Héritage - Fromagerie Artisanale",
  image: `${siteUrl}/images/vitrine_02.png`,
  url: siteUrl,
  telephone: "+33164436789",
  priceRange: "€€",
  servesCuisine: "Fromagerie",
  address: {
    "@type": "PostalAddress",
    streetAddress: "32 Avenue Charles Rouxel",
    addressLocality: "Pontault-Combault",
    postalCode: "77340",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.7969,
    longitude: 2.6047,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Île-de-France",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${raleway.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <SmoothSnap />
      </body>
    </html>
  );
}
