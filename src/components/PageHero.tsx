import { Reveal } from "@/components/Reveal";

type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
};

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="container" style={{ paddingInline: 0, position: "relative" }}>
        <Reveal>
          <span className="kicker">{kicker}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </Reveal>
      </div>
    </div>
  );
}
