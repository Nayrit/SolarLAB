import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested does not exist on Solarhub Technology.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="container section" style={{ minHeight: "50vh" }}>
      <p className="kicker">404</p>
      <h1 className="display" style={{ maxWidth: "14ch" }}>
        Page not found
      </h1>
      <p className="lede" style={{ maxWidth: "46ch" }}>
        That URL is not part of the Solarhub site. Head home or request a
        rooftop assessment.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <Link
          href="/"
          className="btn btn-primary"
          style={{ textDecoration: "none", padding: "14px 22px" }}
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="btn"
          style={{ textDecoration: "none", padding: "14px 22px" }}
        >
          Assess my roof
        </Link>
      </div>
    </section>
  );
}
