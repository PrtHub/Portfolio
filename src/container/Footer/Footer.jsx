import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";

import "./footer.css";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <motion.div
        className="app__footer-content"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <h1>Let's Say Hi!</h1>
        <p className="p-text" style={{ marginTop: 10 }}>
          pritamattwork@gmail.com
        </p>
        <div className="app__footer-icons">
          <a href="https://twitter.com/PritamGhosh010"
           target="_blank">
            <img src={images.twitter} alt="twitter" />
          </a>
          <a href="https://github.com/PrtHub" 
          target="_blank">
            <img src={images.github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/pritam-ghosh-dev/"
            target="_blank"
          >
            <img src={images.linkedin} alt="linkedin" />
          </a>
        </div>
      </motion.div>
      <hr />
      <p className="app__footer-text">&copy; 2023 | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
