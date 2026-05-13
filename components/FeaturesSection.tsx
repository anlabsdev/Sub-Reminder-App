import {
  Bell,
  CalendarDays,
  Clock,
  CreditCard,
  ReceiptText,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "All subscriptions in one place",
    text: "Keep streaming, apps, cloud tools, online services, and personal plans in a single dashboard.",
  },
  {
    icon: Bell,
    title: "Reminders before renewal dates",
    text: "Set alerts early enough to cancel, pause, or budget before the next charge.",
  },
  {
    icon: CreditCard,
    title: "Upcoming payment view",
    text: "See what is due next and understand what is about to leave your account.",
  },
  {
    icon: CalendarDays,
    title: "Monthly and yearly organization",
    text: "Track billing periods cleanly across monthly, annual, trial, and custom cycles.",
  },
  {
    icon: ReceiptText,
    title: "Custom subscription details",
    text: "Add price, category, notes, billing date, currency, and the details that matter to you.",
  },
  {
    icon: Clock,
    title: "Fast overview dashboard",
    text: "Open the app and instantly understand total spending, renewals, and subscription status.",
  },
];

export function FeaturesSection() {
  return (
    <section
      className="section feature-section"
      id="features"
      aria-labelledby="features-title"
    >
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="section-kicker">Features</p>
            <h2 id="features-title">Built for people with more than one bill.</h2>
          </div>
          <p>
            Every screen is focused on answering one question quickly: what is
            renewing, when, and how much will it cost?
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={feature.title}>
                <span className="feature-icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
