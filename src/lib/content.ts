export const company = {
  name: "Solarhub Technology Ltd.",
  shortName: "SOLARHUB",
  regNo: "CH-16658/2026",
  registered: "11 May 2026",
  legalStatus: "Private Limited Company under the Companies Act 1994",
  tradeLicense: "TRAD/DSCC/002274/2026",
  tradeLicenseAuthority: "Dhaka South City Corporation",
  office:
    "Sena Kalayan Trade Center (SKTC), Level 4, 29 Agrabad C/A, Agrabad, Chattogram 4100, Bangladesh",
  officeShort: "SKTC, Level 4, 29 Agrabad C/A, Chattogram 4100",
  corporateOffice:
    "House No. 13/B, Road No. 99, Gulshan-2, Dhaka, Bangladesh",
  corporateOfficeShort: "House 13/B, Road 99, Gulshan-2, Dhaka",
  businessAddress:
    "62/221, Box Culvert Road, Purana Paltan (16th Floor), Dhaka 1000",
  businessAddressShort: "Purana Paltan (16th Floor), Dhaka 1000",
  managingDirector: "Muhammad Abu Hasan",
  phones: [
    { label: "+88 01540-731004", href: "tel:+8801540731004" },
  ],
  email: "solarhubtechnology@gmail.com",
  opexLine:
    "We carry the capital and the risk. The client pays only for the clean power they use, at an agreed discount to the grid tariff under the PPA.",
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/model", label: "Model" },
  { href: "/services", label: "Services" },
  { href: "/flagship", label: "Flagship" },
  { href: "/group", label: "Group" },
  { href: "/faq", label: "FAQ" },
] as const;

/** Primary CTA — the only header path to contact */
export const navCta = {
  href: "/contact",
  label: "Assess my roof",
} as const;

export const footerNav = {
  explore: [
    { href: "/about", label: "About" },
    { href: "/model", label: "Model" },
    { href: "/services", label: "Services" },
    { href: "/flagship", label: "Flagship" },
    { href: "/group", label: "Group" },
    { href: "/faq", label: "FAQ" },
  ],
  more: [
    { href: "/leadership", label: "Leadership" },
    { href: "/technology", label: "Technology" },
  ],
} as const;

export const heroStats = [
  { value: "1.788", unit: " MWp", label: "Flagship in construction" },
  { value: "22", unit: " YRS", label: "Power purchase term" },
  { value: "18", unit: " %", label: "Off-peak tariff discount" },
  { value: "0", unit: " BDT", label: "Capital from the client" },
];

export const aboutMeta = [
  { label: "Registered name", value: "Solarhub Technology Ltd." },
  { label: "Registration no.", value: "CH-16658/2026" },
  { label: "Incorporated", value: "11 May 2026 · RJSC" },
  { label: "Legal status", value: "Private Limited · Companies Act 1994" },
  {
    label: "Registered office",
    value: "SKTC, Level 4, 29 Agrabad C/A, Chattogram 4100",
  },
  {
    label: "Corporate office",
    value: "House 13/B, Road 99, Gulshan-2, Dhaka",
  },
  {
    label: "Business address",
    value: "62/221 Box Culvert Road, Purana Paltan (16F), Dhaka 1000",
  },
  {
    label: "Trade license",
    value: "TRAD/DSCC/002274/2026 · DSCC",
  },
  { label: "Business model", value: "OPEX rooftop solar" },
  { label: "Framework", value: "RE Policy 2025 · SREDA 2025" },
];

export const visionMission = {
  vision:
    "To make clean, self-generated solar power the default choice for Bangladesh's industry: cutting energy costs and carbon without asking clients to invest a single taka in capital.",
  mission:
    "To fund, engineer, install, and operate rooftop solar under transparent tripartite agreements, so partners pay only for the clean power they use, reliably and below the grid tariff.",
};

export const coreValues = [
  {
    title: "Zero-capital partnership",
    body: "We carry the investment so clients never have to.",
  },
  {
    title: "Engineering discipline",
    body: "Every plant is designed, built and tested to standard.",
  },
  {
    title: "Regulatory rigor",
    body: "Full compliance with RE Policy and SREDA guidelines.",
  },
  {
    title: "Long-term operation",
    body: "We run and maintain what we build, for the full term.",
  },
  {
    title: "Transparency",
    body: "Clear tariffs, clear metering, clear agreements.",
  },
  {
    title: "Sustainability",
    body: "Measurable carbon avoidance on every rooftop.",
  },
];

