import React, { useState, useEffect } from 'react';
import { upcomingEvents, pastEvents, eventCategories } from '../data/events';
import { siteConfig } from '../data/siteConfig';
import EventCard from '../components/events/EventCard';
import EmptyUpcomingState from '../components/events/EmptyUpcomingState';
import { Calendar, Filter, Sparkles, Layers, Info } from 'lucide-react';
import './Events.css';

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Events & Workshops Archive — ITSA | SLRTCE';
    window.scrollTo(0, 0);
  }, []);

  // Filter past events based on category
  const filteredPastEvents =
    activeCategory === 'All'
      ? pastEvents
      : pastEvents.filter((e) => e.category === activeCategory);

  return (
    <div className="events-page-view">
      {/* Page Header */}
      <section className="events-hero-section" aria-labelledby="events-page-title">
        <div className="container-wide">
          <div className="events-hero-coords font-mono">
            <span>ARCHIVE // CALENDAR</span>
            <span className="coord-divider">/</span>
            <span>DEPARTMENTAL INITIATIVES</span>
          </div>

          <div className="events-hero-header">
            <div className="circuit-label">
              <span className="circuit-dot"></span>
              The Events Archive
            </div>
            <h1 id="events-page-title" className="events-hero-title">
              Workshops, Hack Sprints <br />
              <span className="title-highlight">& Technical Sessions.</span>
            </h1>
            <p className="events-hero-subtitle">
              Every ITSA event is structured to deliver actionable engineering competency. 
              Browse active registration notices and archived session highlights below.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Upcoming Events */}
      <section className="upcoming-events-section section-py-sm" aria-labelledby="upcoming-heading">
        <div className="container-wide">
          <div className="section-header-row">
            <div>
              <div className="circuit-label">
                <span className="circuit-dot"></span>
                Phase A / Active Pipeline
              </div>
              <h2 id="upcoming-heading" className="section-title">
                Upcoming Events
              </h2>
            </div>
            <span className="event-count-badge font-mono">
              [ {upcomingEvents.length} SCHEDULED ]
            </span>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="events-grid">
              {upcomingEvents.map((evt) => (
                <EventCard key={evt.id} event={evt} isUpcoming={true} />
              ))}
            </div>
          ) : (
            <EmptyUpcomingState />
          )}
        </div>
      </section>

      {/* Section 2: Past Events Archive */}
      <section className="past-events-section section-py" aria-labelledby="past-heading">
        <div className="container-wide">
          <div className="past-section-header">
            <div>
              <div className="circuit-label">
                <span className="circuit-dot"></span>
                Phase B / Departmental Record
              </div>
              <h2 id="past-heading" className="section-title">
                Past Events & Completed Labs
              </h2>
              <p className="section-subtitle">
                A verified record of technical sessions and competitions organized under ITSA at SLRTCE.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="category-filter-bar" role="tablist" aria-label="Event category filters">
              {eventCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Past Events Grid */}
          <div className="events-grid">
            {filteredPastEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} isUpcoming={false} />
            ))}
          </div>

          {/* Editor Note footer */}
          <div className="events-data-footer font-mono">
            <Info size={14} className="info-icon" />
            <span>
              All events are dynamically configured via <code className="code-ref">src/data/events.js</code>.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
