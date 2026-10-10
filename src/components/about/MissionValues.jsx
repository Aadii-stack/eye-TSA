import React from 'react';
import { aboutData } from '../../data/aboutData';
import { CheckCircle2, Terminal, Users, Award, BookOpen } from 'lucide-react';
import './MissionValues.css';

export default function MissionValues() {
  return (
    <section className="mission-values-section section-py" aria-labelledby="values-heading">
      <div className="container-wide">
        {/* Core Values Section */}
        <div className="section-intro">
          <div className="circuit-label">
            <span className="circuit-dot"></span>
            01 / Guiding Principles
          </div>
          <h2 id="values-heading" className="section-title">
            The Values Behind Every Session
          </h2>
          <p className="section-subtitle">
            How ITSA approaches technical education, community responsibility, and student autonomy.
          </p>
        </div>

        <div className="values-grid">
          {aboutData.values.map((val) => (
            <div key={val.num} className="value-card">
              <div className="value-header">
                <span className="value-number font-mono">[ {val.num} ]</span>
                <span className="value-node-dot"></span>
              </div>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-desc">{val.description}</p>
            </div>
          ))}
        </div>

        {/* Pillars of Activity Section */}
        <div className="pillars-wrapper">
          <div className="pillars-header">
            <div className="circuit-label">
              <span className="circuit-dot"></span>
              02 / Pillars of Action
            </div>
            <h3 className="pillars-main-title">
              What ITSA Delivers for IT Students
            </h3>
          </div>

          <div className="pillars-grid">
            {aboutData.pillars.map((pillar, idx) => (
              <div key={pillar.label} className="pillar-item">
                <div className="pillar-num font-mono">0{idx + 1}</div>
                <div className="pillar-details">
                  <h4 className="pillar-name">{pillar.label}</h4>
                  <p className="pillar-text">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
