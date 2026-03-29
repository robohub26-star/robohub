import React from 'react';
import './Header.css';

const Header = ({ activeSlide, onNavClick, onContactClick, headerRef }) => {
  const navItems = [
    { id: 'slide-home', label: 'Home' },
    { id: 'slide-care', label: 'Care' },
    { id: 'slide-consult', label: 'Consult' },
    { id: 'slide-connect', label: 'Connect' },
    { id: 'slide-courses', label: 'Modules' }
  ];

  return (
    <header id="main-header" ref={headerRef}>
      <div className="logo-wrap">
        <img src="/images/Logo.png" alt="RoboHub Logo" />
      </div>
      <nav id="top-nav">
        {navItems.map(item => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            key={item.id}
            data-target={item.id}
            className={activeSlide === item.id ? 'active' : ''}
            onClick={() => onNavClick(item.id)}
          >
            {item.label}
          </a>
        ))}
        <button className="btn-nav-login" onClick={onContactClick}>
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;