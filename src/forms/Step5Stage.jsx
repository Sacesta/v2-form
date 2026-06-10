import React from "react";
import { Check } from "lucide-react";
import { FORM_STEPS } from "../constants/formConstants";

export default function Step5Stage({ formData, updateFormData, errors }) {
  const stepConfig = FORM_STEPS[5];
  const selectedValue = formData.business_stage;

  const handleSelect = (value) => {
    updateFormData({ business_stage: value });
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
                {/* Radio Indicator */}
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

              {/* Badge indicating the startup stage status */}
              <span
                className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase flex-shrink-0
                  ${isSelected
                    ? "bg-brand-primary/10 text-brand-primary"
                    : "bg-slate-100 text-slate-500"
                  }`}
              >
                {option.badge}
              </span>
            </button>
          );
        })}
      </div>

      {errors.business_stage && (
        <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1" id="business_stage-error">
          <span>●</span> {errors.business_stage}
        </p>
      )}
    </div>
  );
}
