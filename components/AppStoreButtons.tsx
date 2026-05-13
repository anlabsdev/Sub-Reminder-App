import type { ReactNode } from "react";
import { Apple, Download, Play, Smartphone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type AppStoreButtonsProps = {
  className?: string;
  showIos?: boolean;
};

export function AppStoreButtons({
  className = "",
  showIos = true,
}: AppStoreButtonsProps) {
  return (
    <div className={`store-buttons ${className}`}>
      <a
        className="store-button store-button-primary"
        href={siteConfig.appLinks.playStore}
        target="_blank"
        rel="noreferrer"
        aria-label="Download SubReminder on Google Play"
      >
        <Play aria-hidden="true" />
        <span>
          <small>Download on</small>
          Google Play
        </span>
      </a>

      {showIos ? (
        <a
          className="store-button store-button-secondary"
          href="#ios-coming-soon"
          aria-label="View iOS coming soon details"
        >
          <Apple aria-hidden="true" />
          <span>
            <small>iOS app</small>
            Coming soon
          </span>
        </a>
      ) : null}
    </div>
  );
}

export function DownloadTextButton({
  href = siteConfig.appLinks.playStore,
  children = "Download for Android",
}: {
  href?: string;
  children?: ReactNode;
}) {
  return (
    <a className="text-cta" href={href} target="_blank" rel="noreferrer">
      <Download aria-hidden="true" />
      {children}
    </a>
  );
}

export function PhoneBadge({ children }: { children: ReactNode }) {
  return (
    <span className="phone-badge">
      <Smartphone aria-hidden="true" />
      {children}
    </span>
  );
}
