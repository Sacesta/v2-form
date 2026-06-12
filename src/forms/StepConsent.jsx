import React from 'react';

export default function StepConsent({ answers, labels, openPrivacy, setAnswers }) {
  const data = [
    { label: "Name", value: answers.contact?.name },
    { label: "Email", value: answers.contact?.email },
    { label: "Phone", value: (answers.contact?.phonePrefix && answers.contact?.phone) ? `${answers.contact.phonePrefix} ${answers.contact.phone}` : answers.contact?.phone },
    { label: "Current need", value: labels.need },
    { label: "Description", value: answers.description },
    { label: "Primary support area", value: labels.dynamic },
    labels.stage ? { label: "Current stage", value: labels.stage } : null,
    labels.customer ? { label: "Intended customer", value: labels.customer } : null,
    labels.readiness ? { label: "Available material", value: labels.readiness } : null,
    { label: "Timeline", value: labels.timeline }
  ].filter(Boolean);
  
  return (
    <section className="screen active" data-key="consent">
      <h3 className="q-title">Review and submit</h3>
      <p className="q-help">Please review your answers and confirm that V2 may use your details to respond to this enquiry.</p>
      
      <div className="summary" style={{ padding: '24px', backgroundColor: '#F7F8FA', borderRadius: '16px', border: '1px solid #E3E5E9', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {data.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#6A6E76', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</span>
            <span style={{ fontSize: '15px', fontWeight: '500', color: '#16181D', lineHeight: '1.4' }}>{item.value}</span>
            {idx < data.length - 1 && <hr style={{ border: 'none', borderTop: '1px solid #E3E5E9', margin: '10px 0 0 0' }} />}
          </div>
        ))}
      </div>

      <div className="consent" style={{ marginTop: '24px' }}>
        <input type="checkbox" id="consentBox" checked={answers.consent || false} onChange={e => setAnswers(prev => ({...prev, consent: e.target.checked}))} />
        <label htmlFor="consentBox">
          I agree that V2 may use the information submitted to review and respond to my enquiry. I have not included highly confidential or proprietary documents or information.{' '}
          <button type="button" onClick={openPrivacy} style={{ border: 0, background: 'none', textDecoration: 'underline', cursor: 'pointer', color: '#00A896', fontWeight: '600' }}>Privacy notice</button>
        </label>
      </div>
    </section>
  );
}