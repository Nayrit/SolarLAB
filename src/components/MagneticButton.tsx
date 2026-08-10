"use client";

import Link from "next/link";
import {
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import { safeInternalHref } from "@/lib/validation";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  style?: CSSProperties;
};

export function MagneticButton({
  children,
  className = "btn btn-primary",
  href,
  type = "button",
  onClick,
  style,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const cacheSize = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    sizeRef.current = { w: el.offsetWidth, h: el.offsetHeight };
  }, []);

  const onMove = useCallback((e: MouseEvent) => {
    const { w, h } = sizeRef.current;
    if (!w || !h) return;
    // offsetX/Y avoid getBoundingClientRect on every move (forced reflow).
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setOffset({
      x: (x - w / 2) * 0.2,
      y: (y - h / 2) * 0.2,
    });
  }, []);

  const onLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  const sharedStyle: CSSProperties = {
    ...style,
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    willChange: "transform",
  };

  const safeHref = href ? safeInternalHref(href) : null;

  if (safeHref) {
    return (
      <Link
        ref={ref as never}
        href={safeHref}
        className={`magnetic ${className}`}
        onMouseEnter={cacheSize}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={sharedStyle}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as never}
      type={type}
      onClick={onClick}
      className={`magnetic ${className}`}
      onMouseEnter={cacheSize}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={sharedStyle}
    >
      {children}
    </button>
  );
}
