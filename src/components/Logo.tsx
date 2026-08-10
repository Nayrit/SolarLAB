import Image from "next/image";
import Link from "next/link";
import { safeInternalHref } from "@/lib/validation";

type LogoProps = {
  href?: string;
  /** Reserved for dark footers — official mark already works on dark and light. */
  light?: boolean;
  showSubtitle?: boolean;
  /** Display height in CSS pixels (width scales with the lockup). */
  size?: number;
};

const LOGO_SRC = "/brand/solarhub-logo.png";
const LOGO_ASPECT = 405 / 73;

export function Logo({
  href = "/",
  size = 28,
}: LogoProps) {
  const safeHref = safeInternalHref(href) ?? "/";
  const height = size;
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Link
      href={safeHref}
      className="nav-brand brand-logo"
      aria-label="Solarhub Technology Ltd. home"
      style={{
        display: "inline-flex",
        alignItems: "center",
        marginRight: "auto",
        textDecoration: "none",
        lineHeight: 0,
      }}
    >
      <Image
        src={LOGO_SRC}
        alt="Solarhub Technology Ltd."
        width={width}
        height={height}
        priority
        style={{
          width: "auto",
          height,
          maxWidth: "min(220px, 58vw)",
          objectFit: "contain",
        }}
      />
    </Link>
  );
}
