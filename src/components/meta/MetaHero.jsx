import React, { useState } from 'react';
import { metaSummitConfig } from '../../data/metaSummit';
import { siteConfig } from '../../data/siteConfig';
import { Calendar, MapPin, ArrowRight, Bell, Sparkles, Shield, Cpu } from 'lucide-react';
import './MetaHero.css';

export default function MetaHero({ onOpenInterestModal }) {
  return (
    <section className="meta-hero-section" aria-labelledby="meta-summit-title">
      {/* Decorative top circuit rule */}
      <div className="meta-circuit-banner-coords font-mono">
        <span>CONVENTION // FLAGSHIP</span>
        <span className="coord-divider">/</span>
        <span>SLRTCE.ITSA.METASUMMIT</span>
      </div>

      <div className="container-wide meta-hero-container">
        <div className="meta-hero-content">
          <div className="meta-flagship-pill">
            <span className="circuit-dot"></span>
            <span className="flagship-text font-mono">
              ITSA FLAGSHIP ANNUAL CONVENTION • {siteConfig.institutionShort}
            </span>
          </div>

          <h1 id="meta-summit-title" className="meta-hero-headline">
            {metaSummitConfig.title}
          </h1>

          <p className="meta-hero-tagline-motto font-display">
            {metaSummitConfig.headline}
          </p>

          <p className="meta-hero-lead-text">
            {metaSummitConfig.subtitle}
          </p>

          {/* Quick status pills: Date, Venue, Status */}
          <div className="meta-hero-status-strip">
            <div className="status-pill-item">
              <Calendar size={16} className="pill-icon" />
              <div>
                <span className="pill-label font-mono">SCHEDULE</span>
                <span className="pill-val">{metaSummitConfig.dateDisplay}</span>
              </div>
            </div>

            <div className="pill-strip-sep"></div>

            <div className="status-pill-item">
              <MapPin size={16} className="pill-icon" />
              <div>
                <span className="pill-label font-mono">LOCATION</span>
                <span className="pill-val">{metaSummitConfig.venue}</span>
              </div>
            </div>

            <div className="pill-strip-sep"></div>

            <div className="status-pill-item">
              <Cpu size={16} className="pill-icon" />
              <div>
                <span className="pill-label font-mono">STATUS</span>
                <span className="pill-val status-active-text">{metaSummitConfig.status}</span>
              </div>
            </div>
          </div>

          {/* CTA Group */}
          <div className="meta-hero-cta-group">
            {metaSummitConfig.registrationOpen && metaSummitConfig.registrationUrl ? (
              <a
                href={metaSummitConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <span>Register for Meta Summit</span>
                <ArrowRight size={18} />
              </a>
            ) : (
              <button
                type="button"
                onClick={onOpenInterestModal}
                className="btn btn-primary btn-lg notify-btn"
              >
                <Bell size={18} />
                <span>Notify Me When Registrations Open</span>
              </button>
            )}

            <a href="#meta-tracks" className="btn btn-secondary btn-lg">
              <span>View Curated Tracks</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
