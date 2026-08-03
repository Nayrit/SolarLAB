type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
};

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="container" style={{ paddingInline: 0 }}>
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
