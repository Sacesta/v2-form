import React from "react";

export default function ProgressBar({ currentStep, totalSteps = 8 }) {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full">
      {/* Percentage Label */}
      <div className="flex justify-between items-center mb-2 text-xs font-semibold text-brand-muted tracking-wider uppercase">
        <span>Progress</span>
        <span>{percentage}% Complete</span>
      </div>
      
      {/* Outer Bar */}
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-brand-border">
        {/* Inner Bar with animated width transition */}
        <div
          className="h-full bg-brand-primary rounded-full transition-all duration-500 ease-out shadow-[0_0_12px_rgba(37,99,235,0.4)]"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Onboarding Progress"
        />
      </div>
    </div>
  );
}
