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
        backgroundColor: "black", 
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
        image: Images.go, 
        experience: "6 months", 
        company: "Self-Taught",
        role: "Backend Developer",
        description: "Specializing in Go, I design efficient APIs, manage databases, and ensure seamless integration between systems."
    },
    {
      name: "Git",
      category: "Version Control",
      level: "Intermediate",
      backgroundColor: "black",
      image: Images.git,
      experience: "2 years",
      company: "Self-Taught",
      role: "Version Control Specialist",
      description: "Proficient in using Git for source code management, branching, merging, and collaborating with teams using GitHub, GitLab, and Bitbucket."
    },
    {
      name: "CI/CD",
      category: "DevOps",
      level: "Beginner",
      backgroundColor: "#fff", // Green, symbolizing automation and growth
      image: Images.CICD, // Add an image URL for CI/CD
      experience: "3 months",
      company: "Self-Taught",
      role: "DevOps Engineer (Learning)",
      description: "Learning Continuous Integration and Continuous Deployment (CI/CD) processes, focusing on automating the software delivery pipeline, improving code quality, and reducing manual errors."
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