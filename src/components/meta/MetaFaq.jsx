import React, { useState } from 'react';
import { metaSummitConfig } from '../../data/metaSummit';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './MetaFaq.css';

export default function MetaFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="meta-faq-section section-py" aria-labelledby="faq-heading">
      <div className="container-wide">
        <div className="section-intro">
          <div className="circuit-label">
            <span className="circuit-dot"></span>
            04 / Information & Guidance
          </div>
          <h2 id="faq-heading" className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">
            Essential information regarding attendee eligibility, registration policies, and certification.
          </p>
        </div>

        <div className="faq-accordion-list">
          {metaSummitConfig.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`faq-chevron ${isOpen ? 'rotated' : ''}`}
                  />
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className="faq-answer-container"
                  style={{ display: isOpen ? 'block' : 'none' }}
                >
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
