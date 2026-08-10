import { company } from "@/lib/content";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export const privacyPolicy = {
  title: "Privacy Policy",
  updated: "10 August 2026",
  intro:
    "This Privacy Policy explains how Solarhub Technology Ltd. (“Solarhub”, “we”, “us”) collects, uses and protects personal information when you visit our website or contact us. We operate in Bangladesh and design this notice for visitors and business contacts of our company portfolio site.",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        `${company.name} is a private limited company registered under the Companies Act 1994 (Reg. No. ${company.regNo}). Our registered office is at ${company.office}.`,
        `For privacy questions, email ${company.email} or call ${company.phones[0].label}.`,
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "We collect information you choose to give us and limited technical data needed to run the site.",
      ],
      bullets: [
        "Contact & assessment form: name, organisation, email, phone, and any message details you submit (for example roof area or electricity bill context).",
        "Communications: if you email or call us, we keep the details needed to respond.",
        "Cookies & similar storage: a small preference record for cookie consent (stored in your browser). Essential operation of the site does not require tracking cookies.",
        "Server logs (limited): our host may process IP address, browser type, and request timing for security, abuse prevention and reliability.",
      ],
    },
    {
      heading: "How we use information",
      paragraphs: ["We use personal information only for legitimate business purposes:"],
      bullets: [
        "Responding to rooftop assessment requests and commercial enquiries.",
        "Improving our website and protecting it against spam, fraud and abuse.",
        "Complying with legal obligations that apply to us in Bangladesh.",
        "If you accept optional cookies in future, measuring aggregate site usage (analytics) — only after consent.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "We use a consent preference stored locally in your browser so we remember Accept or Reject. That preference is not used to identify you for advertising.",
        "Today the site does not load third-party analytics or advertising cookies. If we add optional analytics later, they will run only when you have Accepted. You can change your choice anytime via “Cookie settings” in the footer.",
      ],
    },
    {
      heading: "Sharing",
      paragraphs: [
        "We do not sell personal information. We may share data with trusted processors who help us operate (for example website hosting or email delivery), under obligations to keep it secure and use it only for our instructions. We may disclose information if required by law or to protect our rights and users’ safety.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "Enquiry and form data is kept only as long as needed to handle your request and related follow-up, then deleted or anonymised unless a longer period is required for legal, accounting or dispute reasons. Cookie preferences remain in your browser until you clear site data or change the setting.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We apply practical safeguards appropriate to a company website (HTTPS, validated and rate-limited form submissions, security headers). No method of transmission or storage is perfectly secure; please avoid sending highly sensitive personal documents through the public contact form.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You may ask us to access, correct or delete personal information we hold about you, or withdraw consent where processing is based on consent, by contacting us using the details above. You can also Reject optional cookies or clear your browser storage.",
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        "This website is intended for business and institutional contacts. We do not knowingly collect personal information from children.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The “Last updated” date at the top of the page will change when we do. Continued use of the site after an update means you should review the revised notice.",
      ],
    },
  ] satisfies LegalSection[],
};

export const termsOfUse = {
  title: "Terms of Use",
  updated: "10 August 2026",
  intro:
    "These Terms of Use govern access to the Solarhub Technology Ltd. website. By using this site you agree to these terms. If you do not agree, please do not use the site.",
  sections: [
    {
      heading: "Informational website",
      paragraphs: [
        "Content on this site describes our company, services and OPEX rooftop solar model for general information. Figures, timelines, discounts, capacity examples and simulated plant telemetry are illustrative unless confirmed in a signed agreement.",
      ],
    },
    {
      heading: "No online contract for power or projects",
      paragraphs: [
        "Submitting a contact or assessment form, requesting a quote, or reading tariff/savings examples does not create a Power Purchase Agreement (PPA), EPC contract, or any other binding commercial commitment. Binding terms arise only through documents signed by authorised representatives of Solarhub and the relevant parties.",
      ],
    },
    {
      heading: "Accuracy and availability",
      paragraphs: [
        "We aim to keep information current but do not warrant that all content is complete, error-free or suitable for a particular decision. The site may be unavailable or changed without notice. You are responsible for verifying critical facts with us before relying on them.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        `Text, branding, logos, graphics and layout on this site are owned by ${company.name} or used with permission. You may not copy, scrape or reuse them for commercial purposes without our prior written consent, except for fair personal reference or as allowed by law.`,
      ],
    },
    {
      heading: "Acceptable use",
      paragraphs: [
        "You agree not to misuse the site — including attempting to disrupt it, probe it without authorisation, submit spam or malware, or use automated means that overload our systems. Form submissions must be truthful and sent only for legitimate business enquiries.",
      ],
    },
    {
      heading: "Third-party links",
      paragraphs: [
        "Links to external sites are provided for convenience. We are not responsible for their content, policies or practices.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by applicable law, Solarhub is not liable for any indirect, incidental or consequential loss arising from use of this website or reliance on its content. Nothing in these terms excludes liability that cannot be limited under Bangladesh law.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of Bangladesh. Courts in Bangladesh have exclusive jurisdiction over disputes arising from use of this site, without prejudice to any mandatory consumer protections that may apply.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `Questions about these Terms: ${company.email} · ${company.phones[0].label}. Registered office: ${company.officeShort}.`,
      ],
    },
  ] satisfies LegalSection[],
};
