import React from 'react';
export default function StepReadiness({ answers, handleSelectChoice }) {
  const choices = [
    ["nothing", "Only an idea or nothing yet"], ["research", "Notes, research, or customer feedback"], ["documents", "Pitch deck, business plan, or financial data"], ["traction", "Product, website, prototype, customers, or revenue"]
  ];
  return (
    <section className="screen active" data-key="readiness">
      <h3 className="q-title">What do you already have ready?</h3>
      <div className="choice-list">
        {choices.map(([val, label]) => (
          <button type="button" key={val} className={`choice-button ${answers.readiness === val ? "selected" : ""}`} onClick={() => handleSelectChoice("readiness", val, label)}>
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}