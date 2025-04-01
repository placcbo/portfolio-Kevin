import React from 'react';
import './Work.scss';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { Images } from '../../Constants'; // Assuming you have an Images constant with images

const Work = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 });

  const works = [
    { 
      title: 'ToraScore', 
      category: 'UI/UX', 
      imgUrl: Images.about01, 
      link: 'https://example.com', 
      description: 'A modern UI/UX design project for an e-commerce platform.',
      tags: ['Design', 'UI/UX', 'Responsive']
    },
    { 
      title: 'Web Application', 
      category: 'Web App', 
      imgUrl: Images.about02, 
      link: 'https://example.com', 
      description: 'A responsive web application built using React.js and Node.js.',
      tags: ['React', 'Web', 'Frontend']
    },
    { 
      title: 'Mobile Application', 
      category: 'Mobile App', 
      imgUrl: Images.about03, 
      link: 'https://example.com', 
      description: 'A cross-platform mobile app developed using Flutter.',
      tags: ['Flutter', 'Mobile', 'App']
    },
    { 
      title: 'React Project', 
      category: 'React JS', 
      imgUrl: Images.about04, 
      link: 'https://example.com', 
      description: 'A React project showcasing modern web development practices.',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    // Add more works here
  ];

  // State for filtered work items
  const [filterWork, setFilterWork] = React.useState(works);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      // Use category instead of tags for filtering
      setFilterWork(item === "All" ? works : works.filter((work) => work.category === item));
    }, 500);
  };

  return (
    <>
      <h2 className="head-text" style={{ paddingTop: 80 }}>
        My creative <span>portfolio</span> section
      </h2>

      {/* Filter Buttons */}
      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Portfolio Grid */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, 'work');
