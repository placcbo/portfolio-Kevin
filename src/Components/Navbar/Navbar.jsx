import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && 
            element.offsetTop <= scrollTop + 100 && 
            element.offsetTop + element.offsetHeight > scrollTop + 100) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <motion.nav 
      className="eclipse-navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Scroll Progress Indicator */}
      <div className="progress-indicator">
        <motion.div 
          className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ type: "tween", ease: "linear" }}
        />
      </div>

      <div className="navbar-content">
        {/* Logo */}
        <motion.div 
          className="navbar-logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="#home" className="logo-link">
            <span className="logo-letter">K.</span>
            <span className="logo-name">Ndirangu</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="desktop-nav">
          {sections.map((section) => (
            <motion.li
              key={section}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={`#${section}`} 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="indicator"></span>
                <span className="text">{section}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="menu-icon"></span>
        </motion.button>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-nav-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="panel-content">
              <button 
                className="close-button"
                onClick={() => setIsMenuOpen(false)}
              >
                &times;
              </button>
              
              <ul className="mobile-nav-list">
                {sections.map((section) => (
                  <motion.li
                    key={section}
                    className={`mobile-nav-item ${activeSection === section ? 'active' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * sections.indexOf(section) }}
                  >
                    <a 
                      href={`#${section}`} 
                      className="mobile-nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="mobile-indicator"></span>
                      <span className="mobile-text">{section}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;