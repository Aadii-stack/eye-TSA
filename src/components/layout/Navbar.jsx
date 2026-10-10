import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll state for backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: siteConfig.links.home },
    { label: 'About', path: siteConfig.links.about },
    { label: 'Events', path: siteConfig.links.events },
    { label: 'Meta Summit', path: siteConfig.links.metaSummit, isFlagship: true },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-wide navbar-container">
        {/* Brand identity */}
        <Link to="/" className="navbar-brand" aria-label="ITSA SLRTCE Home">
          <div className="brand-logo-frame">
            <img 
              src={siteConfig.logo} 
              alt="ITSA Official Logo" 
              className="brand-logo-img"
              onError={(e) => {
                // Graceful fallback if asset path differs
                e.target.style.display = 'none';
              }} 
            />
            <span className="brand-wordmark-fallback">ITSA</span>
          </div>
          <div className="brand-identity-text">
            <span className="brand-acronym">ITSA</span>
            <span className="brand-subtext">SLRTCE • Information Technology</span>
          </div>
        </Link>

        {/* Tagline micro-badge (visible on desktop) */}
        <div className="navbar-tagline-chip">
          <span className="circuit-dot"></span>
          <span className="tagline-text">{siteConfig.tagline}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''} ${link.isFlagship ? 'flagship-link' : ''}`
                  }
                >
                  {link.label}
                  {link.isFlagship && <span className="flagship-badge">FLAGSHIP</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="container mobile-nav-content">
          <div className="mobile-drawer-header">
            <span className="circuit-label">
              <span className="circuit-dot"></span>
              Navigation Circuit
            </span>
          </div>
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? 'active' : ''} ${link.isFlagship ? 'flagship' : ''}`
                  }
                >
                  <span className="mobile-link-text">{link.label}</span>
                  {link.isFlagship ? (
                    <span className="flagship-badge">FLAGSHIP</span>
                  ) : (
                    <ArrowUpRight size={16} className="mobile-arrow" />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <p className="mobile-tagline">{siteConfig.tagline}</p>
            <p className="mobile-affiliation">
              Department of Information Technology, SLRTCE
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
