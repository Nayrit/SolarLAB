import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { headers } from "next/headers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import {
  SITE,
  SITE_URL,
  SEO_PAGES,
  buildMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import "@/styles/modernist.css";
import "@/styles/site.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
  variable: "--font-archivo",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});

const homeMeta = buildMetadata(SEO_PAGES.home);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      SEO_PAGES.home.absoluteTitle ??
      "Solarhub Technology Ltd. — OPEX Rooftop Solar",
    template: "%s · Solarhub Technology",
  },
  description: SITE.description,
  applicationName: SITE.shortName,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Renewable Energy",
  keywords: SEO_PAGES.home.keywords,
  referrer: "origin-when-cross-origin",
  robots: homeMeta.robots,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: homeMeta.openGraph,
  twitter: homeMeta.twitter,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "BD-B",
    "geo.placename": "Chattogram",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f2f0" },
    { media: "(prefers-color-scheme: dark)", color: "#222421" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await headers();

  return (
    <html lang="en" className={archivo.variable}>
      <body className={archivo.className}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
