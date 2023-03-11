import React, { useEffect, useState } from "react";

import { client, urlFor } from "../../client";

import { MotionWrap } from "../../Wrapper";
import { motion } from "framer-motion";
import "./about.css";


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div className="app__about section__padding" id="about">
     
      {abouts.map((about, index) => (
      <motion.div className="app__about-container" key={index}  >
        <div className="app__about-container-left">
         <h1>About Me</h1>
         <motion.div className="app__about-container_img" whileInView={{ scale: [0, 1] }}
      transition={{ duration: 0.6 }}>
            <img src={urlFor(about.imgUrl)} alt="AboutImage" />
          </motion.div>
          </div>
          <div className="app__about-container-content">
            <h3>{about.experience}</h3>
            <p>{about.description}</p>
          </div>
      </motion.div>
   ))}
    </div>
  );
};

export default MotionWrap(About, "app__about");

