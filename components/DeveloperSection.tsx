import { Building2, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function DeveloperSection() {
  return (
    <section
      className="section developer-section"
      aria-labelledby="developer-title"
    >
      <div className="container developer-panel">
        <div className="developer-mark">
          <Building2 aria-hidden="true" />
        </div>
        <div>
          <p className="section-kicker">Developer</p>
          <h2 id="developer-title">Developed by {siteConfig.developer.name}</h2>
          <p>{siteConfig.developer.note}</p>
        </div>
        <a className="developer-mail" href={`mailto:${siteConfig.developer.email}`}>
          <Mail aria-hidden="true" />
          {siteConfig.developer.email}
        </a>
      </div>
    </section>
  );
}
