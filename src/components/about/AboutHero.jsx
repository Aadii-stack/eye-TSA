import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { aboutData } from '../../data/aboutData';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';
import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className="about-hero-section" aria-labelledby="about-page-title">
      <div className="container-wide">
        <div className="about-hero-coords font-mono">
          <span>CHAPTER // ABOUT ITSA</span>
          <span className="coord-divider">/</span>
          <span>SLRTCE DEPT OF INFORMATION TECHNOLOGY</span>
        </div>

        <div className="about-hero-main">
          <div className="circuit-label">
            <span className="circuit-dot"></span>
            Association Charter & Vision
          </div>

          <h1 id="about-page-title" className="about-page-title">
            Engineered by Students. <br />
            <span className="title-highlight">Empowering Technical Growth.</span>
          </h1>

          <div className="about-hero-statement-box">
            <p className="statement-lead">
              "{aboutData.mission}"
            </p>
            <div className="statement-author">
              <span className="author-motto font-mono">{aboutData.tagline}</span>
              <span className="author-dept">{siteConfig.department}, {siteConfig.institutionShort}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
