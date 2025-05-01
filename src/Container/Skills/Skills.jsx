import React from 'react';
import "./Skills.scss";
import { motion } from 'framer-motion';
import { Images } from '../../Constants';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const Skills = () => {
  const mySkills = [
    { 
      name: "JavaScript", 
      category: "Core Language", 
      level: "Advanced",
      levelColor: "#00ff88",
      image: Images.javascript, 
      experience: "3 years", 
      company: "CloudFactory",
      role: "Frontend Developer",
      achievements: [
        "Optimized app performance by 30%",
        "Mentored 3 junior developers",
        "Integrated 5+ REST APIs"
      ],
      description: "Built 10+ production-grade apps using ES6+, async/await, and modern patterns.",
      usedIn: ["Candidly", "Portfolio Dashboard"],
      certifications: ["Google Cloud Dev", "AWS DevOps"],
      stack: ["Node.js", "Webpack", "Babel"]
    },
    { 
      name: "React.js", 
      category: "Frontend", 
      level: "Intermediate",
      levelColor: "#00aaff",
      image: Images.react, 
      experience: "2 years", 
      company: "Andela",
      role: "Frontend Developer",
      achievements: [
        "Led frontend development for enterprise apps",
        "Improved app performance by 40%",
        "Integrated 10+ APIs"
      ],
      description: "Skilled in React.js, including state management, hooks, and API integration.",
      usedIn: ["Portfolio Dashboard", "AI Chatbot"],
      certifications: ["React Advanced Concepts"],
      stack: ["Redux", "React Router", "Framer Motion"]
    },
    { 
      name: "Go (Golang)", 
      category: "Backend", 
      level: "Beginner",
      levelColor: "#ff3d8a",
      image: Images.go, 
      experience: "6 months", 
      company: "Self-Taught",
      role: "Backend Developer",
      achievements: [
        "Built high-performance APIs",
        "Reduced response time by 40%",
        "Integrated Redis caching"
      ],
      description: "Specializing in Go, I design efficient APIs and microservices.",
      usedIn: ["API Rate Limiter"],
      certifications: ["Go Fundamentals"],
      stack: ["Gin", "Echo", "GORM"]
    },
    {
      name: "Git",
      category: "Tooling",
      level: "Intermediate",
      levelColor: "#00aaff",
      image: Images.git,
      experience: "2 years",
      company: "Self-Taught",
      role: "Version Control Specialist",
      achievements: [
        "Streamlined team workflows",
        "Reduced merge conflicts by 50%",
        "Implemented CI/CD pipelines"
      ],
      description: "Proficient in Git for source code management, branching, merging, and team collaboration.",
      usedIn: ["All Projects"],
      certifications: ["Git Advanced", "GitHub Certified"],
      stack: ["GitHub", "GitLab", "Bitbucket"]
    },
    {
      name: "CI/CD",
      category: "DevOps",
      level: "Beginner",
      levelColor: "#ff3d8a",
      image: Images.CICD,
      experience: "3 months",
      company: "Self-Taught",
      role: "DevOps Engineer (Learning)",
      achievements: [
        "Automated deployment pipelines",
        "Integrated Docker with GitHub Actions",
        "Reduced manual errors by 70%"
      ],
      description: "Learning CI/CD to automate software delivery pipelines and improve code quality.",
      usedIn: ["All Projects"],
      certifications: ["CI/CD Fundamentals"],
      stack: ["GitHub Actions", "CircleCI", "Docker"]
    }
  ];

  // Radar chart data
  const radarData = mySkills.map(skill => ({
    subject: skill.name,
    A: skill.level === "Advanced" ? 100 : 
         skill.level === "Intermediate" ? 70 : 40,
    B: 100
  }));

  return (
    <div className="skills-section" id="skills">
      {/* Terminal-style heading */}
      <h2 className="code-terminal-text">
        <span className="code-line">Skills</span>
        <span className="code-tag"> // My Technical Expertise</span>
        <span className="blinking-cursor">|</span>
      </h2>

  

      {/* Skills Grid */}
      <div className="skills-grid">
        {mySkills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card glassmorphism"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="skill-header">
              <div className="skill-icon glassmorphism" style={{ borderColor: skill.levelColor }}>
                <img src={skill.image} alt={skill.name} />
              </div>
              <div className="skill-title">
                {skill.name}
                <span className="skill-category">// {skill.category}</span>
              </div>
            </div>

            {/* Level Indicator */}
            <div className="level-indicator">
              <span>Level: {skill.level}</span>
              <div className="level-bar">
                <div 
                  className="level-fill" 
                  style={{ 
                    width: skill.level === "Advanced" ? "100%" : 
                          skill.level === "Intermediate" ? "70%" : "40%",
                    background: skill.levelColor
                  }} 
                ></div>
              </div>
            </div>

            {/* Experience Details */}
            <div className="experience-details">
              <p className="experience-role">// {skill.role}</p>
              <p className="experience-company">{skill.company} • {skill.experience}</p>
              <ul className="achievements">
                {skill.achievements.map((ach, i) => (
                  <li key={i}>• {ach}</li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="skill-description">
              {skill.description}
            </div>

            {/* Used In */}
            <div className="used-in">
              <p>// Used in: {skill.usedIn.join(', ')}</p>
            </div>

            {/* Certifications */}
            <div className="certifications">
              {skill.certifications.map(cert => (
                <span key={cert} className="cert-badge">// {cert}</span>
              ))}
            </div>

            {/* Learning Journey */}
            <div className="learning-journey">
              <p>// Self-taught • Mentorship • Online Courses</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Developer Motto */}
      <div className="developer-motto">// Code is Craft • Engineering is Art</div>
    </div>
  );
};

export default Skills;