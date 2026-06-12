import React from 'react';
export default function StepNeed({ answers, handleSelectChoice }) {
  const choices = [
    {value: "validate", label: "I want to validate an idea before investing significant time or money."},
    {value: "build", label: "I want to turn an idea into a structured business plan and roadmap."},
    {value: "improve", label: "I am already building and need help improving strategy, pricing, GTM, or financials."},
    {value: "investor", label: "I need investor-ready documents and fundraising preparation."},
    {value: "bespoke", label: "I need custom consulting for a business, market, product, or new opportunity."}
  ];
  return (
    <section className="screen active" data-key="need">
      <h3 className="q-title">Which statement best describes your current need?</h3>
      <p className="q-help">Choose the closest fit. You can explain the detail later.</p>
      <div className="choice-list">
        {choices.map(c => (
          <button type="button" key={c.value} className={`choice-button ${answers.need === c.value ? "selected" : ""}`} onClick={() => handleSelectChoice("need", c.value, c.label)}>
            {c.label}
          </button>
        ))}
      </div>
    </section>
  );
}