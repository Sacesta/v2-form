import React from "react";
import { Check } from "lucide-react";
import { FORM_STEPS } from "../constants/formConstants";

export default function Step4Help({ formData, updateFormData, errors }) {
  const stepConfig = FORM_STEPS[4];
  const selectedValue = formData.help_needed;

  const handleSelect = (value) => {
    updateFormData({ help_needed: value });
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
              className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center justify-between outline-none focus:ring-4
                ${isSelected
                  ? "border-brand-primary bg-brand-light/35 ring-brand-primary/10 font-medium"
                  : "border-brand-border bg-white hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              aria-checked={isSelected}
              role="radio"
            >
              <span className={`text-sm md:text-base ${isSelected ? "text-brand-primary font-semibold" : "text-brand-text"}`}>
                {option.label}
              </span>
              
              {/* Radio Circle Indicator */}
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200
                  ${isSelected
                    ? "border-brand-primary bg-brand-primary text-white scale-110 shadow-sm"
                    : "border-slate-300 bg-white"
                  }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
              </div>
            </button>
          );
        })}
      </div>

      {errors.help_needed && (
        <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1" id="help_needed-error">
          <span>●</span> {errors.help_needed}
        </p>
      )}
    </div>
  );
}
