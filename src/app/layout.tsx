import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import "@/styles/modernist.css";
import "@/styles/site.css";

export const metadata: Metadata = {
  title: {
    default: "Solarhub Technology Ltd.",
    template: "%s · Solarhub Technology",
  },
  description:
    "Rooftop solar under the zero-capital OPEX model for industry and institutions across Bangladesh.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
