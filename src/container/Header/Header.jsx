import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { MotionWrap } from "../../Wrapper";
import { SocialMedia } from "../../components";
import { client, urlFor } from "../../client";

import "./header.css";


const Header = () => {
   const [headers, setHeaders] = useState([]);

   useEffect(() => {
    const query = '*[_type == "header"]';

    client.fetch(query).then((data) => setHeaders(data));
   }, [])

  return (
    <>
    {headers.map((item, index) => (
    <div className="app__header  section__padding" id="home">
      
      <div className="app__header-left_container">
        <motion.div
          className="app__header-left_container-content"
        >
          <p>{item.text1}</p>
          <h1>{item.text2}</h1>
          <h3>{item.text3}</h3>
          <p>
          {item.description}
          </p>
        </motion.div>
        <SocialMedia/>
      </div>
     
      <div className="app__header-right_container">
        <motion.div
          className="app__header-img"
        >
          <img src={urlFor(item.imgUrl)} alt="" />
        </motion.div>
        
      </div>
    </div>

      ))}
      </>
  );
};

// export default AppWrap(Header, 'home');
export default MotionWrap(Header, 'app__header');

