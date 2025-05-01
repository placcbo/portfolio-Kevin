import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Images } from '../../Constants';
import './Header.scss';

const Header = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const roles = [
    "React Developer",
    "Go Developer",
    "Full-Stack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="eclipse-header" id="home">
      {/* Background with glassmorphism effect */}
      <div className="header-background">
        <div className="gradient-orb"></div>
        <div className="gradient-orb small"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="header-content">
        {/* Main Content Section */}
        <motion.div 
          className="header-main"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="header-text">
            <motion.div 
              className="greeting"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="emoji">👋</span>
              <span className="text">Hi, I'm</span>
            </motion.div>
            
            <motion.h1 
              className="name"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
            >
              Kevin Ndirangu
            </motion.h1>
            
            <motion.div
              className="role-container"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="role-badge">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="role-text"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p 
              className="description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Crafting elegant web solutions with a blend of creativity and technology. 
              Building experiences that bridge the gap between humans and systems.
            </motion.p>
          </div>

          {/* Profile Image with Floating Animation */}
          <motion.div 
            className="profile-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
          >
            <div className="profile-frame">
              <img 
                src={Images.profil} 
                alt="Kevin Ndirangu" 
                className="profile-image"
              />
              <div className="profile-glow"></div>
              <div className="profile-border"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Icons Section */}
        <motion.div 
          className="tech-icons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {[
            { icon: Images.react, name: "React" },
            { icon: Images.golang, name: "Go" },
            { icon: Images.javascript, name: "JavaScript" },
            { icon: Images.html, name: "HTML" },
            { icon: Images.sass, name: "Sass" },
            { icon: Images.git, name: "Git" }
          ].map((tech, index) => (
            <motion.div 
              key={tech.name}
              className="tech-item"
              whileHover={{ 
                scale: 1.2,
                rotate: 10,
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + (index * 0.1) }}
            >
              <div className="tech-icon">
                <img src={tech.icon} alt={tech.name} />
              </div>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <span>Scroll to explore</span>
          <motion.div 
            className="arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;