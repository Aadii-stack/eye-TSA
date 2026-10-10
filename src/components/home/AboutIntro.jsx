import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { ArrowRight, Layers, Lightbulb, Compass, GitBranch } from 'lucide-react';
import './AboutIntro.css';

export default function AboutIntro() {
  return (
    <section className="about-intro-section section-py" aria-labelledby="about-intro-heading">
      <div className="container-wide">
        {/* Editorial Section Header */}
        <div className="about-intro-header">
          <div className="circuit-label">
            <span className="circuit-dot"></span>
            01 / Identity & Purpose
          </div>
          <h2 id="about-intro-heading" className="section-title">
            What is ITSA?
          </h2>
          <p className="section-subtitle">
            An active student body engineered to bridge classroom curriculum with hands-on 
            industry practices, campus collaboration, and technical initiatives.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="about-editorial-grid">
          {/* Main narrative block */}
          <div className="narrative-block">
            <div className="narrative-meta">
              <span className="narrative-chapter">CHARTER & ROLE</span>
              <span className="narrative-mono">DEPT. OF INFORMATION TECHNOLOGY</span>
            </div>

            <p className="narrative-p-large">
              At Shree L. R. Tiwari College of Engineering, ITSA functions as an incubator 
              for student initiative. We believe engineering education is incomplete without 
              the freedom to test ideas, break code in controlled labs, and build in public with peers.
            </p>

            <p className="narrative-p-body">
              Rather than maintaining an abstract committee, ITSA is structured as an open 
              circuit where students organize hands-on technical workshops, competitive hack 
              sprints, peer mentorship sessions, and our signature flagship convention, Meta Summit. 
              Every event is designed to give undergraduates practical technical fluency and 
              leadership experience.
            </p>

            <div className="narrative-footer">
              <Link to={siteConfig.links.about} className="btn btn-secondary about-more-btn">
                <span>Read the Full Story & Mission</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right column: Editorial facet stream */}
          <div className="facets-column">
            <div className="facet-item">
              <div className="facet-index">
                <span className="facet-num">[ 01 ]</span>
                <Layers size={18} className="facet-icon" />
              </div>
              <div className="facet-content">
                <h3 className="facet-title">Hands-on Technical Exploration</h3>
                <p className="facet-desc">
                  Curated practical sessions covering web architectures, cloud fundamentals, 
                  and modern software engineering tools beyond conventional exams.
                </p>
              </div>
            </div>

            <div className="facet-item">
              <div className="facet-index">
                <span className="facet-num">[ 02 ]</span>
                <GitBranch size={18} className="facet-icon" />
              </div>
              <div className="facet-content">
                <h3 className="facet-title">Peer Learning & Mentorship</h3>
                <p className="facet-desc">
                  Senior-to-junior knowledge transfer, collaborative git repos, code reviews, 
                  and advice for campus projects and hackathons.
                </p>
              </div>
            </div>

            <div className="facet-item">
              <div className="facet-index">
                <span className="facet-num">[ 03 ]</span>
                <Lightbulb size={18} className="facet-icon" />
              </div>
              <div className="facet-content">
                <h3 className="facet-title">Student Creativity & Culture</h3>
                <p className="facet-desc">
                  Empowering students to design visual identities, manage logistics, host discussions, 
                  and create meaningful tech experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
