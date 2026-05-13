import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions - SubReminder",
  description:
    "Terms and Conditions for using SubReminder, including free and premium access, billing, reminders, and data.",
};

const sections = [
  {
    title: "Using SubReminder",
    body: [
      "SubReminder helps you track subscriptions, renewal dates, trial periods, reminders, spending summaries, and related app settings.",
    ],
  },
  {
    title: "Free and Premium Access",
    body: [
      "SubReminder may be offered with a free tier and optional Premium access. In the current app configuration, the free tier supports up to 3 subscriptions.",
      "Premium may unlock unlimited subscriptions, cloud backup and restore, export tools, and other premium features.",
    ],
  },
  {
    title: "Purchases, Trials, and Offers",
    body: [
      "Premium access may be offered through Google Play subscriptions, prepaid plans, promo codes, one-time purchases, or other offers shown in the app or on Google Play.",
      "If a free trial, introductory price, renewal term, promo code, or other special offer is shown at checkout, the terms displayed there apply to that offer.",
    ],
  },
  {
    title: "Billing, Renewals, and Refunds",
    body: [
      "All purchases are processed through Google Play Billing. If you buy an auto-renewing subscription, it renews automatically unless you cancel it through Google Play before the next renewal date.",
      "Pricing, taxes, billing periods, renewal timing, eligibility, and refund handling are governed by the Google Play purchase flow and applicable Google Play policies.",
    ],
  },
  {
    title: "Reminders and Service Limits",
    body: [
      "Reminder timing depends on the data you enter, device settings, notification permissions, alarm permissions, battery optimization behavior, and platform limitations.",
      "SubReminder is a tracking and reminder tool only. You remain responsible for checking actual billing dates, canceling real subscriptions, and avoiding charges from third-party services.",
    ],
  },
  {
    title: "Contact",
    body: ["AAN Labs. Email: anlabs.dev@gmail.com"],
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage
          eyebrow="Terms"
          title="Terms and Conditions for SubReminder"
          effectiveDate="April 14, 2026"
          intro="SubReminder is provided by AAN Labs. By downloading, installing, or using SubReminder, you agree to these Terms and Conditions."
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}
