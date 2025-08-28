import React from 'react';
import './Header.css';
import icon from '../assets/images/icon.png';

const Header = () => {
  return (
    <header className="header">
      {/* Topbar */}
      <div className="topbar">
        <span className="note">Note: Growing your relationship, while maintaining your landscape!</span>
        <div className="topbar-right">
          <span>📞 (123) 1800-567-8990</span>
          <span>🕒 24/7</span>
          <span>✉️ virtualherbalgarden@example.com</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={icon} alt="logo" />
          <span>VHGarden</span>
        </div>

        <ul className="nav-links">
          <li className="active">Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Reviews</li>
          <li>Projects</li>
          <li>Pages</li>
          <li>Contact Us</li>
        </ul>

        <div className="nav-actions">
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-cart"></i>
          <button className="quote-btn">Free Quote</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <span className="hero-subtitle">LANSCOP GARDEN</span>
          <h1 className="hero-title">A Beautiful Garden Is A Work Of Heart</h1>
          <p className="hero-text">
            A garden requires patient labor and attention. Plants do not grow merely to satisfy ambitions or to fulfill good intentions. They thrive because someone expended effort on them.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Request an Estimate</button>
            <button className="btn secondary">About Us</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
