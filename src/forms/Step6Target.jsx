import React from "react";
import { Users } from "lucide-react";
import { FORM_STEPS } from "../constants/formConstants";

export default function Step6Target({ formData, updateFormData, errors }) {
  const stepConfig = FORM_STEPS[6];
  const fieldConfig = stepConfig.fields[0];
  const currentValue = formData.target_audience || "";
  const maxLength = fieldConfig.maxLength || 200;

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      updateFormData({ target_audience: value });
    }
  };

  const remainingChars = maxLength - currentValue.length;

  return (
    <div className="space-y-6 animate-slide-in">
      <div>
        <label htmlFor="target_audience" className="block text-sm font-semibold text-brand-text mb-2">
          Target Customer Profile <span className="text-red-500">*</span>
        </label>
        
        <div className="relative">
          <textarea
            id="target_audience"
            name="target_audience"
            rows="4"
            maxLength={maxLength}
            required
            value={currentValue}
            onChange={handleChange}
            placeholder={fieldConfig.placeholder}
            className={`w-full p-4 rounded-xl border bg-white focus:ring-4 outline-none transition-all duration-200 text-brand-text placeholder-slate-400 resize-none leading-relaxed
              ${errors.target_audience 
                ? "border-red-300 focus:ring-red-500/10 focus:border-red-500" 
                : "border-brand-border focus:ring-brand-primary/10 focus:border-brand-primary"
              }`}
          />
          
          {/* Subtle icon inside when empty */}
          {currentValue.length === 0 && (
            <div className="absolute right-3 bottom-3 flex items-center gap-1.5 text-slate-300 pointer-events-none text-xs">
              <Users className="w-3.5 h-3.5" />
              <span>Define the demographic</span>
            </div>
          )}
        </div>

        {/* Counter and Help text */}
        <div className="flex justify-between items-center mt-2.5">
          <span className="text-xs text-brand-muted">
            Be as specific as possible (e.g., B2B vs B2C, specific roles, industries).
          </span>
          <span 
            className={`text-xs font-semibold px-2 py-0.5 rounded-full transition-colors duration-200
              ${remainingChars < 20 
                ? "bg-red-50 text-red-500" 
                : remainingChars < 50 
                  ? "bg-amber-50 text-amber-600" 
                  : "bg-slate-100 text-brand-muted"
              }`}
          >
            {remainingChars} characters remaining
          </span>
        </div>

        {errors.target_audience && (
          <p className="mt-2.5 text-sm text-red-500 font-medium flex items-center gap-1" id="target_audience-error">
            <span>●</span> {errors.target_audience}
          </p>
        )}
      </div>
    </div>
  );
}
