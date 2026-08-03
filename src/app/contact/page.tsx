import type { Metadata } from "next";
import { ContactPageView } from "@/components/sections/ContactPageView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a rooftop assessment from Solarhub Technology Ltd. in Chattogram.",
};

export default function ContactPage() {
  return <ContactPageView />;
}
