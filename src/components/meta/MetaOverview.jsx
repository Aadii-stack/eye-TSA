import React from 'react';
import { metaSummitConfig } from '../../data/metaSummit';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { WebCorner, WebEmblem } from './MetaDecor';
import './MetaOverview.css';

export default function MetaOverview() {
  return (
    <section
      className="meta-overview-section section-py meta-hairline"
      aria-labelledby="meta-overview-heading"
    >
      <span className="meta-ghost-word meta-ghost-overview" aria-hidden="true">
        Innovation
      </span>
      <WebCorner className="meta-overview-web" orientation="tl" />

      <div className="container-wide meta-overview-inner">
        <div className="meta-overview-grid">
          {/* Narrative Column */}
          <div className="overview-narrative">
            <Reveal>
              <div className="circuit-label">
                <span className="circuit-dot"></span>
                01 / Convention Concept
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="meta-overview-heading" className="section-title">
                What is Meta Summit?
              </h2>
            </Reveal>

            <div className="narrative-paragraphs">
              {metaSummitConfig.overview.map((para, idx) => (
                <Reveal key={idx} delay={0.12 + idx * 0.08}>
                  <p className={`overview-p ${idx === 0 ? 'overview-p--lead' : ''}`}>
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="overview-highlights-box">
                <span className="highlights-label font-mono">CONVENTION TENETS</span>
                <ul className="highlights-list">
                  <li>
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>Interactive coding labs rather than theoretical lectures</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>Student capstone exhibitions & live architecture critiques</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>Cross-domain collaboration uniting frontend, backend, and AI</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Poster / Visual Showcase Column */}
          <Reveal delay={0.15} className="overview-poster-col">
            <div className="summit-poster-card">
              <div className="card-node tl"></div>
              <div className="card-node tr"></div>
              <div className="card-node bl"></div>
              <div className="card-node br"></div>

              <div className="summit-poster-card-inner">
                <div className="poster-container-inner">
                  <WebCorner className="poster-web" />
                  {metaSummitConfig.posterImage ? (
                    <img
                      src={metaSummitConfig.posterImage}
                      alt="Official Meta Summit Poster"
                      className="summit-poster-img"
                    />
                  ) : (
                    <div className="summit-poster-placeholder">
                      <div className="summit-badge-icon">
                        <WebEmblem className="summit-emblem" />
                      </div>

                      <div className="placeholder-info-block">
                        <span className="edition-sup font-mono">ITSA FLAGSHIP EDITION</span>
                        <h3 className="summit-brand-name">META SUMMIT</h3>
                        <p className="college-sub font-mono">SLRTCE • MUMBAI METROPOLITAN REGION</p>
                      </div>

                      <div className="poster-slot-notice">
                        <span className="notice-badge font-mono">OFFICIAL POSTER SPACE</span>
                        <p className="notice-sub">
                          Approved visual artwork, verified schedule and guest details will be mounted here upon official release.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
