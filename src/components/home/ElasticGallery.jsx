import React, { useState, useRef } from 'react';
import { ArrowUpRight, ChevronRight, Terminal, Cpu, Users, Award, Palette } from 'lucide-react';
import './ElasticGallery.css';

const galleryPanels = [
  {
    id: 'learning',
    category: 'LEARNING',
    code: 'PANEL // 01',
    title: 'Technical Workshops & Labs',
    subtitle: 'Hands-on Code, Tools & System Architecture',
    description:
      'Immersive, student-focused lab sessions diving deep into modern web stacks, Linux workflows, and software development fundamentals.',
    icon: Terminal,
    tags: ['Hands-on Labs', 'Modern Stacks', 'Version Control'],
    circuitCoords: 'X: 14.2 // Y: 82.1',
  },
  {
    id: 'hackathons',
    category: 'COMPETITION',
    code: 'PANEL // 02',
    title: 'Hack Sprints & Code Competitions',
    subtitle: 'Algorithmic Problem Solving Under Pressure',
    description:
      'Departmental sprints designed to test algorithmic logic, speed, and collaborative problem-solving in timed environments.',
    icon: Cpu,
    tags: ['Timed Sprints', 'Algorithms', 'Team Dynamics'],
    circuitCoords: 'X: 36.8 // Y: 64.5',
  },
  {
    id: 'community',
    category: 'COLLABORATION',
    code: 'PANEL // 03',
    title: 'Peer Learning & Mentorship',
    subtitle: 'Senior-to-Junior Knowledge Exchange',
    description:
      'Fostering open dialogue across batch years. Seniors share guidance on capstone architecture, internships, and technical projects.',
    icon: Users,
    tags: ['Peer Circles', 'Capstone Guidance', 'Open Source'],
    circuitCoords: 'X: 58.4 // Y: 43.2',
  },
  {
    id: 'flagship',
    category: 'FLAGSHIP',
    code: 'PANEL // 04',
    title: 'Meta Summit Convention',
    subtitle: 'ITSA’s Signature Annual Gathering',
    description:
      'Our flagship multi-track tech convention bringing together workshops, keynote discussions, and student innovation showcases.',
    icon: Award,
    tags: ['Flagship Gathering', 'Multi-Track', 'Innovation Showcase'],
    circuitCoords: 'X: 79.1 // Y: 28.7',
    isFlagship: true,
  },
  {
    id: 'creativity',
    category: 'CULTURE',
    code: 'PANEL // 05',
    title: 'Student Design & Tech Media',
    subtitle: 'Bridging Engineering with Visual Identity',
    description:
      'Nurturing design systems, creative event branding, technical writing, and visual storytelling for campus technology initiatives.',
    icon: Palette,
    tags: ['Visual Identity', 'Media Systems', 'Campus Tech Culture'],
    circuitCoords: 'X: 92.5 // Y: 15.3',
  },
];

export default function ElasticGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % galleryPanels.length;
      setActiveIndex(nextIndex);
      focusPanel(nextIndex);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + galleryPanels.length) % galleryPanels.length;
      setActiveIndex(prevIndex);
      focusPanel(prevIndex);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveIndex(index);
    }
  };

  const focusPanel = (idx) => {
    const panels = containerRef.current?.querySelectorAll('.elastic-panel');
    if (panels && panels[idx]) {
      panels[idx].focus();
    }
  };

  return (
    <section className="elastic-gallery-section section-py" aria-labelledby="gallery-heading">
      <div className="container-wide">
        {/* Header */}
        <div className="elastic-gallery-header">
          <div className="gallery-header-left">
            <div className="circuit-label">
              <span className="circuit-dot"></span>
              02 / The ITSA Experience
            </div>
            <h2 id="gallery-heading" className="section-title">
              The ITSA Circuit
            </h2>
            <p className="section-subtitle">
              Five connected facets that define student life, learning, and technical expression within ITSA.
            </p>
          </div>

          <div className="gallery-header-right">
            <span className="gallery-instructions font-mono">
              [ Select or hover panels to expand • Arrow keys navigate ]
            </span>
          </div>
        </div>

        {/* The Elastic Accordion Container */}
        <div
          className="elastic-gallery-container"
          ref={containerRef}
          role="region"
          aria-label="ITSA Experience Interactive Gallery"
        >
          {galleryPanels.map((panel, index) => {
            const isActive = activeIndex === index;
            const IconComponent = panel.icon;

            return (
              <div
                key={panel.id}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`${panel.title} panel`}
                className={`elastic-panel ${isActive ? 'active' : 'inactive'} ${
                  panel.isFlagship ? 'flagship-panel' : ''
                }`}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                {/* Background decorative circuit line */}
                <div className="panel-circuit-layer" aria-hidden="true">
                  <div className="panel-node-top"></div>
                  <div className="panel-grid-lines"></div>
                </div>

                {/* Collapsed view indicator (visible when inactive on desktop) */}
                <div className="panel-collapsed-view" aria-hidden={isActive}>
                  <div className="collapsed-top">
                    <span className="collapsed-code">{panel.code}</span>
                    <IconComponent size={18} className="collapsed-icon" />
                  </div>
                  <div className="collapsed-vertical-title">
                    <span>{panel.title}</span>
                  </div>
                  <div className="collapsed-bottom">
                    <ChevronRight size={16} className="collapsed-arrow" />
                  </div>
                </div>

                {/* Expanded view content (visible when active) */}
                <div className="panel-expanded-view" aria-hidden={!isActive}>
                  <div className="panel-expanded-top">
                    <div className="panel-tag-group">
                      <span className="panel-category-badge">{panel.category}</span>
                      <span className="panel-coord-tag font-mono">{panel.circuitCoords}</span>
                    </div>
                    <div className="panel-active-indicator">
                      <span className="pulse-dot"></span>
                      <span className="indicator-text">ACTIVE NODE</span>
                    </div>
                  </div>

                  <div className="panel-expanded-body">
                    <div className="panel-icon-circle">
                      <IconComponent size={28} />
                    </div>

                    <h3 className="panel-main-title">{panel.title}</h3>
                    <h4 className="panel-subtitle">{panel.subtitle}</h4>
                    <p className="panel-description">{panel.description}</p>

                    <div className="panel-tags-list">
                      {panel.tags.map((tag) => (
                        <span key={tag} className="panel-mini-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="panel-expanded-footer">
                    <span className="panel-cardinal font-mono">{panel.code}</span>
                    <span className="panel-cue font-mono">
                      <span>EXPLORE ASPECT</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Navigation Dots / Status */}
        <div className="gallery-mobile-pager" aria-hidden="true">
          {galleryPanels.map((panel, idx) => (
            <button
              key={panel.id}
              type="button"
              className={`pager-dot ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Jump to ${panel.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
