import React, { useState, useEffect, useRef } from "react";
import StepContact from "./StepContact";
import StepNeed from "./StepNeed";
import StepDescription from "./StepDescription";
import StepDynamic from "./StepDynamic";
import StepStage from "./StepStage";
import StepCustomer from "./StepCustomer";
import StepReadiness from "./StepReadiness";
import StepTimeline from "./StepTimeline";
import StepConsent from "./StepConsent";
import StepSuccess from "./StepSuccess";
import { submitIntakeData } from "../services/api";

const standardFlow = ["contact","need","description","dynamic","stage","customer","readiness","timeline","consent","success"];
const bespokeFlow = ["contact","need","description","dynamic","timeline","consent","success"];

const routingTags = {
  validate:"IGNITE_DECISION_LAB",
  build:"BLUEPRINT_BUILD",
  improve:"BLUEPRINT_BUILD_CUSTOM",
  investor:"INVESTOR_READY_PRO",
  bespoke:"BESPOKE_CONSULTANCY"
};

export default function FormContainer({ onSubmitSuccess, openPrivacy }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flow, setFlow] = useState(["contact", "need"]);
  const [answers, setAnswers] = useState({});
  const [labels, setLabels] = useState({});
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const [backendSuccess, setBackendSuccess] = useState(false);

  const currentKey = flow[currentIndex];
  
  useEffect(() => {
    if (answers.need) {
      setFlow(answers.need === "bespoke" ? bespokeFlow : standardFlow);
    }
  }, [answers.need]);

  const handleSelectChoice = (key, value, label) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setLabels(prev => ({ ...prev, [key]: label }));
    setError("");
  };

  const validateCurrent = () => {
    setError("");
    if (currentKey === "contact") {
      const { name, email, phone } = answers.contact || {};
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
      const phoneOk = /^[+()\-\s0-9]{7,20}$/.test(phone || "");
      if (!name || !name.trim() || !emailOk || !phoneOk) {
        setError("Please enter your name, a valid email address, and a valid phone number.");
        return false;
      }
      return true;
    }
    if (currentKey === "description") {
      const val = (answers.description || "").trim();
      if (val.length < 10) {
        setError("Please provide a short description of at least 10 characters.");
        return false;
      }
      return true;
    }
    if (["need", "dynamic", "stage", "customer", "readiness", "timeline"].includes(currentKey)) {
      if (!answers[currentKey]) {
        setError("Please select one option.");
        return false;
      }
      return true;
    }
    if (currentKey === "consent") {
      if (!answers.consent) {
        setError("Please confirm your consent before submitting.");
        return false;
      }
      return true;
    }
    return true;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const payload = {
      name: answers.contact?.name || "",
      email: answers.contact?.email || "",
      phone: answers.contact?.phone || "",
      routingTag: routingTags[answers.need],
      current_need: labels.need || "",
      description: answers.description || "",
      support_area: labels.dynamic || "",
      business_stage: labels.stage || "",
      target_customer: labels.customer || "",
      assets_ready: labels.readiness || "",
      timeline: labels.timeline || "",
      submittedAt: new Date().toISOString(),
      source: "V2 website enquiry assistant"
    };
    try { localStorage.setItem("v2_latest_enquiry", JSON.stringify(payload)); } catch (e) {}

    try {
      const result = await submitIntakeData(payload);
      if (result && result.success && !result.zeroBackend) {
        setBackendSuccess(true);
      }
    } catch (err) {
      console.error(err);
      setError("The enquiry could not be submitted automatically. Please use the Email or WhatsApp option on the next screen.");
    } finally {
      setIsSubmitting(false);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (!validateCurrent()) return;
    if (currentKey === "need") {
      const oldRoute = flow.includes("stage") ? "standard" : flow.includes("timeline") ? "bespoke" : null;
      const newRoute = answers.need === "bespoke" ? "bespoke" : "standard";
      if (oldRoute && oldRoute !== newRoute) {
        const keysToClear = ["description", "dynamic", "stage", "customer", "readiness", "timeline"];
        setAnswers(prev => {
          const next = { ...prev };
          keysToClear.forEach(k => delete next[k]);
          return next;
        });
        setLabels(prev => {
          const next = { ...prev };
          keysToClear.forEach(k => delete next[k]);
          return next;
        });
      }
    }
    if (currentKey === "consent") {
      handleSubmit();
      return;
    }
    setCurrentIndex(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setError("");
    }
  };

  const renderScreen = () => {
    switch (currentKey) {
      case "contact": return <StepContact answers={answers} setAnswers={setAnswers} />;
      case "need": return <StepNeed answers={answers} handleSelectChoice={handleSelectChoice} />;
      case "description": return <StepDescription answers={answers} setAnswers={setAnswers} isBespoke={answers.need === "bespoke"} />;
      case "dynamic": return <StepDynamic answers={answers} handleSelectChoice={handleSelectChoice} route={answers.need} />;
      case "stage": return <StepStage answers={answers} handleSelectChoice={handleSelectChoice} />;
      case "customer": return <StepCustomer answers={answers} handleSelectChoice={handleSelectChoice} />;
      case "readiness": return <StepReadiness answers={answers} handleSelectChoice={handleSelectChoice} />;
      case "timeline": return <StepTimeline answers={answers} handleSelectChoice={handleSelectChoice} />;
      case "consent": return <StepConsent answers={answers} labels={labels} openPrivacy={openPrivacy} setAnswers={setAnswers} />;
      case "success": return <StepSuccess answers={answers} labels={labels} routingTag={routingTags[answers.need]} backendSuccess={backendSuccess} />;
      default: return null;
    }
  };

  const questionFlow = flow.filter(k => !["consent", "success"].includes(k));
  const qIndex = questionFlow.indexOf(currentKey);
  const total = questionFlow.length;
  
  let stepLabel = "";
  let progressPct = 0;
  if (currentKey === "consent") {
    stepLabel = "Review before submission";
    progressPct = 100;
  } else if (currentKey === "success") {
    stepLabel = "Completed";
    progressPct = 100;
  } else {
    const shownIndex = qIndex >= 0 ? qIndex + 1 : 1;
    stepLabel = answers.need ? `Step ${shownIndex} of ${total}` : `Step ${shownIndex}`;
    progressPct = Math.max(8, (shownIndex / Math.max(total, 1)) * 100);
  }

  const isSuccess = currentKey === "success";

  return (
    <div className="chat-card" ref={formRef}>
      <header className="chat-head">
        <div className="chat-head-row">
          <h2>V2 Enquiry Assistant</h2>
          <span className="step-label">{stepLabel}</span>
        </div>
        <div className="chat-progress">
          <span style={{ width: `${progressPct}%` }}></span>
        </div>
      </header>

      <form noValidate onSubmit={(e) => e.preventDefault()}>
        {renderScreen()}
        {error && <div className="error" aria-live="polite">{error}</div>}
        {!isSuccess && (
          <div className="nav-row">
            <button type="button" className="btn back" onClick={handleBack} disabled={currentIndex === 0 || isSubmitting}>
              Back
            </button>
            <button type="button" className="btn btn-primary next" onClick={handleNext} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : currentKey === "consent" ? "Submit enquiry" : "Next"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
