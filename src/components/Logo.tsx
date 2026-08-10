import Image from "next/image";
import Link from "next/link";
import { safeInternalHref } from "@/lib/validation";

type LogoProps = {
  href?: string;
  /** Light lockup for green/dark surfaces. */
  light?: boolean;
  showSubtitle?: boolean;
  /** Display height in CSS pixels (width scales with the lockup). */
  size?: number;
};

const LOGO_SRC = "/brand/solarhub-logo.png";
const LOGO_SRC_LIGHT = "/brand/solarhub-logo-light.png";
const LOGO_ASPECT = 405 / 73;

export function Logo({
  href = "/",
  light = false,
  size = 40,
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
        src={light ? LOGO_SRC_LIGHT : LOGO_SRC}
        alt="Solarhub Technology Ltd."
        width={width}
        height={height}
        priority
        style={{
          width: "auto",
          height,
          maxWidth: "min(280px, 68vw)",
          objectFit: "contain",
        }}
      />
    </Link>
  );
}
