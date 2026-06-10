# V2 Startup Incubation Consulting Intake Portal

A premium, production-grade consulting discovery and lead qualification onboarding application built with **React**, **Vite**, and **Tailwind CSS**. It is fully responsive, accessible, secure, and ready for deployment to Vercel.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally (Development)
```bash
npm run dev
```
The application will launch on your local host (usually `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
The compiled output is optimized and written to the `/dist` folder.

---

## 🔧 Environment Configuration

To wire this application to your Make.com (formerly Integromat) automation workflow:

1. Create a `.env` or `.env.local` file in the root directory.
2. Add your custom Webhook URL:
   ```env
   VITE_WEBHOOK_URL=https://hook.us1.make.com/your-make-webhook-id
   ```

---

## 🚀 Deployment to Vercel

This application is ready to ship to **Vercel** with zero-configuration:

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel.
3. Vercel automatically detects **Vite** as the framework and sets:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Under **Environment Variables**, add:
   - Key: `VITE_WEBHOOK_URL`
   - Value: `https://hook.us1.make.com/your-make-webhook-id`
5. Click **Deploy**.

---

## 📊 REST API Integration & Payload Structure

Upon completing the 8 steps of the intake wizard, the system makes a secure REST API `POST` request.

### Request Profile
- **Method**: `POST`
- **Headers**:
  ```http
  Content-Type: application/json
  Accept: application/json
  ```
- **Payload Format (JSON)**:
  ```json
  {
    "name": "Sarah Jenkins",
    "email": "sarah@mycompany.com",
    "phone": "+15550192834",
    "current_need": "I am building already and need help with strategy, pricing, GTM, or financials.",
    "service_mapping": "BLUEPRINT BUILD",
    "idea_description": "A B2B SaaS platform that automates invoice reconciliation for manufacturing firms using AI.",
    "help_needed": "Business plan, pricing, and go-to-market strategy",
    "business_stage": "Prototype, product, or service already exists",
    "target_audience": "Enterprise finance controllers in mid-sized logistics and retail firms in North America.",
    "assets_ready": "Product, website, prototype, customers, or revenue",
    "timeline": "Within 1 to 2 weeks",
    "submitted_at": "2026-06-10T14:46:07Z"
  }
  ```

---

## 🔗 Zapier / HubSpot / Salesforce / Google Sheets Integration

Since the REST API outputs a standard flat JSON structure, you can easily handle the request in automation suites:

1. **Webhook Trigger**: Create an n8n webhook or Zapier "Catch Hook" trigger listening to your custom API endpoint.
2. **Data Routing**:
   - Save directly to columns in **Google Sheets**.
   - Create a contact and deal card in **HubSpot** or **Salesforce** mapping `service_mapping` to the appropriate pipeline.
   - Send email notifications via **Slack** or **Microsoft Teams** to alert partners when an urgent (`Within 1 week`) inquiry comes in.
