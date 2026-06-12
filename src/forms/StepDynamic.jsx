import React from 'react';
const dynamicSets = {
  validate: { title: "What are you most uncertain about?", options: [["market-demand","Market demand"],["target-customer","Target customer"],["competition","Competition"],["commercial-viability","Commercial viability"],["not-sure","Not sure yet"]] },
  build: { title: "Where do you need the most support?", options: [["business-model","Business model"],["pricing","Pricing"],["gtm","Go-to-market strategy"],["financial-planning","Financial planning"],["roadmap","Execution roadmap"]] },
  improve: { title: "Which area needs the most improvement?", options: [["pmf","Product-market fit"],["pricing","Pricing"],["gtm-sales","GTM and sales"],["financial-performance","Financial performance"],["operating-model","Operating model"]] },
  investor: { title: "What investor-ready support do you need?", options: [["pitch-deck","Pitch deck"],["financial-model","Five-year financial model"],["valuation","Valuation"],["fundraise-strategy","Fundraise strategy"],["complete-package","Complete investor-readiness package"]] },
  bespoke: { title: "What type of bespoke support do you need?", options: [["market-competition","Market and competitor research"],["pricing-commercial","Pricing and commercial strategy"],["gtm-partner-channel","GTM, partner, or channel strategy"],["business-case","Business case or feasibility assessment"],["other","Other custom requirement"]] }
};
export default function StepDynamic({ answers, handleSelectChoice, route }) {
  const set = dynamicSets[route] || { title: "", options: [] };
  return (
    <section className="screen active" data-key="dynamic">
      <h3 className="q-title">{set.title}</h3>
      <p className="q-help">Select the area that matters most right now.</p>
      <div className="choice-list">
        {set.options.map(([val, label]) => (
          <button type="button" key={val} className={`choice-button ${answers.dynamic === val ? "selected" : ""}`} onClick={() => handleSelectChoice("dynamic", val, label)}>
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}