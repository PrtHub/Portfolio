import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import "./services.css";
import { MotionWrap } from "../../Wrapper";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => setServices(data));
  }, []);

  return (
    <div className="app__services section__padding" id="services">
      <p className="p-text">Why you should choose me</p>
      <h1 className="head-text">Why Choose Me</h1>
      <motion.div className="app__sevices-container">
        {services.map((service) => (
          <motion.div
          key={service.name}
           className="app__services-container_items"
           whileInView={{ scale: [0, 1] }}
           transition={{ duration: 0.6 }}
          >
            <div className="app__services-container_items-content">
              <img src={urlFor(service.icon)} alt={service.name} />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionWrap(Services, 'app__services');
