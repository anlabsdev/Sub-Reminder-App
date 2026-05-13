export const siteConfig = {
  name: "SubReminder",
  url: "https://subreminder.app",
  supportEmail: "anlabs.dev@gmail.com",
  developer: {
    name: "AAN Labs",
    email: "anlabs.dev@gmail.com",
    note: "SubReminder is developed by AAN Labs. The website can later connect with the AAN Labs site for support, updates, and more product information.",
  },
  headline: "Subscription reminders without the surprise charges.",
  description:
    "Track subscriptions, payment dates, renewal reminders, and upcoming charges in one simple Android app.",
  appLinks: {
    playStore:
      "https://play.google.com/store/apps/details?id=anlabs.subreminder",
    downloadPage: "/download",
    qrTarget: "https://subreminder.app/download",
  },
  assets: {
    logo: "/assets/logo.png",
    qrCode: "/assets/qr/download-qr.svg",
    banner: "/assets/app/subreminder-banner.png",
    heroPreview: "/assets/app/home.png",
    appPreviews: [
      {
        src: "/assets/app/home.png",
        title: "Home dashboard",
        alt: "SubReminder home dashboard with upcoming renewals and monthly totals.",
        width: 1024,
        height: 1536,
      },
      {
        src: "/assets/app/add.png",
        title: "Add subscription",
        alt: "SubReminder add subscription flow with price and renewal details.",
        width: 1024,
        height: 1536,
      },
      {
        src: "/assets/app/calendar.png",
        title: "Calendar planning",
        alt: "SubReminder calendar view showing subscription payment dates.",
        width: 1024,
        height: 1536,
      },
      {
        src: "/assets/app/summary.png",
        title: "Spending summary",
        alt: "SubReminder summary view with subscription spending insights.",
        width: 1024,
        height: 1536,
      },
      {
        src: "/assets/app/settings.png",
        title: "Settings",
        alt: "SubReminder settings view for reminders and app preferences.",
        width: 1024,
        height: 1536,
      },
    ],
  },
} as const;

export type AppPreviewItem = (typeof siteConfig.assets.appPreviews)[number];
