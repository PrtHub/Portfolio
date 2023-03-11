import React, { useState } from "react";

import { RiCloseFill } from "react-icons/ri";
import { HiMenuAlt4 } from "react-icons/hi";
import { motion, useScroll, useSpring } from "framer-motion";

import "./navbar.css";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};


const Menu = () => (
  <>
    <motion.li className="text-rela" variants={item}>
      <a href="#home">Home</a>
    </motion.li>
    <motion.li className="text-rela" variants={item}>
      <a href="#about">About</a>
    </motion.li>
    <motion.li className="text-rela" variants={item}>
      <a href="#skills">Skills</a>
    </motion.li>
    <motion.li className="text-rela" variants={item}>
      <a href="#portfolio">Portfolio</a>
    </motion.li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <nav className="app__navbar">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="app__navbar-logo">
        <h1 className="app__navbar-h1" >Portfolio</h1>
      </div>
      <div className="app__navbar-section">
        <div>
          <motion.ul
            className="app__navbar-links"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <Menu />
          </motion.ul>
        </div>
        <motion.div
          className="app__navbar-links-btn"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <button className="app__navbar-btn">
            <a href="#contact" variants={item}>
              Contact Me
            </a>
          </button>
        </motion.div>
      </div>

      <div className="app__navbar-smallscreen">
        <HiMenuAlt4
          fontSize={27}
          className="app__navbar-smallscreen_menu"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <motion.div
            className="app__navbar-smallscreen_overlay"
            whileInView={{ y: [-300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <RiCloseFill
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <motion.li className="text" variants={item}>
                <a href="#home">Home</a>
              </motion.li>
              <motion.li className="text" variants={item}>
                <a href="#about">About</a>
              </motion.li>
              <motion.li className="text" variants={item}>
                <a href="#skills">Skills</a>
              </motion.li>
              <motion.li className="text" variants={item}>
                <a href="#portfolio">Portfolio</a>
              </motion.li>
            </ul>
            <div className="app__navbar-btn-smallscreen">
              <button>
                <a href="#contact">Contact Me</a>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
