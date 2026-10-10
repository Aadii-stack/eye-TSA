import React from 'react';
import { metaSummitConfig } from '../../data/metaSummit';
import { Terminal, Layers, Shield, Cpu, Tag } from 'lucide-react';
import './MetaTracks.css';

export default function MetaTracks() {
  return (
    <section id="meta-tracks" className="meta-tracks-section section-py" aria-labelledby="tracks-heading">
      <div className="container-wide">
        <div className="section-intro">
          <div className="circuit-label">
            <span className="circuit-dot"></span>
            02 / Engineering Domains
          </div>
          <h2 id="tracks-heading" className="section-title">
            Curated Technical Tracks
          </h2>
          <p className="section-subtitle">
            Core subject areas designed for student immersion, hands-on lab sessions, and technical project exhibitions.
          </p>
        </div>

        <div className="tracks-grid">
          {metaSummitConfig.tracks.map((track) => (
            <div key={track.code} className="track-card">
              <div className="track-card-header">
                <span className="track-code-badge font-mono">{track.code}</span>
                <span className="track-status-dot"></span>
              </div>

              <div className="track-card-body">
                <h3 className="track-title">{track.title}</h3>
                <p className="track-description">{track.description}</p>

                <div className="track-keywords">
                  {track.keywords.map((kw) => (
                    <span key={kw} className="kw-badge font-mono">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="track-card-footer font-mono">
                <span>CONVENTION TRACK</span>
                <span className="circuit-coord">NODE // {track.code}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
