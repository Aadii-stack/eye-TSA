import React, { useState } from 'react';
import './CoreCommittee.css';
import placeholderImg from '../../assets/slrtce-logo.png';
import itsaLogo from '../../assets/itsa-logo.png';

const initialCommitteeData = [
  {
    id: '1',
    name: 'MEET SHAH',
    position: 'Chairperson',
    department: 'Final Year IT',
    photo: placeholderImg,
    bio: 'Leading ITSA initiatives to build an active tech community at SLRTCE.',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
  },
  {
    id: '2',
    name: 'SHWETA MISHRA',
    position: 'Vice Chairperson',
    department: 'Third Year IT',
    photo: placeholderImg,
    bio: 'Supporting the Chairperson in leading ITSA initiatives and managing day-to-day operations.',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
       
    },
  },
  {
    id: '3',
    name: 'SUBH MISHRA',
    position: 'Secretary',
    department: 'Third Year IT',
    photo: placeholderImg,
    bio: 'Coordinating student engagement, logistics, and inter-department relations.',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
       
    },
  },
  {
    id: '4',
    name: 'SHIVAM MISHRA',
    position: 'Joint Secretary',
    department: 'Third Year IT',
    photo: placeholderImg,
    bio: 'Supporting the Secretary in coordinating student engagement, logistics, and inter-department relations.',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
       
    },
  },
   {
    id: '5',
    name: 'FALAK MUJAWAR',
    position: 'Event Head',
    department: 'Third Year IT',
    photo: placeholderImg,
    bio: 'Overseeing event planning and execution to ensure successful student engagement.',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
       
    },
  },
  {
    id: '6',
    name: 'KRISHNA PANDEY',
    position: 'Event Co-Head',
    department: 'Third Year IT',
    photo: placeholderImg,
    bio: 'Supporting the Event Head in planning and executing events for successful student engagement.',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
       
    },
  },
   
  {
    id: '7',
    name: 'GAJANAND PANDYA',
    position: 'Event Co-Head',
    department: 'Third Year IT',
    photo: placeholderImg,
    bio: 'Supporting the Event Head in planning and executing events for successful student engagement.',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
       
    },
  },
   
   {
    id: '8',
    name: 'VINIT MISHRA',
    position: 'Treasurer',
    department: 'Third Year IT',
    photo: placeholderImg,
    bio: 'Managing the financial aspects of student activities and ensuring proper allocation of resources.',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
       
    },
  },
   {
    id: '9',
    name: 'ANUSHKA KUSHWAHA',
    position: 'Social Media & Magazine Head',
    department: 'Third Year IT',
    photo: placeholderImg,
    bio: 'Overseeing social media management and magazine production to enhance student engagement.',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
       
    },
  },
  {
    id: '10',
    name: 'RAJ PATWA',
    position: 'Social Media & Magazine Co-Head',
    department: 'Third Year IT',
    photo: placeholderImg,
    bio: 'Overseeing social media management and magazine production to enhance student engagement.',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
       
    },
  },
];

const CoreCommittee = ({ members = initialCommitteeData }) => {
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [zoomedMember, setZoomedMember] = useState(null);

  const handleFlip = (e, id) => {
    // Prevent card from flipping when image zoom or social button is clicked
    if (e.target.closest('.social-btn') || e.target.closest('.member-photo-box')) return;
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  const handleImageClick = (e, member) => {
    e.stopPropagation(); // Stop trigger from flipping card
    setZoomedMember(member);
  };

  return (
    <section className="committee-section">
      <div className="committee-header">
        <span className="gold-tag">THE PEOPLE BEHIND ITSA</span>
        <h2>MEET OUR CORE COMMITTEE</h2>
        <p className="committee-sub">Click a card to flip and view details. Click on the profile photo to expand.</p>
      </div>

      <div className="committee-grid">
        {members.map((member) => {
          const isFlipped = flippedCardId === member.id;

          return (
            <div
              key={member.id}
              className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}
              onClick={(e) => handleFlip(e, member.id)}
            >
              <div className="flip-card-inner">
                {/* FRONT FACE */}
                <div className="flip-card-front">
                  <div
                    className="member-photo-box"
                    onClick={(e) => handleImageClick(e, member)}
                    title="Click to Zoom Photo"
                  >
                    <img src={member.photo || placeholderImg} alt={member.name} />
                    <div className="zoom-hint-overlay">🔍 VIEW</div>
                    <div className="badge-overlay">{member.position}</div>
                  </div>
                  <div className="member-info-front">
                    <h3>{member.name}</h3>
                    <p>{member.department}</p>
                    <span className="flip-hint">CLICK TO FLIP ↻</span>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="flip-card-back">
                  <div className="back-content">
                    <div className="back-avatar-container">
                      <img src={itsaLogo} alt="ITSA Graphic Avatar" className="back-avatar-graphic" />
                    </div>

                    <span className="back-position">{member.position}</span>
                    <h3 className="back-name">{member.name}</h3>
                    <p className="back-bio">{member.bio}</p>

                    <div className="social-links-row">
                      {member.socials?.linkedin && (
                        <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                          LinkedIn ↗
                        </a>
                      )}
                      {member.socials?.github && (
                        <a href={member.socials.github} target="_blank" rel="noreferrer" className="social-btn">
                          GitHub ↗
                        </a>
                      )}
                      {member.socials?.instagram && (
                        <a href={member.socials.instagram} target="_blank" rel="noreferrer" className="social-btn">
                          Instagram ↗
                        </a>
                      )}
                    </div>
                    <span className="flip-back-hint">CLICK TO GO BACK ↻</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* LIGHTBOX POPUP IMAGE ZOOM */}
      {zoomedMember && (
        <div className="photo-lightbox-overlay" onClick={() => setZoomedMember(null)}>
          <div className="photo-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setZoomedMember(null)}>✕</button>
            <div className="lightbox-image-wrapper">
              <img src={zoomedMember.photo || placeholderImg} alt={zoomedMember.name} />
            </div>
            <div className="lightbox-info">
              <h3>{zoomedMember.name}</h3>
              <p>{zoomedMember.position}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoreCommittee;