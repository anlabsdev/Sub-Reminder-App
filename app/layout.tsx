import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "SubReminder - Subscription Reminder App",
  description:
    "Download SubReminder for Android and track subscriptions, renewal dates, payments, and reminders in one simple app. iOS coming soon.",
  applicationName: siteConfig.name,
  keywords: [
    "SubReminder",
    "subscription reminder app",
    "subscription tracker",
    "renewal reminders",
    "Android subscription app",
  ],
  openGraph: {
    title: "SubReminder - Subscription Reminder App",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.assets.banner,
        width: 1200,
        height: 630,
        alt: "SubReminder app preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SubReminder - Subscription Reminder App",
    description: siteConfig.description,
    images: [siteConfig.assets.banner],
  },
};

export const viewport: Viewport = {
  themeColor: "#06091a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
