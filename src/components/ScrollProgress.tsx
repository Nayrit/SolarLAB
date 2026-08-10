"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const maxRef = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const measure = () => {
      const doc = document.documentElement;
      maxRef.current = doc.scrollHeight - doc.clientHeight;
    };

    const paint = () => {
      ticking.current = false;
      const bar = barRef.current;
      if (!bar) return;
      const max = maxRef.current;
      const ratio = max > 0 ? document.documentElement.scrollTop / max : 0;
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(paint);
    };

    measure();
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={barRef} className="scroll-progress-bar" />
    </div>
  );
}
