import React from 'react';

import { BsTwitter } from 'react-icons/bs';
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai'
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const SocialMedia = () => (
  <motion.div 
  className="app__social" 
  variants={container}
  initial="hidden"
  animate="visible">

    <span>Follow on :</span>
      <motion.a whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      variants={item}
      href="https://twitter.com/PritamGhosh010" target="_blank"> <BsTwitter /> </motion.a>
      <motion.a 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      variants={item}
       href="https://github.com/PrtHub" target="_blank"> <AiOutlineGithub /> </motion.a>
      <motion.a 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      variants={item}
       href="https://www.linkedin.com/in/pritam-ghosh-dev/" target="_blank"> <AiFillLinkedin/> </motion.a>

  </motion.div>
);

export default SocialMedia;