export const leadership = [
  {
    role: "Chairman",
    name: "Dewan Ali Kabir",
    highlight: "Managing Director, Master Simex Paper Limited",
    image: "/leadership/dewan-ali-kabir.jpg",
    body: "Chairman of Solarhub Technology Ltd. and Managing Director of Master Simex Paper Limited, an ISO 9001:2015-certified specialty paper manufacturer within Emerging Group Bangladesh. Over 25 years of business leadership, with a degree in Finance from the University of Dhaka. Under his stewardship Master Simex has grown into one of the country's leading paper converting and printing businesses — multiple production facilities, a large industrial workforce, and supply relationships spanning government and banking clients. That industrial and financial depth underpins Solarhub's capacity to fund and deliver long-term OPEX rooftop plants.",
  },
  {
    role: "Managing Director",
    name: "Muhammad Abu Hasan",
    highlight: "Chief Engineer (Marine) · 30+ years",
    image: "/leadership/muhammad-abu-hasan.jpg",
    body: "Managing Director of Solarhub Technology Ltd. A Chief Engineer with more than 30 years of experience in the marine industry, actively involved in marine-related business and technical operations. His engineering discipline and operational leadership guide Solarhub's project delivery, safety standards and long-term plant performance.",
  },
  {
    role: "Director",
    name: "Mohammad Nasimul Huq",
    highlight: "Chief Engineer (Marine) · Bangladesh Marine Academy",
    image: "/leadership/mohammad-nasimul-huq.jpg",
    body: "Director of Solarhub Technology Ltd. A Chief Engineer (Marine) and graduate of Bangladesh Marine Academy, Juldia, Chattogram, with extensive experience in marine engineering and technical management on foreign-going vessels. Brings rigorous technical judgement to Solarhub's engineering and commissioning standards, and represented the company on the Khulna Shipyard Limited tripartite rooftop solar agreement.",
  },
  {
    role: "Director",
    name: "Md. Sazzad Amin",
    highlight: "Managing Director, Peak Apparels Ltd.",
    image: "/leadership/md-sazzad-amin.jpg",
    body: "Director of Solarhub Technology Ltd. and Managing Director of Peak Apparels Limited. Holds a B.Sc. in Marine Engineering with over 25 years of business experience spanning garments manufacturing, project management and corporate finance. His group leadership across Peak Apparels and related concerns strengthens Solarhub's commercial execution and industrial partnerships.",
  },
];

export const whySolarhub = [
  {
    title: "Zero capital outlay",
    body: "Solarhub funds the entire system. Clients invest nothing and own no equipment risk.",
    tag: "Funded by Solarhub",
  },
  {
    title: "Power below tariff",
    body: "Clients pay only for power consumed, at a discount to the grid tariff, saving from day one.",
    tag: "Up to 18% off-peak",
  },
  {
    title: "In-house engineering",
    body: "Turnkey EPC capability: design, procurement, installation and commissioning under one roof.",
    tag: "Single accountable partner",
  },
  {
    title: "Regulatory expertise",
    body: "Tripartite agreements structured under RE Policy 2025 and the SREDA Net Metering Guideline 2025.",
    tag: "Policy-aligned structuring",
  },
  {
    title: "Backed by industry",
    body: "Leadership drawn from established groups — Master Simex Paper and Peak Apparels — anchoring financial strength.",
    tag: "600+ staff heritage",
  },
  {
    title: "Proven flagship",
    body: "A signed, in-construction 1.788 MWp project with Khulna Shipyard, a Bangladesh Navy installation.",
    tag: "Defence-sector flagship",
  },
];

export const modelParties = [
  {
    role: "Power producer",
    title: "Solarhub Technology Ltd.",
    body: "Funds, builds, owns and operates the rooftop plant.",
  },
  {
    role: "Off-taker",
    title: "The client",
    body: "Hosts the system on its roof and buys the power it uses, below tariff.",
  },
  {
    role: "Distribution utility",
    title: "WZPDCL",
    body: "Provides grid interconnection and net metering of surplus energy.",
  },
];

export const howItWorks = [
  {
    num: "01",
    title: "Solarhub invests",
    body: "We fund and build the plant on the client's roof at no cost to them.",
  },
  {
    num: "02",
    title: "System generates",
    body: "Clean solar power is produced and consumed on site during the day.",
  },
  {
    num: "03",
    title: "Client pays per unit",
    body: "The client pays only for what it uses, at a discount to the grid tariff.",
  },
  {
    num: "04",
    title: "Surplus net-metered",
    body: "Excess energy is exported to the grid and credited via net metering.",
  },
];

export const services = [
  {
    num: "01",
    title: "EPC",
    body: "Turnkey engineering, procurement and construction of rooftop solar plants.",
    tags: "Design · Procure · Build · Test",
  },
  {
    num: "02",
    title: "OPEX solar",
    body: "Zero-capital model: we own and operate; you pay only for power used, below tariff.",
    tags: "We own · You save · No capital",
  },
  {
    num: "03",
    title: "CAPEX solar",
    body: "Client-owned systems for organisations that prefer to invest directly.",
    tags: "You own · We build · You run",
  },
  {
    num: "04",
    title: "Net metering",
    body: "Grid interconnection and net metering under the SREDA Guideline 2025.",
    tags: "Interconnect · Bi-directional",
  },
  {
    num: "05",
    title: "O & M",
    body: "Operation, monitoring and maintenance keeping generation at peak across the term.",
    tags: "Monitor · Clean · Repair",
  },
  {
    num: "06",
    title: "Consultancy",
    body: "Feasibility, energy audits, financial modelling and regulatory advisory.",
    tags: "Feasibility · Audit · Advisory",
  },
];

