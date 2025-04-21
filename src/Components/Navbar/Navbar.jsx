import React, { useState } from 'react';
import './Navbar.scss';
import { Images } from '../../Constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
       <a href='home'>
       <h1 className="cool-logo" >
  <span className="logo-k">K.</span>
  <span className="logo-ndirangu">kdkdkd</span>
</h1>


       </a>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div></div>
            <a href={`#${item}`}>{item}</a>
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
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
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