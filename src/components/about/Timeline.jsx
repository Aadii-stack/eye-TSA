import React from 'react';
import { aboutData } from '../../data/aboutData';
import './Timeline.css';

export default function Timeline() {
  return (
    <section className="timeline-section section-py" aria-labelledby="timeline-heading">
      <div className="container-wide">
        <div className="section-intro">
          <div className="circuit-label">
            <span className="circuit-dot"></span>
            03 / Evolution & Milestones
          </div>
          <h2 id="timeline-heading" className="section-title">
            The ITSA Journey
          </h2>
          <p className="section-subtitle">
            How a departmental student initiative grew into a hub for campus technical activity and flagship conventions.
          </p>
        </div>

        <div className="timeline-circuit-track">
          <div className="timeline-central-line"></div>

          <div className="timeline-items">
            {aboutData.timeline.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.phase}
                  className={`timeline-entry ${isEven ? 'entry-left' : 'entry-right'}`}
                >
                  <div className="timeline-entry-card">
                    <div className="entry-header">
                      <span className="entry-phase font-mono">{step.phase}</span>
                      <span className="entry-marker font-mono">0{idx + 1}</span>
                    </div>
                    <h3 className="entry-title">{step.title}</h3>
                    <p className="entry-detail">{step.detail}</p>
                  </div>
                  <div className="timeline-node-dot" aria-hidden="true"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
