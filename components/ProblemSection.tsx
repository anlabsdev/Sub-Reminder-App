import { Bell, Calendar, CircleDollarSign, ListChecks } from "lucide-react";

const problems = [
  {
    icon: CircleDollarSign,
    title: "Surprise charges pile up",
    text: "Renewals can hit quietly, especially when free trials become monthly payments.",
  },
  {
    icon: Calendar,
    title: "Dates are scattered",
    text: "Bank statements, emails, and app accounts make renewal tracking hard to scan.",
  },
  {
    icon: Bell,
    title: "Manual reminders slip",
    text: "Calendar notes work until a billing cycle changes or a reminder is missed.",
  },
  {
    icon: ListChecks,
    title: "Budgets need context",
    text: "Seeing every subscription together makes monthly and yearly planning easier.",
  },
];

export function ProblemSection() {
  return (
    <section className="section problem-section" aria-labelledby="problem-title">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">The everyday subscription mess</p>
          <h2 id="problem-title">Stop letting renewals happen in the dark.</h2>
          <p>
            SubReminder gives every recurring payment a home, a date, and a
            reminder before it becomes a surprise.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <article className="info-card" key={problem.title}>
                <Icon aria-hidden="true" />
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
