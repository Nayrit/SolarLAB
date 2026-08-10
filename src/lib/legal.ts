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
    "This Privacy Policy explains how Solarhub Technology Ltd. (“Solarhub”, “we”, “us”) handles information when you visit our website or contact us. We operate in Bangladesh and design this notice for visitors and business contacts of our company portfolio site.",
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
        "We collect limited information you choose to give us and technical data needed to run and protect the site.",
      ],
      bullets: [
        "Contact form fields: name, organisation, email, preferred model, and optional message text. There is no phone field on the web form.",
        "Direct communications: if you email or call us, we keep the details needed to respond.",
        "Cookie preference: a small record in your browser remembering Accept or Reject for analytics.",
        "Google Analytics (only if you Accept): aggregate page views and traffic sources. IP anonymization is enabled. Reject disables this.",
        "Server logs (limited): our host may process IP address, browser type, and request timing for security, abuse prevention and reliability.",
      ],
    },
    {
      heading: "Contact form handling",
      paragraphs: [
        `Contact-form submissions are validated and rate-limited when our application server is available, then emailed to ${company.email} using free form-delivery services (FormSubmit and optionally Web3Forms) so we can reply. On some hosts a PHP mail fallback may also be used. We do not keep a separate database of form posts on this website.`,
      ],
    },
    {
      heading: "How we use information",
      paragraphs: ["We use personal information only for:"],
      bullets: [
        "Responding to commercial and rooftop-assessment enquiries.",
        "Understanding aggregate website traffic (if you accept analytics) so we can improve the site.",
        "Protecting the website against spam, fraud and abuse.",
        "Complying with legal obligations that apply to us in Bangladesh.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "Essential preference storage remembers your analytics choice. Google Analytics cookies load only after you Accept. You can change your choice anytime via “Cookie settings” in the footer, or clear site data in your browser.",
      ],
    },
    {
      heading: "Sharing",
      paragraphs: [
        "We do not sell personal information. Form delivery uses FormSubmit (and optionally Web3Forms) so your enquiry can reach our inbox. If you accept analytics, Google processes measurement data under their terms. Website hosting may process technical logs. We may disclose information if required by law or to protect our rights and users’ safety.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "Enquiry emails remain in our mailbox only as long as needed to handle your request and related follow-up, unless a longer period is required for legal or accounting reasons. Analytics retention follows your Google Analytics property settings. Cookie preferences remain in your browser until you clear them.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We apply practical safeguards appropriate to a company website (HTTPS, validated and rate-limited form submissions, security headers). No method of transmission is perfectly secure; please avoid sending highly sensitive personal documents through the public contact form.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You may ask us about personal information we hold from email or phone contact, and request correction or deletion where applicable, by using the details above. You can also clear your browser storage for this site.",
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
        "We may update this Privacy Policy from time to time. The “Last updated” date at the top of the page will change when we do. Please review the revised notice after updates.",
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
