export const company = {
  name: "Solarhub Technology Ltd.",
  shortName: "SOLARHUB",
  regNo: "CH-16658",
  registered: "11 May 2026",
  office:
    "Sena Kalayan Trade Center (SKTC), Level 4, 29 Agrabad C/A, Agrabad, Chattogram 4100, Bangladesh",
  officeShort: "SKTC, Level 4, 29 Agrabad C/A, Chattogram 4100",
  director: "Md. Sazzad Amin",
  phones: [
    { label: "+88 01819-251577", href: "tel:+8801819251577" },
    { label: "+88 01540-731004", href: "tel:+8801540731004" },
  ],
  email: "solarhubtechnology@gmail.com",
};

export const navLinks = [
  { href: "/model", label: "Model" },
  { href: "/services", label: "Services" },
  { href: "/flagship", label: "Flagship" },
  { href: "/group", label: "Group" },
  { href: "/faq", label: "FAQ" },
] as const;

export const heroStats = [
  { value: "1.788", unit: " MWp", label: "Flagship in construction" },
  { value: "22", unit: " YRS", label: "Power purchase term" },
  { value: "18", unit: " %", label: "Off-peak tariff discount" },
  { value: "0", unit: " BDT", label: "Capital from the client" },
];

export const aboutMeta = [
  { label: "Registered name", value: "Solarhub Technology Ltd." },
  { label: "Registration no.", value: "CH-16658" },
  { label: "Registered", value: "11 May 2026" },
  {
    label: "Registered office",
    value: "SKTC, Level 4, 29 Agrabad C/A, Chattogram 4100",
  },
  { label: "Business model", value: "OPEX rooftop solar" },
  { label: "Framework", value: "RE Policy 2025 · SREDA 2025" },
];

export const modelParties = [
  {
    role: "Power producer",
    title: "Solarhub Technology Ltd.",
    body: "Funds, builds, owns and operates the plant for the full term.",
  },
  {
    role: "Off-taker",
    title: "The client",
    body: "Hosts the system and buys only the power it consumes, below tariff.",
  },
  {
    role: "Distribution utility",
    title: "WZPDCL",
    body: "Provides interconnection and net metering of surplus energy.",
  },
];

export const services = [
  {
    num: "01",
    title: "EPC",
    body: "Turnkey engineering, procurement and construction of rooftop plants — one contract, one accountable team.",
    tags: "Design · Procure · Build · Test",
  },
  {
    num: "02",
    title: "OPEX solar",
    body: "The zero-capital model. We own and operate the plant; you buy the power you use, below the grid tariff.",
    tags: "We own · You save · No capital",
  },
  {
    num: "03",
    title: "CAPEX solar",
    body: "Client-owned systems for organisations that prefer to invest directly and hold the asset on their own books.",
    tags: "You own · We build · You run",
  },
  {
    num: "04",
    title: "Net metering",
    body: "Interconnection and bi-directional metering handled end to end under the SREDA Guideline 2025.",
    tags: "Interconnect · Bi-directional",
  },
  {
    num: "05",
    title: "Operation & maintenance",
    body: "Remote monitoring, cleaning and preventive maintenance that keep generation at peak across the term.",
    tags: "Monitor · Clean · Repair",
  },
  {
    num: "06",
    title: "Consultancy",
    body: "Feasibility studies, energy audits, financial modelling and regulatory advisory before a panel is ordered.",
    tags: "Feasibility · Audit · Advisory",
  },
];

export const flagshipStats = [
  { value: "1.788 MWp", label: "Capacity DC · 1.5 MW AC" },
  { value: "22 yrs", label: "Agreement term" },
  { value: "8,778 m²", label: "Rooftop area · 2 sheds" },
  { value: "18 %", label: "Off-peak tariff discount" },
];

export const flagshipParties = [
  { label: "Off-taker", value: "Khulna Shipyard Ltd." },
  { label: "Power producer", value: "Solarhub Technology Ltd." },
  { label: "Utility", value: "WZPDCL" },
  { label: "Signed", value: "13 May 2026, Khulna" },
  { label: "Framework", value: "RE Policy 2025 · SREDA 2025" },
];

