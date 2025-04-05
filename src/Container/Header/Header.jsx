import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { Images } from '../../Constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const typingSpeed = 100; // Time between typing each character
const deletingSpeed = 50; // Time between deleting each character
const pauseTime = 1500; // Time to pause before switching to next role

const Header = () => {
  const [devRole, setDevRole] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "I'm a full-stack developer",
    "I'm a Go developer",
    "I'm a React developer",
  ];

  useEffect(() => {
    let typingTimeout;
    let deletingTimeout;
    let pauseTimeout;
    let charIndex = 0;
    let deleting = false;
    
    const typeAndDeleteText = () => {
      const currentRole = roles[currentRoleIndex];

      if (!deleting) {
        if (charIndex < currentRole.length) {
          setDevRole((prev) => prev + currentRole[charIndex]);
          charIndex++;
          typingTimeout = setTimeout(typeAndDeleteText, typingSpeed);
        } else {
          deleting = true;
          pauseTimeout = setTimeout(() => {
            setDevRole("");
            charIndex = 0;
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            deleting = false;
          }, pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setDevRole((prev) => prev.slice(0, charIndex - 1));
          charIndex--;
          deletingTimeout = setTimeout(typeAndDeleteText, deletingSpeed);
        } else {
          deleting = false;
          typeAndDeleteText(); // Continue typing again after deleting
        }
      }
    };

    typeAndDeleteText(); // Initial call to start typing effect

    // Cleanup function
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [currentRoleIndex]);

  return (
    <div className="app__header" id="home">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          {/* Mobile-only simplified version */}
          <div className="mobile-simple app__flex">
            <h1 className="mobile-headline">LET'S BUILD SOMETHING BEAUTIFUL</h1>
          </div>

          {/* Full version for larger screens */}
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi, I am</p>
              <h1 className="head-text">Kevin Ndirangu</h1>
              <p className={`p-text role-text ${roles[currentRoleIndex].toLowerCase().split(' ').join('-')}`}>
                {devRole}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={Images.profile} alt="profile_bg" className="profile-image" />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[Images.golang, Images.sass, Images.javascript,Images.react,Images.html,Images.git].map((circle, index) => (
          <motion.div 
            className="circle-cmp app__flex" 
            key={`circle-${index}`}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          >
            <img src={circle} alt="technology" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
