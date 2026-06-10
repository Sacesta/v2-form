import React, { useState } from "react";
import OnboardingPage from "./pages/OnboardingPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmitSuccess = (payload) => {
    setSubmittedData(payload);
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  if (submittedData) {
    return <SuccessPage submittedData={submittedData} onReset={handleReset} />;
  }

  return <OnboardingPage onSubmitSuccess={handleSubmitSuccess} />;
}