export const industries = [
  { title: "Government", body: "Offices, agencies and public facilities" },
  { title: "Defence", body: "Naval and defence installations" },
  { title: "Manufacturing", body: "Factories and heavy industry" },
  { title: "Textile & RMG", body: "Mills, dyeing and garment units" },
  { title: "Commercial", body: "Malls, offices and retail" },
  { title: "Healthcare", body: "Hospitals and clinics" },
  { title: "Education", body: "Universities, schools and campuses" },
  { title: "Ports & logistics", body: "Ports, depots and warehouses" },
];

export const processSteps = [
  {
    num: "01",
    title: "Consultation",
    body: "We map your load profile, roof and savings goals, then agree the commercial model and tariff.",
  },
  {
    num: "02",
    title: "Survey",
    body: "Structural, electrical and shading assessment carried out on site by our engineers.",
  },
  {
    num: "03",
    title: "Design",
    body: "System sizing, single-line design and energy-yield modelling for your specific roof.",
  },
  {
    num: "04",
    title: "Installation",
    body: "Mounting, module and inverter installation to standard, HSE-first, with minimal disruption to operations.",
  },
  {
    num: "05",
    title: "Commissioning",
    body: "Grid interconnection, net-meter setup and full performance testing before handover.",
  },
  {
    num: "06",
    title: "Maintenance",
    body: "Monitoring, cleaning and preventive O&M across the full agreement term — the plant stays ours to run.",
  },
];

export const groupStats = [
  { value: "5", label: "Sister companies" },
  { value: "5", label: "Industry sectors" },
  { value: "ISO 9001", label: "Certified manufacturing" },
  { value: "20+ yrs", label: "Industrial heritage" },
];

export const sisterCompanies = [
  {
    tag: "Garments · est. 2001",
    title: "Peak Apparels Ltd.",
    body: "100% export-oriented knit and woven manufacturer: a 42,000 sq ft facility, around 550 staff and 275 machines from Japan and Taiwan; GOTS and social-compliance certified.",
  },
  {
    tag: "Specialty paper · ISO 9001:2015",
    title: "Master Simex Paper Ltd.",
    body: "600+ staff across three facilities, 25,000+ MT a year and 95% client retention. Produces secure government OMR sheets and bank SWIFT papers on solar-powered production.",
  },
  {
    tag: "PVC roofing manufacturer",
    title: "Peak Polymer Ltd.",
    body: "Manufacturer of PVC industrial roofing sheet with a strong local presence, producing EuroRoof® on a technologically advanced process.",
  },
  {
    tag: "Real estate & construction",
    title: "Tripax Homes Ltd.",
    body: "Developer with completed projects in Gulshan and Uttara, currently delivering developments within the Jalshiri Housing Project.",
  },
  {
    tag: "Starch & sweeteners",
    title: "Alternate Chemical Industry Ltd.",
    body: "Operates a factory in Habiganj producing starch and sweeteners for local clients, with plans to manufacture pharmaceutical-grade starch.",
  },
];

export const pipeline = [
  {
    title: "Armed Police Battalion (APBn)",
    body: "Rooftop solar for facilities nationwide",
    status: "In negotiation",
  },
  {
    title: "Bangladesh Coast Guard",
    body: "Rooftop solar for coastal bases",
    status: "In negotiation",
  },
  {
    title: "Mongla Port Authority",
    body: "Rooftop solar for port infrastructure",
    status: "In negotiation",
  },
];

export const faqs = [
  {
    q: "What does the client actually pay for?",
    a: "Only the electricity generated and consumed on site, billed per unit at an agreed discount to the grid tariff. No capital contribution, no equipment purchase, no maintenance charge.",
  },
  {
    q: "Who owns and maintains the system?",
    a: "Solarhub owns the plant and runs it for the full term — monitoring, cleaning and preventive maintenance included. Generation performance is our responsibility, not yours.",
  },
  {
    q: "What happens to surplus generation?",
    a: "Excess energy is exported through a bi-directional meter and credited under the SREDA Net Metering Guideline 2025, with the distribution utility as a party to the agreement.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on roof area, structural condition and utility approvals. We issue an indicative schedule after the site survey, alongside the yield model and tariff proposal.",
  },
  {
    q: "Can we buy the system outright instead?",
    a: "Yes. Under CAPEX we design, build and commission a client-owned plant, with an optional O&M contract afterwards. Every service is available under either model.",
  },
];
