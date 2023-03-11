import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { MotionWrap } from "../../Wrapper";
import { client, urlFor } from "../../client";

import "./skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => setSkills(data));
  }, []);

  return (
    <section className=" app__skills section__padding" id="skills">
      <p className="p-text">Skills | Leaning</p>
        <h1 className="head-text" style={{color: 'white'}}>MY Skills</h1>
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <motion.div  whileInView={{ scale: [0, 1] }}
           transition={{ duration: 0.6 }}>
                <img src={urlFor(skill.icon)} alt={skill.name}/>
                <p>{skill.name}</p>
            </motion.div>
            </motion.div>
          ))}
        </motion.div>
    </section>
  );
};

export default MotionWrap(Skills, 'app__skills');
