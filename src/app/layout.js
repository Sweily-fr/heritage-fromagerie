import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothSnap from "@/components/SmoothSnap";
import { siteUrl, googleMapsUrl, nearbyCities, socialLinks } from "@/data/site";

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
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devanture de la fromagerie L'Héritage à Pontault-Combault",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Héritage - Fromagerie Artisanale à Pontault-Combault",
    description:
      "Fromages affinés, crèmerie fermière et épicerie fine. Plateaux sur mesure et livraison en Île-de-France.",
    images: ["/images/og-image.jpg"],
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
  "@type": ["Store", "LocalBusiness"],
  "@id": `${siteUrl}/#fromagerie`,
  name: "L'Héritage - Fromagerie Artisanale",
  alternateName: "Fromagerie L'Héritage Pontault-Combault",
  description:
    "Fromagerie artisanale à Pontault-Combault (77) : fromages affinés, crèmerie fermière, épicerie fine, plateaux sur mesure et livraison en Île-de-France.",
  image: `${siteUrl}/images/og-image.jpg`,
  logo: `${siteUrl}/logo/heritage_logo.png`,
  url: siteUrl,
  telephone: "+33695984075",
  email: "contact@heritage-fromagerie.fr",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Espèces, Carte bancaire",
  address: {
    "@type": "PostalAddress",
    streetAddress: "32 Avenue Charles Rouxel",
    addressLocality: "Pontault-Combault",
    addressRegion: "Île-de-France",
    postalCode: "77340",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.796264,
    longitude: 2.604213,
  },
  hasMap: googleMapsUrl,
  sameAs: [googleMapsUrl, socialLinks.instagram, socialLinks.facebook],
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
  areaServed: nearbyCities.map((name) => ({ "@type": "City", name })),
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Plateaux de fromages sur mesure", url: `${siteUrl}/plateaux-de-fromages` },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Pièces montées et buffets de fromages pour événements", url: `${siteUrl}/evenements` },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Livraison de fromages à domicile", url: `${siteUrl}/livraison` },
    },
  ],
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
