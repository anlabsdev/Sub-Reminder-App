import Image from "next/image";
import { Bell, Check, ShieldCheck } from "lucide-react";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { siteConfig } from "@/lib/site-config";

const heroStats = [
  "Renewal alerts",
  "Monthly spending view",
  "Custom subscriptions",
];

export function Hero() {
  return (
    <section className="hero-section" id="top">
      {/* Ambient glow effects */}
      <div className="hero-glow hero-glow--left" aria-hidden="true" />
      <div className="hero-glow hero-glow--right" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <ShieldCheck aria-hidden="true" />
            Available now on Android
          </div>
          <h1>
            Sub<span className="text-gradient">Reminder</span>
          </h1>
          <p className="hero-lede">{siteConfig.headline}</p>
          <p className="hero-support">
            {siteConfig.description}
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <AppStoreButtons />
          </div>

          <ul className="hero-proof" aria-label="SubReminder highlights">
            {heroStats.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-label="SubReminder app preview">
          <div className="hero-banner-wrap">
            <Image
              className="hero-banner"
              src={siteConfig.assets.banner}
              alt="SubReminder brand banner with subscription app icons"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1040px) 92vw, 560px"
            />
          </div>
          <div className="renewal-ticket">
            <Bell aria-hidden="true" />
            <span>
              Netflix renews tomorrow
              <strong>$15.99</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
