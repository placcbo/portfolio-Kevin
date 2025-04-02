import React from 'react';
import "./Skills.scss";
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { Images } from '../../Constants';
import { Tooltip } from 'react-tooltip';

const Skills = () => {
  const mySkills = [
    { 
        name: "JavaScript", 
        category: "Programming Language", 
        level: "Advanced", 
        backgroundColor: "#f7df1e", 
        image: Images.javascript, 
        experience: "3 years", 
        company: "CloudFactory",
        role: "Frontend Developer",
        description: "Proficient in JavaScript, with experience in building dynamic web applications, working with ES6+, and handling asynchronous programming."
    },
    { 
        name: "React.js", 
        category: "Frontend Framework", 
        level: "Intermediate", 
        backgroundColor: "#61dafb", 
        image: Images.react, 
        experience: "2 years", 
        company: "Andela",
        role: "Frontend Developer",
        description: "Skilled in React.js, including state management, component lifecycle, hooks, and integrating APIs for modern web applications."
    },
    { 
        name: "Go (Golang)", 
        category: "Backend Language", 
        level: "Beginner", 
        backgroundColor: "#00acd7", 
        image: Images.Go, 
        experience: "6 months", 
        company: "Self-Taught",
        role: "Backend Developer",
        description: "Learning Go for backend development, focusing on building APIs, working with concurrency, and database integration."
    }
    // Add the rest of your skills...
];


  return (
    <div className='app__skills'>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {mySkills.map(skill => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
              data-tooltip-id={skill.name} // Add tooltip ID here
            >
              <div className='app__flex' style={{ background: skill.backgroundColor }}>
                <img src={skill.image} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))} 
        </motion.div>

        <motion.div className='app__skills-exp'>
          {mySkills.map(exp => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-exp-work'
              key={exp.name}
            >
              <h4 className='bold-text'>{exp.role} - {exp.experience}</h4>
              <p className='p-text'> {exp.company}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {mySkills.map(skill => (
        <Tooltip
          key={skill.name}
          id={skill.name}
          effect="solid"
          arrowColor='#fff'
          className='skills-tooltip'
        >
          {skill.description}
        </Tooltip>
      ))}
    </div>
  );
};

export default AppWrap(Skills,'skills');