import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import AboutHero from '../components/about/AboutHero';
import MissionValues from '../components/about/MissionValues';
import Timeline from '../components/about/Timeline';
import CommitteeSection from '../components/about/CommitteeSection';
import { ArrowRight, Calendar, Award } from 'lucide-react';
import './About.css';

export default function About() {
  useEffect(() => {
    document.title = 'About ITSA — Vision, Charter & Team | SLRTCE';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-view">
      {/* Page Heading & Introduction */}
      <AboutHero />

      {/* Structured Mission, Core Values & Pillars */}
      <MissionValues />

      {/* Visual Timeline / Journey */}
      <Timeline />

      {/* Committee & Leadership Structure */}
      <CommitteeSection />

      {/* Navigation CTA banner back to Events and Meta Summit */}
      <section className="about-bottom-cta-section section-py-sm" aria-label="Explore more of ITSA">
        <div className="container-wide">
          <div className="about-cta-card">
            <div className="cta-card-left">
              <span className="circuit-label">
                <span className="circuit-dot"></span>
                Next in The Circuit
              </span>
              <h2 className="about-cta-title">
                Experience ITSA in Action
              </h2>
              <p className="about-cta-sub">
                Browse our workshop archives or explore the dedicated portal for our flagship convention, Meta Summit.
              </p>
            </div>

            <div className="cta-card-buttons">
              <Link to={siteConfig.links.events} className="btn btn-secondary btn-lg">
                <Calendar size={18} />
                <span>Events Archive</span>
              </Link>
              <Link to={siteConfig.links.metaSummit} className="btn btn-primary btn-lg">
                <Award size={18} />
                <span>Meta Summit Portal</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
