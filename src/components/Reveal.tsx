import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

/** Pass-through wrapper — kept so section markup stays stable without motion. */
export function Reveal({
  children,
  className = "",
  style,
  as: Tag = "div",
}: RevealProps) {
  return (
    <Tag className={className || undefined} style={style}>
      {children}
    </Tag>
  );
}
