import React from "react";
import { Lightbulb, FileSpreadsheet, TrendingUp, Presentation, Briefcase } from "lucide-react";
import { FORM_STEPS } from "../constants/formConstants";

const iconMap = {
  Lightbulb,
  FileSpreadsheet,
  TrendingUp,
  Presentation,
  Briefcase,
};

export default function Step2Need({ formData, updateFormData, errors }) {
  const stepConfig = FORM_STEPS[2];
  const selectedValue = formData.current_need;

  const handleSelect = (value) => {
    updateFormData({ current_need: value });
  };

  return (
    <div className="space-y-4 animate-slide-in">
      <div className="grid grid-cols-1 gap-4">
        {stepConfig.options.map((option) => {
          const IconComponent = iconMap[option.icon] || Briefcase;
          const isSelected = selectedValue === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 outline-none focus:ring-4
                ${isSelected
                  ? "border-brand-primary bg-brand-light/30 ring-brand-primary/10 shadow-premium"
                  : "border-brand-border bg-white hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              aria-checked={isSelected}
              role="radio"
            >
              {/* Icon Container */}
              <div
                className={`p-3 rounded-xl transition-colors duration-300 flex-shrink-0
                  ${isSelected
                    ? "bg-brand-primary text-white"
                    : "bg-slate-100 text-brand-muted"
                  }`}
              >
                <IconComponent className="w-6 h-6" />
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="font-bold text-brand-text text-base leading-snug">
                    {option.label}
                  </h3>
                  
                  {/* Subtle Program Badge */}
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase
                      ${isSelected
                        ? "bg-blue-100 text-brand-primary"
                        : "bg-slate-100 text-slate-500"
                      }`}
                  >
                    Path: {option.code}
                  </span>
                </div>
                
                <p className="mt-1 text-sm text-brand-muted leading-relaxed">
                  {option.desc}
                </p>
                
                {/* Statement Quote */}
                <p className="mt-2 text-xs italic text-slate-400 bg-slate-50/50 p-2 rounded-lg border border-dashed border-slate-100">
                  "{option.value}"
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {errors.current_need && (
        <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1" id="current_need-error">
          <span>●</span> {errors.current_need}
        </p>
      )}
    </div>
  );
}
