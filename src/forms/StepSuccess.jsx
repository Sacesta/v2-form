import React from 'react';
export default function StepSuccess({ answers, labels, routingTag, backendSuccess }) {
  const lines = [
    `Name: ${answers.contact?.name || ""}`,
    `Email: ${answers.contact?.email || ""}`,
    `Phone: ${(answers.contact?.phonePrefix && answers.contact?.phone) ? `${answers.contact.phonePrefix} ${answers.contact.phone}` : answers.contact?.phone || ""}`,
    `Current need: ${labels.need || ""}`,
    `Description: ${answers.description || ""}`,
    `Primary support area: ${labels.dynamic || ""}`,
    labels.stage ? `Current stage: ${labels.stage}` : null,
    labels.customer ? `Intended customer: ${labels.customer}` : null,
    labels.readiness ? `Available material: ${labels.readiness}` : null,
    `Timeline: ${labels.timeline || ""}`,
    `Reference code: ${routingTag || ""}`
  ];
  const summaryText = lines.filter(Boolean).join("\n");
  const bodyText = `New V2 enquiry\n\n${summaryText}\n\nSubmitted: ${new Date().toLocaleString()}`;
  const subject = `V2 Enquiry — ${answers.contact?.name || "New client"}`;
  
  const emailLink = `mailto:v2-consulting@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=v2-consulting@hotmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  const whatsappLink = `https://wa.me/918431549220?text=${encodeURIComponent(bodyText)}`;

  return (
    <section className="screen active" data-key="success">
      <div className="success">
        <div className="tick">✓</div>
        <h3 className="q-title" id="successTitle">
          {backendSuccess ? "Thank you. Your enquiry has been recorded." : "Your enquiry is ready. Send it to V2 now."}
        </h3>
        <p className="q-help" id="successHelp">
          {backendSuccess ? "We will review your requirement and contact you shortly using the details provided." : "Choose your preferred method below. Your answers are already written into the message, so you only need to press send."}
        </p>
        {!backendSuccess && (
          <>
            <div className="send-row">
              <a className="btn btn-primary" href={gmailLink} target="_blank" rel="noopener noreferrer">Send via Gmail</a>
              <a className="btn btn-primary" href={emailLink} style={{ background: '#4A505B', boxShadow: 'none' }}>Send via Mail App</a>
              <a className="btn btn-teal" href={whatsappLink} target="_blank" rel="noopener noreferrer">Send by WhatsApp</a>
            </div>
            <p className="send-note">V2 will review the requirement and contact you using the details provided. If neither option opens on your device, email <a href="mailto:v2-consulting@hotmail.com">v2-consulting@hotmail.com</a> directly.</p>
          </>
        )}
      </div>
    </section>
  );
}