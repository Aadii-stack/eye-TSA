import React from 'react';
import { aboutData } from '../../data/aboutData';
import { Users2, UserCheck, Shield, Info } from 'lucide-react';
import './CommitteeSection.css';

export default function CommitteeSection() {
  const { committeeRoster, committeeNote } = aboutData;

  // Helper to extract initials
  const getInitials = (roleName) => {
    return roleName
      .split(' ')
      .map((w) => w[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <section className="committee-section section-py" aria-labelledby="committee-heading">
      <div className="container-wide">
        <div className="section-intro">
          <div className="circuit-label">
            <span className="circuit-dot"></span>
            04 / Leadership Structure
          </div>
          <h2 id="committee-heading" className="section-title">
            Working Committee & Council
          </h2>
          <p className="section-subtitle">
            The student council and faculty mentorship team steering ITSA operations, workshops, and event curation at SLRTCE.
          </p>
        </div>

        {/* Informational editorial notice */}
        <div className="committee-notice-box">
          <Info size={18} className="notice-icon" />
          <p className="notice-text">
            <strong>Official Roster Notice:</strong> {committeeNote}
          </p>
        </div>

        {/* Committee Roster Grid */}
        <div className="committee-grid">
          {committeeRoster.map((member) => (
            <div key={member.role} className="member-card">
              <div className="member-avatar-frame">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={`${member.name} - ${member.role}`}
                    className="member-avatar-img"
                  />
                ) : (
                  <div className="avatar-monogram font-mono" aria-hidden="true">
                    <span>{getInitials(member.role)}</span>
                  </div>
                )}
                <span className="avatar-node"></span>
              </div>

              <div className="member-info">
                <span className="member-wing-badge font-mono">{member.status}</span>
                <h3 className="member-role-title">{member.role}</h3>
                <p className="member-holder-name">{member.name}</p>
                <p className="member-department-sub">{member.department}</p>
              </div>

              <div className="member-card-footer font-mono">
                <span>ITSA // SLRTCE</span>
                <span className="status-dot"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
