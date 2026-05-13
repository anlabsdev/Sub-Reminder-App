type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  effectiveDate,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <section className="section legal-section">
      <div className="container legal-layout">
        <p className="section-kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="legal-date">Effective Date: {effectiveDate}</p>
        <p className="legal-intro">{intro}</p>

        <div className="legal-content">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
