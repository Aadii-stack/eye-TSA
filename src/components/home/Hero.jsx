import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { ArrowRight, Sparkles, Terminal, Code2, Users2, ChevronRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" aria-label="ITSA Introduction">
      {/* Circuit coordinate indicators */}
      <div className="hero-circuit-coords">
        <span className="coord-chip">NODE: SLRTCE-IT-01</span>
        <span className="coord-divider">/</span>
        <span className="coord-chip">SYS: ITSA_CORE</span>
      </div>

      <div className="container-wide hero-container">
        <div className="hero-content">
          {/* Institution Header Badge */}
          <div className="hero-badge-wrap">
            <div className="hero-badge">
              <span className="circuit-dot"></span>
              <span className="badge-text">
                Department of Information Technology • {siteConfig.institutionShort}
              </span>
            </div>
          </div>

          {/* Main Headline: "MAKE IT HAPPEN." */}
          <div className="hero-headline-block">
            <span className="hero-subheading-tag">Information Technology Student Association</span>
            <h1 className="hero-tagline-title">
              <span className="tagline-row word-make">MAKE</span>
              <span className="tagline-row word-it">IT</span>
              <span className="tagline-row word-happen">
                HAPPEN<span className="hero-period">.</span>
              </span>
            </h1>
          </div>

          {/* Authentic Introductory Copy */}
          <p className="hero-description">
            Welcome to <strong>ITSA</strong>, the official student-led association of the Information 
            Technology Department at Shree L. R. Tiwari College of Engineering. We build spaces where 
            curiosity converts to practical engineering through workshops, collaborative coding, 
            and our annual flagship gathering, <em>Meta Summit</em>.
          </p>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <Link to={siteConfig.links.about} className="btn btn-primary btn-lg hero-cta-btn">
              <span>Explore ITSA</span>
              <ArrowRight size={18} className="cta-arrow" />
            </Link>

            <Link to={siteConfig.links.events} className="btn btn-secondary btn-lg hero-cta-btn">
              <span>Discover Our Events</span>
            </Link>
          </div>

          {/* Circuit connection metrics / core focus markers */}
          <div className="hero-focus-strip">
            <div className="focus-strip-item">
              <div className="focus-icon-box">
                <Code2 size={16} className="focus-icon" />
              </div>
              <div className="focus-text">
                <span className="focus-title">Hands-on Labs</span>
                <span className="focus-desc">Workshops & Modern Stacks</span>
              </div>
            </div>

            <div className="focus-strip-divider"></div>

            <div className="focus-strip-item">
              <div className="focus-icon-box">
                <Users2 size={16} className="focus-icon" />
              </div>
              <div className="focus-text">
                <span className="focus-title">Peer Community</span>
                <span className="focus-desc">Knowledge Sharing & Teams</span>
              </div>
            </div>

            <div className="focus-strip-divider"></div>

            <div className="focus-strip-item">
              <div className="focus-icon-box">
                <Terminal size={16} className="focus-icon" />
              </div>
              <div className="focus-text">
                <span className="focus-title">Meta Summit</span>
                <span className="focus-desc">Annual Flagship Gathering</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Editorial Graphic: Circuit Monogram Composition */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-circuit-card">
            {/* Corner Node Markers */}
            <div className="card-node node-tl"></div>
            <div className="card-node node-tr"></div>
            <div className="card-node node-bl"></div>
            <div className="card-node node-br"></div>

            <div className="circuit-card-header">
              <div className="card-dots">
                <span className="status-indicator"></span>
                <span className="dot-code">CIRCUIT / ACTIVE</span>
              </div>
              <span className="card-id">SLRTCE.ITSA.V2</span>
            </div>

            <div className="circuit-centerpiece">
              <div className="monogram-backdrop">
                <img 
                  src={siteConfig.logo} 
                  alt="ITSA Emblem" 
                  className="hero-emblem-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="circuit-graphic-lines">
                <svg viewBox="0 0 320 220" className="circuit-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 20 110 L 90 110 L 120 70 L 200 70 L 230 110 L 300 110" stroke="rgba(212, 175, 55, 0.45)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 50 160 L 110 160 L 140 120 L 180 120 L 210 160 L 270 160" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.2" />
                  <circle cx="120" cy="70" r="3.5" fill="#d4af37" />
                  <circle cx="200" cy="70" r="3.5" fill="#d4af37" />
                  <circle cx="140" cy="120" r="3.5" fill="rgba(255,255,255,0.4)" />
                  <circle cx="180" cy="120" r="3.5" fill="rgba(255,255,255,0.4)" />
                  <circle cx="20" cy="110" r="2.5" fill="#d4af37" />
                  <circle cx="300" cy="110" r="2.5" fill="#d4af37" />
                </svg>
              </div>
            </div>

            <div className="circuit-card-footer">
              <div className="circuit-label-line">
                <span className="code-label">TAGLINE</span>
                <span className="code-val">{siteConfig.tagline}</span>
              </div>
              <div className="circuit-label-line">
                <span className="code-label">CAMPUS</span>
                <span className="code-val">SLRTCE, Thane</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
