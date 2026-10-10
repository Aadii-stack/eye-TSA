import React from 'react';
import { metaSummitConfig } from '../../data/metaSummit';
import { Award, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './MetaOverview.css';

export default function MetaOverview() {
  return (
    <section className="meta-overview-section section-py" aria-labelledby="meta-overview-heading">
      <div className="container-wide">
        <div className="meta-overview-grid">
          {/* Narrative Column */}
          <div className="overview-narrative">
            <div className="circuit-label">
              <span className="circuit-dot"></span>
              01 / Convention Concept
            </div>
            <h2 id="meta-overview-heading" className="section-title">
              What is Meta Summit?
            </h2>

            <div className="narrative-paragraphs">
              {metaSummitConfig.overview.map((para, idx) => (
                <p key={idx} className="overview-p">
                  {para}
                </p>
              ))}
            </div>

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
          </div>

          {/* Poster / Visual Showcase Column */}
          <div className="overview-poster-col">
            <div className="summit-poster-card">
              <div className="card-node tl"></div>
              <div className="card-node tr"></div>
              <div className="card-node bl"></div>
              <div className="card-node br"></div>

              <div className="poster-container-inner">
                {metaSummitConfig.posterImage ? (
                  <img
                    src={metaSummitConfig.posterImage}
                    alt="Official Meta Summit Poster"
                    className="summit-poster-img"
                  />
                ) : (
                  <div className="summit-poster-placeholder">
                    <div className="summit-badge-icon">
                      <Award size={48} className="award-icon" />
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
        </div>
      </div>
    </section>
  );
}
