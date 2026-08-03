const items = [
  "Reg. CH-16658",
  "RE Policy 2025",
  "SREDA Net Metering 2025",
  "Tripartite PPA · WZPDCL",
  "Khulna Shipyard · signed 13 May 2026",
  "Zero client capital",
  "22-year power purchase terms",
  "OPEX rooftop solar · Bangladesh",
];

export function CredentialMarquee() {
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
