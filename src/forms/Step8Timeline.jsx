import React from "react";
import { Check, Calendar } from "lucide-react";
import { FORM_STEPS } from "../constants/formConstants";

export default function Step8Timeline({ formData, updateFormData, errors }) {
  const stepConfig = FORM_STEPS[8];
  const selectedValue = formData.timeline;

  const handleSelect = (value) => {
    updateFormData({ timeline: value });
  };

  const getIndicatorStyles = (indicator, isSelected) => {
    if (indicator === "Urgent") {
      return isSelected 
        ? "bg-red-100 text-red-700 border-red-200" 
        : "bg-red-50 text-red-600 border-red-100";
    }
    if (indicator === "Active") {
      return isSelected 
        ? "bg-amber-100 text-amber-700 border-amber-200" 
        : "bg-amber-50 text-amber-600 border-amber-100";
    }
    if (indicator === "Flexible") {
      return isSelected 
        ? "bg-green-100 text-green-700 border-green-200" 
        : "bg-green-50 text-green-600 border-green-100";
    }
    return isSelected 
      ? "bg-slate-200 text-slate-700 border-slate-300" 
      : "bg-slate-100 text-slate-600 border-slate-200";
  };

  return (
    <div className="space-y-3 animate-slide-in">
      <div className="grid grid-cols-1 gap-3" role="radiogroup">
        {stepConfig.options.map((option) => {
          const isSelected = selectedValue === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 outline-none focus:ring-4
                ${isSelected
                  ? "border-brand-primary bg-brand-light/35 ring-brand-primary/10"
                  : "border-brand-border bg-white hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              aria-checked={isSelected}
              role="radio"
            >
              <div className="flex items-center gap-3">
                {/* Radio Circle */}
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200
                    ${isSelected
                      ? "border-brand-primary bg-brand-primary text-white scale-110 shadow-sm"
                      : "border-slate-300 bg-white"
                    }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                </div>
                
                <span className={`text-sm md:text-base ${isSelected ? "text-brand-primary font-semibold" : "text-brand-text"}`}>
                  {option.label}
                </span>
              </div>

              {/* Urgency Badge */}
              <span
                className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border
                  ${getIndicatorStyles(option.indicator, isSelected)}`}
              >
                {option.indicator}
              </span>
            </button>
          );
        })}
      </div>

      {errors.timeline && (
        <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1" id="timeline-error">
          <span>●</span> {errors.timeline}
        </p>
      )}
    </div>
  );
}
