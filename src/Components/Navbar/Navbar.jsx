import React, { useState } from 'react';
import './Navbar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h1 className="cool-logo">
         
           <a href = "#home"  >

           <span className="logo-k">K.</span>
           <span className="logo-ndirangu">Ndirangu</span>
           </a>
       
        </h1>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div></div>
            <a href={`#${item}`}>{item}</a> {/* Ensure the target element with id="item" exists */}
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <Link to={`#${item}`} onClick={() => setToggle(false)} className="nav-link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
