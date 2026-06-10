import React from "react";
import { User, Mail, Phone } from "lucide-react";

export default function Step1Contact({ formData, updateFormData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div className="space-y-6 animate-slide-in">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-brand-text mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <User className="w-5 h-5" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            value={formData.name || ""}
            onChange={handleChange}
            placeholder="e.g., Sarah Jenkins"
            className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-white focus:ring-4 outline-none transition-all duration-200 text-brand-text placeholder-slate-400
              ${errors.name 
                ? "border-red-300 focus:ring-red-500/10 focus:border-red-500" 
                : "border-brand-border focus:ring-brand-primary/10 focus:border-brand-primary"
              }`}
          />
        </div>
        {errors.name && (
          <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1" id="name-error">
            <span>●</span> {errors.name}
          </p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-brand-text mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Mail className="w-5 h-5" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="e.g., sarah@mycompany.com"
            className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-white focus:ring-4 outline-none transition-all duration-200 text-brand-text placeholder-slate-400
              ${errors.email 
                ? "border-red-300 focus:ring-red-500/10 focus:border-red-500" 
                : "border-brand-border focus:ring-brand-primary/10 focus:border-brand-primary"
              }`}
          />
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1" id="email-error">
            <span>●</span> {errors.email}
          </p>
        )}
      </div>

      {/* Phone Input */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-brand-text mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Phone className="w-5 h-5" />
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            value={formData.phone || ""}
            onChange={handleChange}
            placeholder="e.g., +1 (555) 019-2834"
            className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-white focus:ring-4 outline-none transition-all duration-200 text-brand-text placeholder-slate-400
              ${errors.phone 
                ? "border-red-300 focus:ring-red-500/10 focus:border-red-500" 
                : "border-brand-border focus:ring-brand-primary/10 focus:border-brand-primary"
              }`}
          />
        </div>
        {errors.phone && (
          <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1" id="phone-error">
            <span>●</span> {errors.phone}
          </p>
        )}
      </div>
    </div>
  );
}
