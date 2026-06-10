import React from "react";
import { Check } from "lucide-react";
import { FORM_STEPS } from "../constants/formConstants";

export default function StepIndicator({ currentStep, totalSteps = 8 }) {
  const steps = Object.values(FORM_STEPS);

  return (
    <div className="w-full">
      {/* Mobile-only Compact Text */}
      <div className="block md:hidden text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
          Step {currentStep} of {totalSteps}
        </span>
        <h2 className="text-lg font-bold text-brand-text mt-1">
          {FORM_STEPS[currentStep]?.title}
        </h2>
      </div>

      {/* Desktop-only Rich Timeline */}
      <div className="hidden md:flex items-center justify-between w-full relative">
        {/* Connecting Line Track - centered exactly at 18px (half of w-9/h-9) */}
        <div className="absolute left-[6.25%] right-[6.25%] top-[18px] -translate-y-1/2 h-0.5 bg-slate-100 -z-10">
          {/* Active edge segment fill that turns blue as left-side nodes are completed */}
          <div 
            className="h-full bg-brand-primary transition-all duration-500 ease-out rounded-full"
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>
        
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          
          return (
            <div key={step.id} className="flex flex-col items-center flex-1 relative z-10">
              {/* Step Circle */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 border
                  ${isCompleted 
                    ? "bg-brand-primary border-brand-primary text-white shadow-sm" 
                    : isActive 
                      ? "bg-white border-brand-primary text-brand-primary ring-4 ring-blue-50 font-bold" 
                      : "bg-white border-brand-border text-brand-muted"
                  }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 stroke-[3px]" />
                ) : (
                  <span>{step.id}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
