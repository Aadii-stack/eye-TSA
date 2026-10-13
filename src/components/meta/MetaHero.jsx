import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { metaSummitConfig } from '../../data/metaSummit';
import { siteConfig } from '../../data/siteConfig';
import { Calendar, MapPin, ArrowRight, Bell, Cpu } from 'lucide-react';
import { WebCorner, SpiderMotif } from './MetaDecor';
import { META_EASE } from './Reveal';
import cityHero from '../../assets/meta/meta-city-hero.png';
import './MetaHero.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: META_EASE } },
};

const titleClip = {
  hidden: { y: '108%' },
  show: { y: '0%', transition: { duration: 0.9, ease: META_EASE, delay: 0.2 } },
};

export default function MetaHero({ onOpenInterestModal }) {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const cityY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section
      ref={sectionRef}
      className="meta-hero-section"
      aria-labelledby="meta-summit-title"
    >
      {/* Cinematic nighttime cityscape backdrop */}
      <div className="meta-hero-backdrop" aria-hidden="true">
        <motion.div className="meta-hero-city" style={reduce ? undefined : { y: cityY }}>
          <img src={cityHero} alt="" />
        </motion.div>
        <div className="meta-hero-atmo meta-hero-atmo-red" />
        <div className="meta-hero-atmo meta-hero-atmo-blue" />
        <div className="meta-hero-grain" />
      </div>

      {/* Fine web geometry + suspended spider */}
      <WebCorner className="meta-hero-web" />
      <SpiderMotif className="meta-hero-spider" />

      {/* Decorative top circuit rule */}
      <div className="meta-circuit-banner-coords font-mono">
        <span>CONVENTION // FLAGSHIP</span>
        <span className="coord-divider">/</span>
        <span>SLRTCE.ITSA.METASUMMIT</span>
      </div>

      <div className="container-wide meta-hero-container">
        <motion.div
          className="meta-hero-content"
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate="show"
        >
          <motion.div className="meta-flagship-pill" variants={item}>
            <span className="circuit-dot"></span>
            <span className="flagship-text font-mono">
              ITSA FLAGSHIP ANNUAL CONVENTION • {siteConfig.institutionShort}
            </span>
          </motion.div>

          <span className="meta-hero-title-mask">
            <motion.h1
              id="meta-summit-title"
              className="meta-hero-headline"
              variants={titleClip}
            >
              {metaSummitConfig.title}
            </motion.h1>
          </span>

          <motion.p className="meta-hero-tagline-motto font-display" variants={item}>
            {metaSummitConfig.headline}
          </motion.p>

          <motion.p className="meta-hero-lead-text" variants={item}>
            {metaSummitConfig.subtitle}
          </motion.p>

          {/* Quick status pills: Date, Venue, Status */}
          <motion.div className="meta-hero-status-strip" variants={item}>
            <div className="status-pill-item">
              <Calendar size={17} className="pill-icon" />
              <div>
                <span className="pill-label font-mono">SCHEDULE</span>
                <span className="pill-val">{metaSummitConfig.dateDisplay}</span>
              </div>
            </div>

            <div className="pill-strip-sep"></div>

            <div className="status-pill-item">
              <MapPin size={17} className="pill-icon" />
              <div>
                <span className="pill-label font-mono">LOCATION</span>
                <span className="pill-val">{metaSummitConfig.venue}</span>
              </div>
            </div>

            <div className="pill-strip-sep"></div>

            <div className="status-pill-item">
              <Cpu size={17} className="pill-icon" />
              <div>
                <span className="pill-label font-mono">STATUS</span>
                <span className="pill-val status-active-text">{metaSummitConfig.status}</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Group */}
          <motion.div className="meta-hero-cta-group" variants={item}>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
