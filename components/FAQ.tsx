const faqs = [
  {
    question: "What is SubReminder?",
    answer:
      "SubReminder is a mobile app for tracking subscriptions, renewal dates, payments, and reminders in one place.",
  },
  {
    question: "Is SubReminder available on Android?",
    answer:
      "Yes. SubReminder is available for Android through Google Play.",
  },
  {
    question: "Can I track monthly and yearly subscriptions?",
    answer:
      "Yes. The app is designed for monthly, yearly, trial, and custom subscription cycles.",
  },
  {
    question: "Does the app remind me before renewal dates?",
    answer:
      "Yes. SubReminder helps you set reminders before payment dates so renewals are easier to manage.",
  },
  {
    question: "Is the app free?",
    answer:
      "You can use SubReminder to start tracking subscriptions. Check the Play Store listing for current pricing and premium options.",
  },
];

export function FAQ() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2 id="faq-title">Questions before you install.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
