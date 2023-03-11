import React, { useState } from "react";
import { motion } from "framer-motion";
import "./contact.css";
import { client } from "../../client";
import { MotionWrap } from "../../Wrapper";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.4
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="app__contact section__padding" id="contact">
      <p className="p-text">Have something in your mind?</p>
      <h2 className="head-text">Contact Me</h2>

      {!isFormSubmitted ? (
        <motion.div
        className="app__contact-form app__flex"
        variants={container}
        initial="hidden"
        animate="visible"
        >
          <motion.div className="app__contact-form_input"
          variants={item} >
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </motion.div>
          <motion.div className="app__contact-form_input"
          variants={item}>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </motion.div>
          <motion.div className="app__contact-form_input"
          variants={item}>
            <textarea
              placeholder="Type Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </motion.div>
          <motion.div className="app__contact-form_btn" whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
          </motion.div>

        </motion.div>
      ) : (
        <div className="return-message">
          <h3>Thank you for getting in touch🤝! </h3>
        </div>
      )}
    </div>
  );
};

export default MotionWrap(Contact, 'app__contact');