export const flagshipStats = [
  { value: "1.788 MWp", label: "Capacity DC · 1.5 MW AC" },
  { value: "22 yrs", label: "Agreement term" },
  { value: "8,778 m²", label: "Rooftop area · 2 sheds" },
  { value: "18 %", label: "Off-peak tariff discount" },
];

export const flagshipSheds = [
  { shed: "Shed-1 · Platter Shop", area: "7,865", kwp: "1,608.9" },
  { shed: "Shed-2 · Machine Shop", area: "913", kwp: "185.9" },
  { shed: "Total", area: "8,778", kwp: "1,788.8" },
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
    body: "Understand the client's load profile, roof, and savings goals; agree the commercial model and tariff.",
  },
  {
    num: "02",
    title: "Survey",
    body: "Structural, electrical and shading assessment carried out on site.",
  },
  {
    num: "03",
    title: "Design",
    body: "System sizing, single-line design and energy-yield modelling.",
  },
  {
    num: "04",
    title: "Installation",
    body: "Mounting, module and inverter installation to standard, HSE-first.",
  },
  {
    num: "05",
    title: "Commissioning",
    body: "Grid interconnection, net-meter setup and full performance testing.",
  },
  {
    num: "06",
    title: "Maintenance",
    body: "Monitoring, cleaning and preventive O&M across the full agreement term.",
  },
];

export const technology = [
  {
    title: "Solar PV modules",
    body: "Tier-1, IEC-certified PV modules.",
    tag: "Tier-1, IEC-certified",
  },
  {
    title: "Inverters",
    body: "String / central inverters with grid support.",
    tag: "Grid-tied, SREDA-approved",
  },
  {
    title: "Battery storage",
    body: "Optional lithium storage for resilience.",
    tag: "Optional, sized per site",
  },
  {
    title: "Monitoring & SCADA",
    body: "Real-time generation monitoring & alerts.",
    tag: "Remote performance monitoring",
  },
  {
    title: "Mounting structures",
    body: "Corrosion-resistant roof mounting systems.",
    tag: "Corrosion-resistant",
  },
  {
    title: "Metering",
    body: "Bi-directional net-metering equipment.",
    tag: "Bi-directional net meter",
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
    body: "100% export-oriented knit & woven manufacturer. A 42,000 sq ft facility, around 550 staff and 275 machines from Japan & Taiwan; GOTS and international social-compliance certified.",
  },
  {
    tag: "Specialty paper · ISO 9001:2015",
    title: "Master Simex Paper Ltd.",
    body: "600+ staff across three facilities, 25,000+ MT a year and 95% client retention. Produces secure government OMR sheets and bank SWIFT papers with solar-powered production.",
  },
  {
    tag: "PVC roofing manufacturer",
    title: "Peak Polymer Ltd.",
    body: "Manufacturer of PVC industrial roofing sheet with a strong presence in the local market, using a technologically advanced process to produce EuroRoof®.",
  },
  {
    tag: "Real estate & construction",
    title: "Tripax Homes Ltd.",
    body: "Real-estate developer with completed projects in Gulshan and Uttara, currently delivering developments within the Jalshiri Housing Project.",
  },
  {
    tag: "Starch & sweeteners",
    title: "Alternate Chemical Industry Ltd.",
    body: "Operates a factory in Habiganj producing starch and sweeteners for local clients, with plans to manufacture pharmaceutical-grade starch.",
  },
];

export const pipeline = [
  {
    title: "Defence & security campuses",
    body: "Large institutional rooftops with long operating horizons.",
    status: "Target segment",
  },
  {
    title: "Coastal & maritime facilities",
    body: "Bases, yards and related infrastructure suited to OPEX rooftop solar.",
    status: "Target segment",
  },
  {
    title: "Ports & logistics hubs",
    body: "High daytime load centres with expansive shed roofs.",
    status: "Target segment",
  },
];

export const pipelineFocus = [
  "Large industrial and institutional rooftops",
  "Creditworthy, long-horizon off-takers",
  "Government and defence-linked institutions",
  "Power purchase terms tailored to the customer",
];

export const partnerReasons = [
  {
    title: "Zero capital from you",
    body: "Solarhub funds the entire system.",
  },
  {
    title: "Savings begin day one",
    body: "Cheaper clean energy from day one.",
  },
  {
    title: "1.788 MWp flagship signed",
    body: "A signed, in-construction defence-sector project.",
  },
  {
    title: "Backed by industry",
    body: "Established industrial groups behind us.",
  },
  {
    title: "Regulatory expertise",
    body: "Net-metering structures aligned to SREDA guidance.",
  },
  {
    title: "We run it for the term",
    body: "Operation and maintenance included.",
  },
];

export const faqs = [
  {
    q: "What does the client actually pay for?",
    a: "Only the electricity generated and consumed on site, billed per unit at an agreed discount to the grid tariff under the PPA. No capital contribution and no equipment purchase from the client under the OPEX model.",
  },
  {
    q: "Who owns and maintains the system?",
    a: "Under our OPEX agreements, Solarhub owns the plant and provides monitoring, cleaning and preventive maintenance for the contract term. Performance and charges are as set out in the signed documents.",
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
