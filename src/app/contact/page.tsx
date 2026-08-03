import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a rooftop assessment from Solarhub Technology Ltd. in Chattogram.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Tell us about your roof"
        description="Share your location, rooftop area and monthly bill — we'll return an indicative capacity, tariff and savings estimate."
      />
      <ContactSection />
    </>
  );
}
