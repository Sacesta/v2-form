import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

import { FORM_STEPS } from "../constants/formConstants";
import { validateStep1, validateTextarea } from "../utils/validation";
import { submitIntakeData } from "../services/api";

import ProgressBar from "../components/ProgressBar";
import StepIndicator from "../components/StepIndicator";
import Spinner from "../components/Spinner";

// Step form imports
import Step1Contact from "./Step1Contact";
import Step2Need from "./Step2Need";
import Step3Description from "./Step3Description";
import Step4Help from "./Step4Help";
import Step5Stage from "./Step5Stage";
import Step6Target from "./Step6Target";
import Step7Ready from "./Step7Ready";
import Step8Timeline from "./Step8Timeline";

export default function FormContainer({ onSubmitSuccess }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    current_need: "",
    idea_description: "",
    help_needed: "",
    business_stage: "",
    target_audience: "",
    assets_ready: "",
    timeline: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  const formCardRef = useRef(null);

  // Scroll to top of the form on step change
  useEffect(() => {
    if (formCardRef.current) {
      formCardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentStep]);

  const updateFormData = (fields) => {
    setFormData((prev) => {
      const updated = { ...prev, ...fields };
      // Proactively clear errors for edited fields
      const newErrors = { ...errors };
      Object.keys(fields).forEach((key) => {
        delete newErrors[key];
      });
      setErrors(newErrors);
      return updated;
    });
  };

  const validateStep = (step) => {
    let stepErrors = {};
    
    switch (step) {
      case 1:
        stepErrors = validateStep1(formData);
        break;
      case 2:
        if (!formData.current_need) {
          stepErrors.current_need = "Please select the statement that best fits your current need.";
        }
        break;
      case 3:
        const ideaErr = validateTextarea(formData.idea_description, "Idea", 200);
        if (ideaErr) stepErrors.idea_description = ideaErr;
        break;
      case 4:
        if (!formData.help_needed) {
          stepErrors.help_needed = "Please select the type of help you are looking for.";
        }
        break;
      case 5:
        if (!formData.business_stage) {
          stepErrors.business_stage = "Please select your current business stage.";
        }
        break;
      case 6:
        if (formData.target_audience && formData.target_audience.trim().length > 0) {
          const targetErr = validateTextarea(formData.target_audience, "Target Audience", 200);
          if (targetErr && targetErr.includes("too long")) {
            stepErrors.target_audience = targetErr;
          }
        }
        break;
      case 7:
        if (!formData.assets_ready) {
          stepErrors.assets_ready = "Please select what assets you have ready.";
        }
        break;
      case 8:
        if (!formData.timeline) {
          stepErrors.timeline = "Please select how soon you need support.";
        }
        break;
      default:
        break;
    }
    
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 8) {
        setCurrentStep((prev) => prev + 1);
        setSubmitError(null);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setSubmitError(null);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await submitIntakeData(formData);
      if (response.success) {
        onSubmitSuccess(response.payload);
      }
    } catch (err) {
      setSubmitError(err.message || "An unexpected error occurred during submission. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render the correct form component for the active step
  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <Step1Contact formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 2:
        return <Step2Need formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 3:
        return <Step3Description formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 4:
        return <Step4Help formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 5:
        return <Step5Stage formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 6:
        return <Step6Target formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 7:
        return <Step7Ready formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 8:
        return <Step8Timeline formData={formData} updateFormData={updateFormData} errors={errors} />;
      default:
        return null;
    }
  };

  const stepMeta = FORM_STEPS[currentStep];

  return (
    <div ref={formCardRef} className="w-full max-w-2xl bg-brand-surface border border-brand-border rounded-3xl shadow-premium p-6 md:p-10 relative overflow-hidden transition-all duration-300">
      
      {/* Top Progress & Step Indicators */}
      <div className="space-y-6 mb-8">
        <StepIndicator currentStep={currentStep} totalSteps={8} />
        <ProgressBar currentStep={currentStep} totalSteps={8} />
      </div>

      {/* API Submission Error Banner */}
      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 animate-fade-in text-red-800">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <h4 className="font-bold">Submission Failed</h4>
            <p className="mt-1 leading-relaxed">{submitError}</p>
          </div>
        </div>
      )}

      {/* Active Step Header Text */}
      <div className="mb-8 hidden md:block">
        <h2 className="text-2xl font-black text-brand-text leading-tight tracking-tight font-serif">
          {stepMeta.question}
        </h2>
        {stepMeta.description && (
          <p className="text-brand-muted mt-2 text-sm leading-relaxed">
            {stepMeta.description}
          </p>
        )}
      </div>

      {/* Active Step Question (Mobile only, since desktop indicator handles it) */}
      <div className="mb-6 md:hidden">
        <p className="text-brand-muted text-xs leading-relaxed">
          {stepMeta.description}
        </p>
      </div>

      {/* Step Form Field Content */}
      <div className="min-h-[280px]">
        {renderStepComponent()}
      </div>

      {/* Bottom Controls / Navigation */}
      <div className="mt-8 pt-6 border-t border-brand-border flex items-center justify-between gap-4">
        {/* Previous Button */}
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-brand-border text-brand-muted hover:text-brand-text hover:bg-slate-50 transition-all font-semibold disabled:opacity-50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
        ) : (
          <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Fully Secure & Confidential</span>
          </div>
        )}

        {/* Next / Submit Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={isSubmitting}
          className={`ml-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-md focus:ring-4
            ${isSubmitting 
              ? "bg-brand-secondary text-white cursor-not-allowed opacity-90" 
              : currentStep === 8
                ? "bg-brand-primary hover:bg-brand-hover text-white hover:shadow-lg hover:shadow-blue-500/10 ring-brand-primary/20"
                : "bg-brand-primary hover:bg-brand-hover text-white hover:shadow-lg hover:shadow-blue-500/10 ring-brand-primary/20"
            }`}
        >
          {isSubmitting ? (
            <>
              <Spinner size="sm" color="white" />
              <span>Submitting Proposal...</span>
            </>
          ) : currentStep === 8 ? (
            <>
              <span>Submit Application</span>
              <CheckCircle2 className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
