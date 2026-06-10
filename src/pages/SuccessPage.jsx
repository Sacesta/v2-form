import React from "react";
import { CheckCircle2, ShieldAlert, ArrowRight, ClipboardCopy } from "lucide-react";

export default function SuccessPage({ submittedData, onReset }) {
  return (
    <div className="min-h-screen bg-brand-surface py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      {/* Header Bar */}
      <header className="max-w-3xl w-full mx-auto flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white font-black text-lg shadow-sm">
            V2
          </div>
          <span className="font-extrabold text-brand-text text-xl tracking-tight">
            V2 <span className="text-brand-primary font-medium">Consulting</span>
          </span>
        </div>
      </header>

      {/* Main Success Container */}
      <main className="max-w-2xl w-full mx-auto bg-white border border-brand-border rounded-3xl shadow-premium p-8 md:p-12 text-center space-y-8 animate-fade-in flex-shrink-0">
        
        {/* Animated CheckCircle Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-500 shadow-[0_0_24px_rgba(16,185,129,0.15)] animate-pulse">
            <CheckCircle2 className="w-12 h-12" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
            Lead Qualified & Logged
          </span>
          <h1 className="text-3xl font-black text-brand-text tracking-tight pt-2">
            Application Received
          </h1>
          <p className="text-brand-muted text-base leading-relaxed max-w-md mx-auto">
            Thank you for sharing the details. V2 will review your requirement and suggest the most suitable advisory path.
          </p>
        </div>

        {/* Dynamic Submission Info Card */}
        {submittedData && (
          <div className="border border-brand-border rounded-2xl p-5 bg-brand-surface/40 text-left space-y-3.5">
            <div className="flex items-center gap-2 border-b border-brand-border pb-2.5">
              <ClipboardCopy className="w-4 h-4 text-brand-primary" />
              <h3 className="text-xs font-bold text-brand-text uppercase tracking-wider">
                Submission Summary
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-brand-muted block font-medium">Client Name:</span>
                <span className="text-brand-text font-bold block mt-0.5">{submittedData.name}</span>
              </div>
              <div>
                <span className="text-brand-muted block font-medium">Email Reference:</span>
                <span className="text-brand-text font-bold block mt-0.5">{submittedData.email}</span>
              </div>
              <div>
                <span className="text-brand-muted block font-medium">Assigned Program Track:</span>
                <span className="inline-block mt-0.5 px-2.5 py-0.5 bg-blue-50 border border-blue-100 rounded-full font-bold text-brand-primary uppercase">
                  {submittedData.service_mapping}
                </span>
              </div>
              <div>
                <span className="text-brand-muted block font-medium">Target Launch Timeline:</span>
                <span className="text-brand-text font-bold block mt-0.5">{submittedData.timeline}</span>
              </div>
            </div>
          </div>
        )}

        {/* Confidentiality Warning Callout */}
        <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 flex gap-3 text-left">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong>Confidentiality Notice:</strong> Please avoid sharing highly confidential technical, financial, or proprietary information in this form. Sensitive documents can be shared later through the appropriate confidentiality process.
          </p>
        </div>

        {/* Action Button to return or start over */}
        <div className="pt-4">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-2 px-6 py-3 border border-brand-border bg-white rounded-xl font-bold text-brand-text hover:bg-slate-50 hover:text-black shadow-sm transition-all focus:ring-4 ring-slate-100"
          >
            <span>Submit Another Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-3xl w-full mx-auto border-t border-brand-border pt-6 text-center text-xs text-slate-400 mt-8">
        © {new Date().getFullYear()} V2 Startup Incubation Advisory. All rights reserved.
      </footer>
    </div>
  );
}
