import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { metaSummitConfig } from '../../data/metaSummit';
import { ArrowRight, Sparkles, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import './MetaSummitFeature.css';

export default function MetaSummitFeature() {
  return (
    <section className="meta-summit-feature-section section-py" aria-labelledby="meta-feature-heading">
      <div className="container-wide">
        {/* Flagship Feature Container */}
        <div className="meta-feature-card">
          {/* Top highlight circuit rule */}
          <div className="meta-feature-rule" aria-hidden="true">
            <span className="feature-node left"></span>
            <div className="feature-line"></div>
            <span className="feature-node right"></span>
          </div>

          <div className="meta-feature-content">
            {/* Left Column: Editorial Information */}
            <div className="meta-feature-left">
              <div className="circuit-label">
                <span className="circuit-dot"></span>
                04 / Flagship Gathering
              </div>

              <div className="meta-title-group">
                <span className="meta-tag font-mono">ANNUAL FLAGSHIP SUMMIT</span>
                <h2 id="meta-feature-heading" className="meta-feature-title">
                  Meta Summit
                </h2>
                <p className="meta-feature-motto">
                  {metaSummitConfig.headline}
                </p>
              </div>

              <p className="meta-feature-description">
                {metaSummitConfig.subtitle} As ITSA's flagship annual platform, Meta Summit 
                brings together multi-track technical workshops, student project showcases, 
                and collaborative hack sprints under the Department of Information Technology at SLRTCE.
              </p>

              {/* Tracks preview list */}
              <div className="meta-tracks-preview">
                <span className="tracks-preview-label font-mono">CURATED DOMAINS</span>
                <div className="tracks-chip-grid">
                  {metaSummitConfig.tracks.map((track) => (
                    <div key={track.code} className="track-mini-chip">
                      <span className="track-code font-mono">{track.code}</span>
                      <span className="track-name">{track.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link to dedicated Flagship page */}
              <div className="meta-feature-cta-row">
                <Link to={siteConfig.links.metaSummit} className="btn btn-primary btn-lg">
                  <span>Explore Meta Summit</span>
                  <ArrowRight size={18} />
                </Link>
                <span className="meta-status-notice font-mono">
                  [ {metaSummitConfig.status} ]
                </span>
              </div>
            </div>

            {/* Right Column: Visual Poster Space / Flagship Emblem Frame */}
            <div className="meta-feature-right">
              <div className="poster-frame">
                <div className="poster-inner">
                  {metaSummitConfig.posterImage ? (
                    <img
                      src={metaSummitConfig.posterImage}
                      alt="Official Meta Summit Poster"
                      className="poster-img"
                    />
                  ) : (
                    <div className="poster-placeholder">
                      <div className="placeholder-circuit-badge">
                        <Award size={36} className="placeholder-icon" />
                        <span className="placeholder-tag font-mono">ITSA FLAGSHIP EVENT</span>
                      </div>

                      <div className="placeholder-center">
                        <span className="summit-callout">META SUMMIT</span>
                        <span className="summit-edition-tag">SLRTCE • ANNUAL EDITION</span>
                      </div>

                      <div className="placeholder-bottom-notice">
                        <p className="placeholder-notice-text">
                          Official event poster, finalized dates & keynote tracks will be published upon departmental approval.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Decorative border node accents */}
                <span className="frame-node tl"></span>
                <span className="frame-node tr"></span>
                <span className="frame-node bl"></span>
                <span className="frame-node br"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
