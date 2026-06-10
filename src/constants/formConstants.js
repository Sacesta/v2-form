// Internal service mapping mapping statement code to backend service names
export const SERVICE_MAPPING = {
  "I have an idea and want to know if it is worth pursuing.": "IGNITE",
  "I want to convert my idea into a proper business plan.": "BLUEPRINT BUILD",
  "I am building already and need help with strategy, pricing, GTM, or financials.": "BLUEPRINT BUILD",
  "I need investor-ready documents such as pitch deck, financial model, valuation, or fundraise plan.": "INVESTOR READY PRO",
  "I need custom consulting for a business, market, product, or new opportunity.": "BESPOKE CONSULTANCY",
};

// Form questions structure for all 8 steps
export const FORM_STEPS = {
  1: {
    id: 1,
    title: "Basic Details",
    subtitle: "Share your contact info",
    question: "Please share your basic contact details.",
    description: "We collect this to get in touch with you after reviewing your application. Your details are secured and kept strictly confidential.",
    fields: [
      { id: "name", label: "Full Name", type: "text", placeholder: "e.g., Sarah Jenkins", required: true },
      { id: "email", label: "Email Address", type: "email", placeholder: "e.g., sarah@mycompany.com", required: true },
      { id: "phone", label: "Phone Number", type: "tel", placeholder: "e.g., +1 (555) 019-2834", required: true },
    ]
  },
  2: {
    id: 2,
    title: "Current Need",
    subtitle: "What is your main focus?",
    question: "Which statement best describes your current need?",
    description: "This helps us direct your inquiry to the most relevant incubation team or advisory partner.",
    options: [
      {
        value: "I have an idea and want to know if it is worth pursuing.",
        label: "Idea Validation",
        desc: "Assess market feasibility and customer interest before committing resources.",
        code: "IGNITE",
        icon: "Lightbulb"
      },
      {
        value: "I want to convert my idea into a proper business plan.",
        label: "Business Plan Creation",
        desc: "Structured business plan with strategy, operating model, and commercial blueprint.",
        code: "BLUEPRINT BUILD",
        icon: "FileSpreadsheet"
      },
      {
        value: "I am building already and need help with strategy, pricing, GTM, or financials.",
        label: "Growth Strategy & Go-To-Market",
        desc: "Refining pricing models, marketing channels, and unit economics to scale your product.",
        code: "BLUEPRINT BUILD",
        icon: "TrendingUp"
      },
      {
        value: "I need investor-ready documents such as pitch deck, financial model, valuation, or fundraise plan.",
        label: "Investor & Fundraising Readiness",
        desc: "Premium pitch deck, custom dynamic financial models, and structured fundraising roadmap.",
        code: "INVESTOR READY PRO",
        icon: "Presentation"
      },
      {
        value: "I need custom consulting for a business, market, product, or new opportunity.",
        label: "Bespoke Consulting Services",
        desc: "Tailored engagements for custom research, business cases, and advisory mandates.",
        code: "BESPOKE CONSULTANCY",
        icon: "Briefcase"
      }
    ]
  },
  3: {
    id: 3,
    title: "Core Idea",
    subtitle: "Describe your concept",
    question: "Please describe your idea, business, or requirement in one short sentence.",
    description: "Write a high-level summary of what your business does or what you intend to build (max 200 characters).",
    fields: [
      {
        id: "idea_description",
        label: "Brief Description",
        type: "textarea",
        placeholder: "e.g., A B2B SaaS platform that automates invoice reconciliation for manufacturing firms using AI...",
        maxLength: 200,
        required: true
      }
    ]
  },
  4: {
    id: 4,
    title: "Advisory Help",
    subtitle: "Main goals for support",
    question: "What kind of help are you mainly looking for?",
    description: "Select the primary deliverable or objective you hope to achieve with our consultants.",
    options: [
      { value: "Idea validation and go/no-go clarity", label: "Idea validation and go/no-go clarity" },
      { value: "Business plan, pricing, and go-to-market strategy", label: "Business plan, pricing, and go-to-market strategy" },
      { value: "Financial model, valuation, or investor pitch deck", label: "Financial model, valuation, or investor pitch deck" },
      { value: "Market research, competition study, or business case", label: "Market research, competition study, or business case" },
      { value: "Not sure yet, I need guidance", label: "Not sure yet, I need guidance" }
    ]
  },
  5: {
    id: 5,
    title: "Business Stage",
    subtitle: "Your current progress",
    question: "What stage are you currently at?",
    description: "Helps us match you with advisors who specialize in early-stage validation vs growth-stage execution.",
    options: [
      { value: "Just an idea", label: "Just an idea", badge: "Pre-seed" },
      { value: "Research or early validation started", label: "Research or early validation started", badge: "Discovery" },
      { value: "Prototype, product, or service already exists", label: "Prototype, product, or service already exists", badge: "MVP / Beta" },
      { value: "Early users, customers, or revenue exists", label: "Early users, customers, or revenue exists", badge: "Product-Market Fit" },
      { value: "Existing company exploring a new product, market, or business line", label: "Existing company exploring a new product, market, or business line", badge: "Enterprise Innovation" }
    ]
  },
  6: {
    id: 6,
    title: "Target Audience",
    subtitle: "Who is your customer?",
    question: "Who is this idea, product, or service meant for?",
    description: "Define your ideal customer profile, target demographics, or business vertical (max 200 characters).",
    fields: [
      {
        id: "target_audience",
        label: "Target Customer Profile",
        type: "textarea",
        placeholder: "e.g., Enterprise finance controllers in mid-sized logistics and retail firms in North America...",
        maxLength: 200,
        required: false
      }
    ]
  },
  7: {
    id: 7,
    title: "Ready Assets",
    subtitle: "What is prepared?",
    question: "What do you already have ready?",
    description: "Knowing what materials you have helps us skip redundant research and dive straight into strategy.",
    options: [
      { value: "Nothing yet, only an idea", label: "Nothing yet, only an idea" },
      { value: "Some notes, research, or customer feedback", label: "Some notes, research, or customer feedback" },
      { value: "Pitch deck, business plan, or financial numbers", label: "Pitch deck, business plan, or financial numbers" },
      { value: "Product, website, prototype, customers, or revenue", label: "Product, website, prototype, customers, or revenue" }
    ]
  },
  8: {
    id: 8,
    title: "Timeline",
    subtitle: "Expected launch date",
    question: "How soon do you need support?",
    description: "We review inquiries daily. Your project start expectation helps us manage consultant availability.",
    options: [
      { value: "Within 1 week", label: "Within 1 week", indicator: "Urgent" },
      { value: "Within 1 to 2 weeks", label: "Within 1 to 2 weeks", indicator: "Active" },
      { value: "More than 3 weeks", label: "More than 3 weeks", indicator: "Flexible" },
      { value: "Just exploring for now", label: "Just exploring for now", indicator: "Exploratory" }
    ]
  }
};
