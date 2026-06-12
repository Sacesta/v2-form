import React from 'react';
export default function StepCustomer({ answers, handleSelectChoice }) {
  const choices = [
    ["consumer", "Individual consumers"], ["small-business", "Small businesses or startups"], ["enterprise", "Large companies or institutions"], ["public-sector", "Government, education, or non-profits"], ["unknown", "Not sure yet"]
  ];
  return (
    <section className="screen active" data-key="customer">
      <h3 className="q-title">Who is the intended customer or user?</h3>
      <div className="choice-list">
        {choices.map(([val, label]) => (
          <button type="button" key={val} className={`choice-button ${answers.customer === val ? "selected" : ""}`} onClick={() => handleSelectChoice("customer", val, label)}>
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}