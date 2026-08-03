"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div
      style={{ maxWidth: 960 }}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} delay={i * 60}>
            <div
              className="faq-item"
              data-open={isOpen}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                className="faq-trigger"
                id={`faq-trigger-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span itemProp="name">{item.q}</span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </button>
              <div
                className="faq-panel"
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
              >
                <div
                  className="faq-panel-inner"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{item.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
