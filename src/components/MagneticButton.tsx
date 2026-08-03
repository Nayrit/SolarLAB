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
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.22, y: y * 0.22 });
  }, []);

  const onLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  const sharedStyle: CSSProperties = {
    ...style,
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
  };

  if (href) {
    return (
      <Link
        ref={ref as never}
        href={href}
        className={`magnetic ${className}`}
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
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={sharedStyle}
    >
      {children}
    </button>
  );
}
