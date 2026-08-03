import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a rooftop assessment from Solarhub Technology Ltd. in Chattogram.",
};

export default function ContactPage() {
  return <ContactSection asPage />;
}
