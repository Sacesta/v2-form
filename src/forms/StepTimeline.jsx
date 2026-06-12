import React from 'react';
export default function StepTimeline({ answers, handleSelectChoice }) {
  const choices = [
    ["1-week", "Within 1 week"], ["1-2-weeks", "Within 1–2 weeks"], ["3-plus-weeks", "3 weeks or more"], ["exploring", "Just exploring for now"]
  ];
  return (
    <section className="screen active" data-key="timeline">
      <h3 className="q-title">How soon do you need support?</h3>
      <div className="choice-list">
        {choices.map(([val, label]) => (
          <button type="button" key={val} className={`choice-button ${answers.timeline === val ? "selected" : ""}`} onClick={() => handleSelectChoice("timeline", val, label)}>
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}