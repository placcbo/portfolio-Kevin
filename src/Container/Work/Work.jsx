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
      "title": "Candidly",
      "category": "Web App",
      "imgUrl": Images.candidly,
      "link": "https://candidly-eta.vercel.app/",
      "description": "Candidly is a sleek and intuitive resume builder designed to help users create polished, professional resumes in minutes — without any design experience. With a variety of customizable templates, real-time editing, and instant download options, Candidly streamlines the entire resume creation process. Whether you're a recent graduate or a seasoned professional, this tool empowers you to showcase your skills and experiences with ease and confidence.",
      "highlight": "Modern & User-Friendly Interface • Instant Resume Download • Customizable Templates"
    },
    {
      title: 'Byte & Dine',
      category: 'Restaurant Website',
      imgUrl: Images.dine,
      link: "https://bytedine.vercel.app/",
      description: 'Official website for Byte & Dine restaurant, built with React and SCSS for a modern, high-performance dining experience. Features include a dynamic menu showcase, seamless online reservations, responsive layouts for all devices, and accessibility-focused design. The site leverages React hooks for interactivity and SCSS for scalable styling, ensuring fast load times and intuitive navigation.',
      highlight: 'React • SCSS • Responsive Design • Performance-Optimized • Real-Time Reservations'
    },
  {
  "title": "AirSwap",
  "category": "Web App",
  "imgUrl": Images.airswap,
  "link": "https://airswap-ivory.vercel.app/",
  "description": "AI-powered platform facilitating seamless buying and selling of airtime credits through intuitive chatbot interactions. Utilizes advanced natural language processing for real-time transactions.",
  "highlight": "AI Chatbot • Real-Time Transactions • Seamless User Experience"
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