"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ maxWidth: 960 }}>
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} delay={i * 60}>
            <div className="faq-item" data-open={isOpen}>
              <button
                type="button"
                className="faq-trigger"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq-panel">
                <div className="faq-panel-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
