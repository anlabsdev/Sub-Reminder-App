import Image from "next/image";
import { Menu } from "lucide-react";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#app-preview", label: "App Preview" },
  { href: "#download", label: "Download" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand-link" href="#top" aria-label="SubReminder home">
          <Image
            src={siteConfig.assets.logo}
            alt=""
            width={38}
            height={38}
            className="brand-logo"
          />
          <span>{siteConfig.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="desktop-cta">
          <AppStoreButtons />
        </div>

        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <Menu aria-hidden="true" />
          </summary>
          <div className="mobile-nav-panel">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <AppStoreButtons />
          </div>
        </details>
      </div>
    </header>
  );
}
