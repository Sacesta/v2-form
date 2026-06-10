/**
 * Validates whether an email address follows standard syntax.
 * @param {string} email 
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

/**
 * Validates whether a phone number is structurally valid.
 * Allows digits, spaces, plus sign, dashes, and parentheses.
 * Requires at least 7 digits.
 * @param {string} phone 
 * @returns {boolean}
 */
export const isValidPhone = (phone) => {
  if (!phone) return false;
  // Strip non-digit characters to check digit count
  const digitsOnly = phone.replace(/\D/g, "");
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    return false;
  }
  // Check characters
  const phoneRegex = /^[+\s()0-9.-]+$/;
  return phoneRegex.test(phone.trim());
};

/**
 * Helper to validate Step 1 fields
 * @param {object} data - { name, email, phone }
 * @returns {object} errors - Map of field name to error message
 */
export const validateStep1 = (data) => {
  const errors = {};
  
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your full name (minimum 2 characters).";
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.email = "Please enter a valid business email address.";
  }
  
  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone = "Please enter a valid phone number (minimum 7 digits).";
  }
  
  return errors;
};

/**
 * Helper to validate character count textareas
 * @param {string} value 
 * @param {string} fieldName 
 * @param {number} maxLen 
 * @returns {string|null} - Error message or null
 */
export const validateTextarea = (value, fieldName = "Description", maxLen = 200) => {
  if (!value || value.trim().length === 0) {
    return `Please share your response. This field is required.`;
  }
  if (value.trim().length > maxLen) {
    return `Your response is too long. Please shorten it to ${maxLen} characters or less.`;
  }
  return null;
};
