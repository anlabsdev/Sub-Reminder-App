import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy - SubReminder",
  description:
    "Privacy Policy for SubReminder, including local storage, optional cloud sync, purchases, and notifications.",
};

const sections = [
  {
    title: "Information You Enter",
    body: [
      "SubReminder may handle information that you manually enter, such as subscription names, prices, currencies, billing cycles, payment dates, trial dates, labels, notes, categories, reminder text, app settings, and reminder preferences.",
    ],
  },
  {
    title: "Local Device Storage",
    body: [
      "SubReminder stores app data locally on your device so the app can work offline and show reminders, summaries, and history.",
    ],
  },
  {
    title: "Optional Google Sign-In and Cloud Sync",
    body: [
      "If you choose to sign in with Google and enable Cloud Sync, SubReminder may process your email address, account identifier, synced subscriptions, synced reminders, and selected settings required for backup and restore.",
      "This cloud data is used only to back up, restore, and sync your SubReminder data across devices.",
    ],
  },
  {
    title: "Premium Purchases and Promo Codes",
    body: [
      "SubReminder uses Google Play Billing for Premium purchases. Google processes your payment information according to Google Play policies.",
      "SubReminder may process limited purchase-related data such as product ID, order ID, verification result, and premium entitlement status in order to verify and activate Premium access.",
    ],
  },
  {
    title: "Notifications and Alarm Permissions",
    body: [
      "SubReminder uses local notifications and Android alarm-related permissions to deliver renewal reminders, overdue reminders, and personal reminders.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "SubReminder does not sell user data and does not currently use ads, analytics SDKs, or crash-reporting SDKs in the current app build.",
      "When cloud backup, sign-in, or billing features are used, data may be processed by service providers that support app functionality, including Google Play and Firebase services.",
    ],
  },
  {
    title: "Contact",
    body: ["AAN Labs. Email: anlabs.dev@gmail.com"],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage
          eyebrow="Privacy"
          title="Privacy Policy for SubReminder"
          effectiveDate="April 14, 2026"
          intro="SubReminder is provided by AAN Labs. This policy explains what data SubReminder handles and how it is used."
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}
