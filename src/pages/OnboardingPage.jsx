import React from "react";
import FormContainer from "../forms/FormContainer";
import { ShieldCheck, Zap, Layers, FileCheck } from "lucide-react";

export default function OnboardingPage({ onSubmitSuccess }) {
  return (
    <div className="min-h-screen bg-brand-surface py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      {/* Header Bar */}
      <header className="max-w-6xl w-full mx-auto flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white font-black text-lg shadow-sm">
            V2
          </div>
          <span className="font-extrabold text-brand-text text-xl tracking-tight">
           <span className="text-brand-primary font-medium">Consulting</span>
          </span>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-3xl w-full mx-auto flex flex-col items-center flex-1 mb-12">
        {/* Title and Headings at the top */}
        <div className="space-y-4 mb-8 text-center">
          <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
            Venture Intake System
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight leading-tight">
            Qualify for V2 Startup Incubation
          </h1>
          <p className="text-base text-brand-muted leading-relaxed max-w-xl mx-auto">
            We guide founders and corporates from initial concept validation to investor-ready capital structures. Share your project parameters to identify your optimal advisory track.
          </p>
        </div>

        {/* Onboarding Form below the headings */}
        <div className="w-full flex justify-center">
          <FormContainer onSubmitSuccess={onSubmitSuccess} />
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="max-w-6xl w-full mx-auto border-t border-brand-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <div>
          © {new Date().getFullYear()} V2 Startup Incubation Advisory. All rights reserved.
        </div>
        <div className="flex gap-6">
          <span className="hover:text-brand-text cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-brand-text cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-brand-text cursor-pointer transition-colors">Secured API</span>
        </div>
      </footer>
    </div>
  );
}
