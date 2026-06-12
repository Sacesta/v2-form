import React, { useRef } from "react";
import FormContainer from "../forms/FormContainer";
import logoImg from "../assets/v2_logo.jfif";

export default function OnboardingPage({ onSubmitSuccess }) {
  const privacyRef = useRef(null);

  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <a className="brand" href="#">
            <span className="logo-chip"><img src={logoImg} alt="V2 Startup Incubation Consultancy logo" /></span>
            <span className="brand-text"><b>V2 STARTUP</b><small>Incubation Consultancy</small></span>
          </a>
          <div className="links">
            <a href="#services">Services</a><a href="#how">How It Works</a><a href="#why">Why V2</a>
            <a className="btn btn-primary" href="#enquiry">Start Enquiry</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div>
              <div className="eyebrow">Decide. Build. Raise. &nbsp;•&nbsp; Fee-only advisory &nbsp;•&nbsp; Bangalore</div>
              <h1>Tell us what you are building, or what <span>business decision</span> you need to make.</h1>
              <p className="hero-copy">A short intake of about two minutes helps V2 understand your requirement and identify the right advisory path. No preparation needed.</p>
              <p className="hero-note">One-on-one advisory led personally by Mohit Arora.</p>
              <p className="hero-sub">33+ years of commercial leadership. Six-time entrepreneur. No equity. No success fee. No cheerleading.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#enquiry">Start Enquiry →</a>
                <a className="btn btn-teal" href="https://wa.me/918431549220?text=Hello%20V2%2C%20I%20would%20like%20to%20discuss%20a%20requirement." target="_blank" rel="noopener noreferrer">WhatsApp V2</a>
                <a className="btn btn-outline" href="mailto:v2-consulting@hotmail.com?subject=Discovery%20Call%20Request">Book Discovery Call</a>
              </div>
            </div>
            <aside className="preview" aria-label="Enquiry assistant preview">
              <div className="preview-top"><b>V2 Enquiry Assistant</b><span>About 2 minutes</span></div>
              <div className="progress"><span></span></div>
              <div className="preview-q"><b>Q1 — Contact details</b></div>
              <div className="preview-q">
                <b>Q2 — Which statement best describes your current need?</b>
                <div className="preview-option">Validate an idea</div>
                <div className="preview-option">Build a structured business</div>
                <div className="preview-option">Improve an existing startup</div>
                <div className="preview-option">Become investor-ready</div>
                <div className="preview-option">Bespoke consulting</div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="services">
          <div className="wrap">
            <h2>Choose the path that best matches your need</h2>
            <p className="section-lead">You do not need to know the name of a V2 package. Select the outcome closest to your current requirement and the enquiry assistant will do the rest.</p>
            <div className="service-grid">
              <article className="service"><span className="num">1</span><h3>Validate My Idea</h3><p>For early-stage founders who need an honest, evidence-based go or no-go view before committing time and money.</p></article>
              <article className="service"><span className="num">2</span><h3>Build My Business</h3><p>For founders who need business structure, pricing, go-to-market, financial planning, and an execution roadmap.</p></article>
              <article className="service"><span className="num">3</span><h3>Improve My Startup</h3><p>For founders already building who need sharper strategy, pricing, sales, or financial discipline.</p></article>
              <article className="service"><span className="num">4</span><h3>Get Investor-Ready</h3><p>For pitch decks, financial models, valuation, fundraise strategy, and complete readiness preparation.</p></article>
              <article className="service bespoke"><span className="num">5</span><h3>Bespoke Consulting</h3><p>For market studies, pricing, GTM, partner strategy, business cases, and feasibility assignments. Open to startups and established businesses.</p></article>
            </div>
          </div>
        </section>

        <section className="section alt" id="how">
          <div className="wrap">
            <h2>How it works</h2>
            <div className="steps-grid">
              <article className="mini"><div className="icon">①</div><h3>Share your details</h3><p>Tell us what you are building and what support you need. About two minutes.</p></article>
              <article className="mini"><div className="icon">②</div><h3>V2 reviews the requirement</h3><p>Your inputs are assessed and mapped to the appropriate advisory path.</p></article>
              <article className="mini"><div className="icon">③</div><h3>Discovery call</h3><p>A focused conversation to understand objectives, context, and constraints.</p></article>
              <article className="mini"><div className="icon">④</div><h3>Proposal and next steps</h3><p>You receive a clear scope, timeline, fee, and recommended way forward.</p></article>
            </div>
          </div>
        </section>

        <section className="enquiry-shell" id="enquiry">
          <div className="enquiry-wrap">
            <FormContainer onSubmitSuccess={onSubmitSuccess} openPrivacy={() => privacyRef.current?.showModal()} />
          </div>
        </section>

        <section className="section" id="why">
          <div className="wrap">
            <h2>Why clients choose V2</h2>
            <div className="benefit-grid">
              <article className="mini"><div className="icon">✓</div><h3>Honest assessment</h3><p>Clear, evidence-based guidance without unnecessary reassurance.</p></article>
              <article className="mini"><div className="icon">◎</div><h3>Senior one-on-one attention</h3><p>Every engagement is led personally by an experienced operator and founder.</p></article>
              <article className="mini"><div className="icon">▫</div><h3>Financial discipline</h3><p>Traceable assumptions, sound logic, and investor-grade outputs.</p></article>
              <article className="mini"><div className="icon">→</div><h3>Practical execution focus</h3><p>Recommendations designed to support real decisions and implementation.</p></article>
            </div>
            <div className="notice"><b>Privacy note:</b> Information submitted through this form is used only to review and respond to your enquiry, in line with the Digital Personal Data Protection Act, 2023. Please do not share highly confidential or proprietary documents through this page.</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span><b>No equity. No success fee. No cheerleading.</b></span>
          <span>Bangalore, India • v2-consulting@hotmail.com • WhatsApp +91 84315 49220</span>
          <span>© 2026 V2 Startup Incubation Consultancy. All rights reserved.</span>
        </div>
      </footer>

      <dialog id="privacyDialog" ref={privacyRef}>
        <div className="modal-body">
          <h3>Privacy notice</h3>
          <p>The information entered in this enquiry form is intended only for assessing and responding to your request, and is handled in line with the Digital Personal Data Protection Act, 2023. Do not upload or enter confidential technical information, proprietary business documents, passwords, payment details, or sensitive personal data.</p>
          <button className="btn btn-primary" onClick={() => privacyRef.current?.close()}>Close</button>
        </div>
      </dialog>
    </>
  );
}
