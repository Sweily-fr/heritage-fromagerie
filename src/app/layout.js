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

export const metadata = {
  title: {
    default: "L'Héritage - Fromagerie Artisanale",
    template: "%s | L'Héritage",
  },
  description:
    "Bienvenue chez L'Héritage, votre fromagerie artisanale. Explorez notre sélection de fromages, crèmerie, et épicerie fine, soigneusement choisis pour ravir vos papilles.",
  keywords: [
    "fromagerie",
    "artisanale",
    "fromages",
    "crèmerie",
    "épicerie fine",
    "L'Héritage",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${raleway.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <SmoothSnap />
      </body>
    </html>
  );
}
