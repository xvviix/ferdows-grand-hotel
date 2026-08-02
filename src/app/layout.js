import { Cormorant_Garamond, Manrope, Vazirmatn } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { asset } from "@/lib/paths";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Ferdows Grand Hotel — Luxury Hotel in Tehran",
    template: "%s · Ferdows Grand Hotel",
  },
  description:
    "Ferdows Grand Hotel: a landmark of Persian elegance in Tehran. Rooms & suites, fine dining, and a legendary hammam & spa. Reserve your stay.",
  metadataBase: new URL("https://ferdowsgrand.com"),
  openGraph: {
    title: "Ferdows Grand Hotel — Luxury Hotel in Tehran",
    description:
      "A landmark of Persian elegance in the heart of old Tehran. Since 1972.",
    type: "website",
    images: [{ url: asset("images/hero.jpg"), width: 1400, height: 900 }],
  },
  icons: { icon: asset("favicon.svg") },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${cormorant.variable} ${manrope.variable} ${vazirmatn.variable}`}
    >
      <body>
        <LanguageProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
