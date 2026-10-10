import React from 'react';
import { metaSummitConfig } from '../../data/metaSummit';
import { Clock, Calendar, Users, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import './MetaSchedulePlaceholder.css';

export default function MetaSchedulePlaceholder({ onOpenInterestModal }) {
  return (
    <section className="meta-schedule-section section-py" aria-labelledby="schedule-heading">
      <div className="container-wide">
        <div className="section-intro">
          <div className="circuit-label">
            <span className="circuit-dot"></span>
            03 / Itinerary & Keynotes
          </div>
          <h2 id="schedule-heading" className="section-title">
            Program Structure & Schedule
          </h2>
          <p className="section-subtitle">
            Curated across keynote dialogues, multi-track coding workshops, lightning pitches, and project showcases.
          </p>
        </div>

        {/* Schedule Structure Frame */}
        <div className="schedule-frame-card">
          <div className="schedule-notice-bar">
            <div className="notice-left">
              <AlertCircle size={18} className="schedule-alert-icon" />
              <span className="notice-title">Official Timetable in Curation</span>
            </div>
            <span className="notice-badge font-mono">STATUS: PENDING DEPT APPROVAL</span>
          </div>

          <p className="schedule-policy-text">
            {metaSummitConfig.scheduleNote}
          </p>

          {/* Planned Flow Blueprint */}
          <div className="schedule-blueprint-grid">
            <div className="blueprint-col">
              <div className="col-header font-mono">PHASE 01 // MORNING</div>
              <h4 className="col-title">Inauguration & Keynote Keynotes</h4>
              <p className="col-desc">
                Welcome address by Faculty & ITSA Council, followed by an opening keynote exploring emerging engineering trends.
              </p>
            </div>

            <div className="blueprint-col">
              <div className="col-header font-mono">PHASE 02 // MIDDAY</div>
              <h4 className="col-title">Parallel Hands-on Lab Sprints</h4>
              <p className="col-desc">
                Deep dive sessions across machine learning, cloud systems, and modern frontend stacks hosted in departmental labs.
              </p>
            </div>

            <div className="blueprint-col">
              <div className="col-header font-mono">PHASE 03 // AFTERNOON</div>
              <h4 className="col-title">Showcase, Critiques & Awards</h4>
              <p className="col-desc">
                Student capstone project exhibits, peer code reviews, sprint challenge evaluations, and credential distribution.
              </p>
            </div>
          </div>

          <div className="schedule-footer-action">
            <p className="footer-action-text">
              Want the final itinerary and speaker lineup in your inbox as soon as it's signed off?
            </p>
            <button
              type="button"
              onClick={onOpenInterestModal}
              className="btn btn-secondary btn-sm font-mono"
            >
              Express Notification Interest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
