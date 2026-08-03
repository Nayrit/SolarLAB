import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { headers } from "next/headers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import "@/styles/modernist.css";
import "@/styles/site.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
  variable: "--font-archivo",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Solarhub Technology Ltd.",
    template: "%s · Solarhub Technology",
  },
  description:
    "Rooftop solar under the zero-capital OPEX model for industry and institutions across Bangladesh.",
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read request headers so CSP nonces from proxy.ts apply (forces dynamic render).
  await headers();

  return (
    <html lang="en" className={archivo.variable}>
      <body className={archivo.className}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
