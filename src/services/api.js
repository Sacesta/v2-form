import { SERVICE_MAPPING } from "../constants/formConstants";

/**
 * Submits the intake onboarding form data via a REST API POST request.
 * 
 * @param {object} formData - State of the onboarding form fields
 * @returns {Promise<object>} - Response payload
 */
export const submitIntakeData = async (formData) => {
  // Use VITE_API_ENDPOINT if set, otherwise fallback to an echo REST API endpoint
  // Resolve target endpoint - strictly VITE_WEBHOOK_URL
  const apiEndpoint = import.meta.env?.VITE_WEBHOOK_URL;

  const isDefaultOrEmpty = !apiEndpoint || 
                           apiEndpoint.includes("YOUR_WEBHOOK_URL") ||
                           apiEndpoint.trim() === "";
  
  if (isDefaultOrEmpty) {
    console.error("V2 Startup Consulting: VITE_WEBHOOK_URL is not configured.");
    throw new Error("Form submission is disabled. Please configure VITE_WEBHOOK_URL.");
  }

  // Map Step 2 selection to backend service names (IGNITE, BLUEPRINT BUILD, etc.)
  const serviceMapping = SERVICE_MAPPING[formData.current_need] || "BESPOKE CONSULTANCY";

  // Build the strictly specified payload structure
  const payload = {
    name: formData.name || "",
    email: formData.email || "",
    phone: formData.phone || "",
    current_need: formData.current_need || "",
    service_mapping: serviceMapping,
    idea_description: formData.idea_description || "",
    help_needed: formData.help_needed || "",
    business_stage: formData.business_stage || "",
    target_audience: formData.target_audience || "",
    assets_ready: formData.assets_ready || "",
    timeline: formData.timeline || "",
    submitted_at: new Date().toISOString()
  };

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*" // Allow both JSON and text responses from automation platforms like Make
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorMsg = `Server responded with status: ${response.status} ${response.statusText}`;
      throw new Error(errorMsg);
    }

    // Safe-parse response: Make.com webhooks often return plain text e.g., "Accepted"
    let data = {};
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const textResponse = await response.text();
      data = { message: textResponse };
    }

    return {
      success: true,
      data: data,
      payload: payload
    };
  } catch (error) {
    console.error("API Submission Error: ", error);
    throw new Error(error.message || "Failed to submit consultation request. Please try again.");
  }
};
