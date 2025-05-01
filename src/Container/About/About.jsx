// About.jsx
import React from 'react';
import "./About.scss";
import { motion } from 'framer-motion';
import { Images } from '../../Constants';


const About = () => {
  const abouts = [
    {
      title: "Frontend Development",
      description: "Crafting responsive, user-friendly web interfaces that combine aesthetics with performance. Building modern UIs with React and cutting-edge technologies.",
      imgUrl: Images.front
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications with Go. Designing efficient APIs, managing databases, and ensuring seamless system integration.",
      imgUrl: Images.backend
    },
    {
      title: "Database Systems",
      description: "Designing and managing scalable NoSQL databases with MongoDB. Creating efficient schemas and integrating with modern backend architectures.",
      imgUrl: Images.mongodb
    }
  ];

  return (
    <div id="about" className="app__about-section">
      <motion.div 
        className="about-header"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
       
       <div className="developer-bio">
  <p>
    I'm a passionate developer who turns complex problems into elegant solutions. With expertise in React, Go, and MongoDB, I build full-stack applications that scale effortlessly, leveraging modern web technologies and data-driven architectures for performance and maintainability.
  </p>
  <p className="bio-highlight">
    From backend APIs with Go to intelligent systems powered by AI/ML, I craft code that’s clean, efficient, and future-ready — just like your next project deserves.
  </p>
</div>

      </motion.div>

      <div className="profiles-container">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title}
            className="profile-card glassmorphism"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(49, 59, 172, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile-image-wrapper">
              <img 
                src={about.imgUrl} 
                alt={about.title} 
                className="profile-image"
              />
            </div>
            <h3 className="profile-title">{about.title}</h3>
            <p className="profile-description">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;