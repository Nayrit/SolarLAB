"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary">
        <Logo showSubtitle />
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
        <div id="primary-nav" className={`nav-links${open ? " open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              style={{ textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ textDecoration: "none" }}
          >
            Assess my roof
          </Link>
        </div>
      </nav>
    </header>
  );
}
