import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [menuDirection, setMenuDirection] = useState('center');
  const menuRef = useRef(null);

  const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Determine menu direction based on viewport size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMenuDirection('bottom');
      } else {
        const centerX = window.innerWidth / 2;
        setMenuDirection(mousePosition.x < centerX ? 'right' : 'left');
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mousePosition]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && 
            element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <motion.nav 
      className="quantum-navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Quantum Core - Central Navigation Hub */}
      <div className="quantum-core-container">
        <motion.div 
          className="quantum-core"
          whileTap={{ 
            scale: 0.8, 
            rotate: 360,
            boxShadow: "0 0 25px rgba(100, 200, 255, 0.7)"
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 35px rgba(100, 200, 255, 0.9)"
          }}
          onClick={handleMenuToggle}
        >
          <div className="core-inner">
            <span className="core-letter">K</span>
            <span className="core-subletter">N</span>
            <div className="core-glow"></div>
            <div className="core-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Quantum Tunnels - Animated Connection Lines */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={`quantum-tunnels ${menuDirection}-aligned`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            ref={menuRef}
          >
            {sections.map((section, index) => {
              // Calculate delay based on position and direction
              const delay = menuDirection === 'center' 
                ? index * 0.05 
                : (sections.length - 1 - index) * 0.05;
              
              return (
                <motion.div
                  key={section}
                  className={`quantum-node ${activeSection === section ? 'active' : ''}`}
                  initial={{ 
                    opacity: 0, 
                    y: menuDirection === 'bottom' ? 50 : (menuDirection === 'left' ? -50 : 50),
                    x: menuDirection === 'bottom' ? 0 : (menuDirection === 'left' ? 50 : -50)
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    x: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: menuDirection === 'bottom' ? -50 : (menuDirection === 'left' ? 50 : -50),
                    x: menuDirection === 'bottom' ? 0 : (menuDirection === 'left' ? -50 : 50)
                  }}
                  transition={{ 
                    delay,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a 
                    href={`#${section}`} 
                    className="node-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="node-letter">{section.charAt(0).toUpperCase()}</span>
                    <span className="node-name">{section}</span>
                    <div className="node-glow"></div>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

    
      <div className="quantum-state-indicator">
        <span>Current Section:</span>
        <span className="state-value">{activeSection}</span>
      </div>
    </motion.nav>
  );
};

export default Navbar;