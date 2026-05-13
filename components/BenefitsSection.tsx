import { BadgeCheck, ShieldCheck, Wallet, Zap } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Save money",
    text: "Catch renewals before they charge and cancel plans you no longer use.",
  },
  {
    icon: BadgeCheck,
    title: "Stay organized",
    text: "Keep recurring services, billing cycles, and notes in a single place.",
  },
  {
    icon: Zap,
    title: "Plan faster",
    text: "Know what is due this month before you plan the rest of your spending.",
  },
  {
    icon: ShieldCheck,
    title: "Feel prepared",
    text: "Use reminders to make subscription renewals predictable instead of stressful.",
  },
];

export function BenefitsSection() {
  return (
    <section className="section benefits-section" aria-labelledby="benefits-title">
      <div className="container benefits-grid">
        <div className="section-heading">
          <p className="section-kicker">Benefits</p>
          <h2 id="benefits-title">Less renewal anxiety. More control.</h2>
        </div>

        <div className="benefit-list">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className="benefit-item" key={benefit.title}>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
