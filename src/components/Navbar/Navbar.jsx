import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import AlmaLogo from './AlmaLogo.jpg';

import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dropdownRef = useRef(null);

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown on click outside (only mobile)
  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile]);

  // Desktop: Open dropdown on hover over entire dropdown area
  const handleMouseEnter = () => {
    if (!isMobile) setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setIsDropdownOpen(false);
  };

  // Mobile: toggle dropdown on clicking "SERVICES"
  const handleServicesClick = (e) => {
    if (isMobile) {
      e.preventDefault(); // prevent nav
      e.stopPropagation();
      setIsDropdownOpen((open) => !open);
    }
  };

  // Close mobile menu and dropdown (used when clicking links)
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Scroll to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
      <div className="navbar-logo">
        <NavLink
          to="/"
          onClick={() => {
            closeAllMenus();
            scrollToTop();
          }}
        >
          <img src={AlmaLogo} alt="Alterations By Alma Logo" className="logo" />
        </NavLink>
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => {
              closeAllMenus();
              scrollToTop();
            }}
          >
            HOME
          </NavLink>
        </li>

        <li
          className={`navbar-dropdown ${isDropdownOpen ? 'open' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
        >
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={handleServicesClick}
          >
            SERVICES ▾
          </NavLink>

          <ul className="dropdown-menu">
            <li>
              <NavLink
                to="/general-repairs"
                onClick={() => {
                  if (isMobile) closeAllMenus();
                }}
              >
                General Repairs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pant-repairs"
                onClick={() => {
                  if (isMobile) closeAllMenus();
                }}
              >
                Pant Repairs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jacket-zipper-repairs"
                onClick={() => {
                  if (isMobile) closeAllMenus();
                }}
              >
                Jacket Zipper Repairs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formal-dress-alterations"
                onClick={() => {
                  if (isMobile) closeAllMenus();
                }}
              >
                Formal Dress Alterations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/casual-and-semi-profressional"
                onClick={() => {
                  if (isMobile) closeAllMenus();
                }}
              >
                Casual & Semi-Professional
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formal-jacket-and-pants-alterations"
                onClick={() => {
                  if (isMobile) closeAllMenus();
                }}
              >
                Formal Jacket & Pants
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink
            to="/bags"
            onClick={() => {
              closeAllMenus();
            }}
          >
            BAGS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => {
              closeAllMenus();
            }}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => {
              closeAllMenus();
            }}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>

      <button
        className="navbar-toggle"
        onClick={() => setIsMobileMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </button>
    </nav>
  );
};

export default Navbar;
