import React from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import { Images } from '../../Constants'

import { AppWrap } from '../../wrapper'

const About = () => {
const abouts = [
  {
    title: "Frontend Development",
    description: "I specialize in crafting responsive, user-friendly web interfaces that combine aesthetics with performance. With a strong grasp of React and design principles, I bring ideas to life through clean, efficient code.",
    imgUrl: Images.front
  },
  
  {
    title: "Backend Development",
    description: "I build robust and scalable server-side applications with a strong focus on performance and reliability. Specializing in Go, I design efficient APIs, manage databases, and ensure seamless integration between systems.",
    imgUrl: Images.backend
  },
  
  {
    title: "MongoDB",
    description: "Experienced in using MongoDB to build fast, flexible, and scalable NoSQL databases. I design efficient schemas, manage data seamlessly, and integrate with modern backend architectures.",
    imgUrl: Images.mongodb
  }
   
 
]


  return (
    <div id = "about">
    <h2 className="head-text" style={{paddingTop: 80}}> I Know that <span> Good Development</span> <br />  means <span>Good Business</span>  </h2>
    <div className="app__profiles">
      {abouts.map((about,index) => (
        <motion.div
        whileInView = {{opacity:1}}
        whileHover = {{scale:1.1}}
        transition = {{duration:0.5, type: "tween"}}
        className = 'app__profile-item'
        key = {about.title + index}
        >
          <img src= {about.imgUrl} alt=  {about.title} />
          <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
          <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
         

        </motion.div>
      ))}

    </div>
    
    </div>
  )
}

export default AppWrap(About,"about")