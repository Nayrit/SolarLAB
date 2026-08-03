import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
  breadcrumbs?: Crumb[];
};

export function PageHero({
  kicker,
  title,
  description,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="container" style={{ paddingInline: 0 }}>
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}
