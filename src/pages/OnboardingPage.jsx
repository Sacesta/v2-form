import React from "react";
import FormContainer from "../forms/FormContainer";
import { ShieldCheck, Zap, Layers, FileCheck } from "lucide-react";
import logoImg from "../assets/v2_logo.jfif";

export default function OnboardingPage({ onSubmitSuccess }) {
  return (
    <div className="min-h-screen bg-brand-surface pt-3 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      {/* Header Bar - positioned at the top left */}
      <header className="max-w-7xl w-full mx-auto flex justify-start items-center mb-2">
        <div className="flex items-center gap-4">
          <img 
            src={logoImg} 
            alt="V2 Startup Incubation & Consulting" 
            className="h-16 w-auto rounded-xl object-contain shadow-sm border border-brand-border/30"
          />
          <span className="text-2xl font-black text-brand-text tracking-tight font-serif">
          <span className="text-brand-gold font-normal italic">Consulting</span>
          </span>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-3xl w-full mx-auto flex flex-col items-center flex-1 mb-4">
        {/* Title and Headings at the top */}
        <div className="space-y-4 mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-brand-text tracking-tight leading-tight font-serif">
            Qualify for V2 Startup Incubation
          </h1>
          
          {/* V2 Slogan Divider */}
          <div className="flex items-center justify-center gap-3 text-[11px] font-extrabold tracking-[0.25em] text-brand-gold uppercase py-1 border-y border-brand-border/40 max-w-sm mx-auto">
            <span>Decide</span>
            <span className="text-brand-border/80">➔</span>
            <span>Build</span>
            <span className="text-brand-border/80">➔</span>
            <span>Raise</span>
          </div>
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
