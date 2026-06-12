import React, { useEffect } from 'react';

const COUNTRY_CODES = [
  { code: '+91', label: 'India (+91)' },
  { code: '+1', label: 'USA/Canada (+1)' },
  { code: '+44', label: 'UK (+44)' },
  { code: '+61', label: 'Australia (+61)' },
  { code: '+971', label: 'UAE (+971)' },
  { code: '+65', label: 'Singapore (+65)' },
  { code: '+81', label: 'Japan (+81)' },
  { code: '+49', label: 'Germany (+49)' },
  { code: '+33', label: 'France (+33)' },
  { code: '+41', label: 'Switzerland (+41)' },
];

export default function StepContact({ answers, setAnswers }) {
  const contact = answers.contact || { name: "", email: "", phone: "", phonePrefix: "+91" };

  useEffect(() => {
    if (!answers.contact || !answers.contact.phonePrefix) {
      setAnswers(prev => ({
        ...prev,
        contact: { ...(prev.contact || {}), phonePrefix: "+91" }
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, contact: { ...prev.contact, [name]: value } }));
  };

  return (
    <section className="screen active" data-key="contact">
      <h3 className="q-title">Your contact details</h3>
      <p className="q-help">We will use these details only to review and respond to your enquiry.</p>
      <div className="fields">
        <div><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required value={contact.name || ""} onChange={handleChange} /></div>
        <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required value={contact.email || ""} onChange={handleChange} /></div>
        
        <div>
          <label htmlFor="phone">Phone</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select 
              name="phonePrefix" 
              value={contact.phonePrefix || "+91"} 
              onChange={handleChange}
              style={{ width: 'auto', flexShrink: 0, paddingRight: '24px' }}
            >
              {COUNTRY_CODES.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
            </select>
            <input 
              id="phone" 
              name="phone" 
              type="tel" 
              autoComplete="tel" 
              required 
              value={contact.phone || ""} 
              onChange={handleChange} 
              style={{ flexGrow: 1 }}
              placeholder="e.g. 9876543210"
            />
          </div>
        </div>
      </div>
    </section>
  );
}