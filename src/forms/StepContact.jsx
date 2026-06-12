import React from 'react';
export default function StepContact({ answers, setAnswers }) {
  const contact = answers.contact || { name: "", email: "", phone: "" };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, contact: { ...prev.contact, [name]: value } }));
  };
  return (
    <section className="screen active" data-key="contact">
      <h3 className="q-title">Your contact details</h3>
      <p className="q-help">We will use these details only to review and respond to your enquiry.</p>
      <div className="fields">
        <div><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required value={contact.name} onChange={handleChange} /></div>
        <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required value={contact.email} onChange={handleChange} /></div>
        <div><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" required value={contact.phone} onChange={handleChange} /></div>
      </div>
    </section>
  );
}