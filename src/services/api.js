/**
 * Submits the intake onboarding form data via a REST API POST request.
 * 
 * @param {object} payload - Pre-constructed JSON payload from the form container
 * @returns {Promise<object>} - Response payload
 */
export const submitIntakeData = async (payload) => {
  // Use VITE_WEBHOOK_URL if set
  const apiEndpoint = import.meta.env?.VITE_WEBHOOK_URL;

  const isDefaultOrEmpty = !apiEndpoint || 
                           apiEndpoint.includes("YOUR_WEBHOOK_URL") ||
                           apiEndpoint.trim() === "";
  
  if (isDefaultOrEmpty) {
    console.warn("V2 Startup Consulting: VITE_WEBHOOK_URL is not configured. Falling back to Email/WhatsApp delivery only.");
    // Return early without throwing an error to enable smooth zero-backend flow
    return {
      success: true,
      zeroBackend: true,
      payload: payload
    };
  }

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
