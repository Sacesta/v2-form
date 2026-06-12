import React from 'react';
export default function StepStage({ answers, handleSelectChoice }) {
  const choices = [
    ["idea", "Just an idea"], ["validation", "Research or validation underway"], ["product", "Prototype, product, or service exists"], ["traction", "Early users, customers, or revenue"], ["incorporated", "Incorporated startup preparing to scale or raise"]
  ];
  return (
    <section className="screen active" data-key="stage">
      <h3 className="q-title">What stage are you currently at?</h3>
      <div className="choice-list">
        {choices.map(([val, label]) => (
          <button type="button" key={val} className={`choice-button ${answers.stage === val ? "selected" : ""}`} onClick={() => handleSelectChoice("stage", val, label)}>
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}