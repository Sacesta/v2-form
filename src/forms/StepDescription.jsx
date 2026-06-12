import React from 'react';
export default function StepDescription({ answers, setAnswers, isBespoke }) {
  const title = isBespoke ? "Describe the business or project requirement in one short sentence." : "Describe your idea or business in one short sentence.";
  return (
    <section className="screen active" data-key="description">
      <h3 className="q-title">{title}</h3>
      <p className="q-help">Keep it simple. Recommended maximum: 300 characters.</p>
      <textarea id="description" maxLength="300" placeholder="Example: We want to launch..." value={answers.description || ""} onChange={e => setAnswers(prev => ({...prev, description: e.target.value}))}></textarea>
    </section>
  );
}