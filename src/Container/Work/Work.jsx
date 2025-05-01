import React from 'react';
import './Work.scss';
import { motion } from 'framer-motion';
import { AiFillEye } from 'react-icons/ai';
import { Images } from '../../Constants';

const Work = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 });

  const works = [
    {
      title: 'Candidly',
      category: 'Web App',
      imgUrl: Images.candidly,
      link: 'https://candidly-eta.vercel.app/',
      description: 'A sleek resume builder that helps users create professional resumes effortlessly.',
      highlight: 'Modern UI • Instant Download • Template-Based'
    },
    {
      title: 'Portfolio Dashboard',
      category: 'Web App',
      imgUrl: Images.project1,
      link: '#',
      description: 'Personal developer dashboard built with React, Framer Motion, and glassmorphism design principles.',
      highlight: 'Interactive • Animated • Responsive'
    },
    {
      title: 'AI Chatbot',
      category: 'Web App',
      imgUrl: Images.project2,
      link: '#',
      description: 'AI-powered chatbot with natural language processing and real-time interactions.',
      highlight: 'LLM Integration • Real-Time • Scalable'
    },
    {
      title: 'Mobile Task Manager',
      category: 'Mobile App',
      imgUrl: Images.project3,
      link: '#',
      description: 'Cross-platform mobile task manager built with Flutter and Firebase backend.',
      highlight: 'Flutter • Firebase • Cross-Platform'
    },
    {
      title: 'API Rate Limiter',
      category: 'Backend',
      imgUrl: Images.project4,
      link: '#',
      description: 'Go-based rate limiter with Redis integration for scalable microservices.',
      highlight: 'Go • Redis • High Performance'
    }
  ];

  const [filterWork, setFilterWork] = React.useState(works);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      setFilterWork(item === 'All' ? works : works.filter((work) => work.category === item));
    }, 500);
  };

  return (
    <div className="portfolio-section" id = "portfolio">
      {/* Terminal-style heading */}
      <h2 className="code-terminal-text">
        <span className="code-line">Projects</span>
        <span className="code-tag"> // What I Build</span>
        <span className="blinking-cursor">|</span>
      </h2>

      {/* Category Filter */}
      <div className="category-filter">
        {['All', 'Web App', 'Mobile App', 'Backend'].map((item) => (
          <button
            key={item}
            onClick={() => handleWorkFilter(item)}
            className={`filter-button ${activeFilter === item ? 'active' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5 }}
        className="portfolio-grid"
      >
        {filterWork.map((work, index) => (
          <motion.div
            key={index}
            className="portfolio-card glassmorphism"
            whileHover={{ y: -10 }}
          >
            {/* Project Image */}
            <div className="portfolio-image">
              <img src={work.imgUrl} alt={work.title} />
              <div className="overlay">
                <a href={work.link} target="_blank" rel="noopener noreferrer" className="view-button">
                  <AiFillEye /> Preview
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="portfolio-content">
              <h3 className="project-title">{work.title}</h3>
              <p className="portfolio-description">
                {work.description}
              </p>
              
              {/* Highlight Tags */}
              <div className="project-highlight">{work.highlight}</div>

              {/* Category Badge */}
              <div className="project-category">{work.category}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;