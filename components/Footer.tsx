import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand-link footer-brand" href="#top">
            <Image
              src={siteConfig.assets.logo}
              alt=""
              width={38}
              height={38}
              className="brand-logo"
            />
            <span>{siteConfig.name}</span>
          </a>
          <p>
            Track subscriptions, renewal dates, and upcoming charges without
            surprise payments. Developed by {siteConfig.developer.name}.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <a href={`mailto:${siteConfig.supportEmail}`}>Contact</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>Copyright 2026 SubReminder. All rights reserved.</span>
      </div>
    </footer>
  );
}
