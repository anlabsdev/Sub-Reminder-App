"use client";

import { useMemo, useSyncExternalStore } from "react";
import { MonitorDown, Play, Smartphone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Platform = "android" | "desktop";

function detectPlatform(userAgent: string): Platform {
  const normalized = userAgent.toLowerCase();

  if (normalized.includes("android")) {
    return "android";
  }

  return "desktop";
}

function subscribeToUserAgent() {
  return () => undefined;
}

function getUserAgentSnapshot() {
  return navigator.userAgent;
}

function getServerUserAgentSnapshot() {
  return "";
}

export function DownloadRouter() {
  const userAgent = useSyncExternalStore(
    subscribeToUserAgent,
    getUserAgentSnapshot,
    getServerUserAgentSnapshot,
  );
  const platform = detectPlatform(userAgent);

  const platformMessage = useMemo(() => {
    if (platform === "android") {
      return {
        icon: Play,
        title: "Android detected",
        text: "SubReminder is ready for your phone on Google Play.",
        cta: "Open Google Play",
        href: siteConfig.appLinks.playStore,
      };
    }

    return {
      icon: MonitorDown,
      title: "Choose your download",
      text: "Scan from desktop or open the store link for your device.",
      cta: "Open Google Play",
      href: siteConfig.appLinks.playStore,
    };
  }, [platform]);

  const Icon = platformMessage.icon;
  const recommendedAction = (
    <span>
      <small>Recommended</small>
      {platformMessage.cta}
    </span>
  );

  return (
    <section className="section download-router-section">
      <div className="container router-panel">
        <span className="router-icon">
          <Icon aria-hidden="true" />
        </span>
        <p className="section-kicker">Download page</p>
        <h1>{platformMessage.title}</h1>
        <p>{platformMessage.text}</p>

        <div className="router-actions">
          <a
            className="store-button store-button-primary"
            href={platformMessage.href}
            target="_blank"
            rel="noreferrer"
          >
            <Smartphone aria-hidden="true" />
            {recommendedAction}
          </a>
        </div>
      </div>
    </section>
  );
}
