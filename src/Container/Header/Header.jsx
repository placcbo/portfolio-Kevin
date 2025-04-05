import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { Images } from '../../Constants';
import './Header.scss';

const Header = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    "React Developer",
    "Go Developer",
    "Full-Stack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Switch roles every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="app__header" id="home">
      {/* Header Info Section */}
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
            {/* Animated Wave Hand */}
            <div className="wave-hand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4361ee"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                <path d="M12 14.5c1.4 0 2.5-1.1 2.5-2.5S13.4 9.5 12 9.5s-2.5 1.1-2.5 2.5S10.6 14.5 12 14.5z" />
                <path d="M12 18c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                <path d="M12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </div>

            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Kevin Ndirangu</h1>
              <div className="role-text-container">
                <motion.p
                  key={currentRoleIndex} // Key ensures re-render on role change
                  initial={{ opacity: 0, y: 20 }} // Start off-screen
                  animate={{ opacity: 1, y: 0 }} // Slide up and fade in
                  exit={{ opacity: 0, y: -20 }} // Slide up and fade out
                  transition={{ duration: 0.5 }}
                  className="role-text"
                >
                  {roles[currentRoleIndex]}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Profile Image Section */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={Images.profile} alt="profile_bg" className="profile-image" />
      </motion.div>

      {/* Circles Section */}
      <motion.div
        variants={{
          whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: { duration: 1, ease: 'easeInOut' },
          },
        }}
        whileInView="whileInView"
        className="app__header-circles"
      >
        {[Images.golang, Images.sass, Images.javascript, Images.react, Images.html, Images.git].map((circle, index) => (
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