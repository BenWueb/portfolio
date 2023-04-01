import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [index, setIndex] = useState(0);

  const words = [
    "React",
    "Javascript",
    "AWS",
    "Firebase",
    "MongoDB",
    "Redux",
    "MySQL",
    "CSS",
  ];

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === words.length) {
        next = 0;
      }
      setIndex(next);
    }, 3000);
  }, [index, setIndex]);

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <section className="main-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="cta-container"
        >
          <motion.h4 variants={listItem}>Hi, my name is</motion.h4>

          <motion.h1 variants={listItem} className="name">
            Ben Wuebker.
          </motion.h1>
          <motion.h1 variants={listItem}>
            I build things using
            <AnimatePresence>
              <motion.span
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                exit={{ display: "none" }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>
          <motion.p variants={listItem}>
            Hello! I'm a full stack developer based out of Minneapolis,
            Minnesota. I'm passionate about creating digital experiences that
            are both beautiful and functional. Over the years, I've honed my
            skills in React, Web Design, JavaScript, and various other
            frameworks to bring my ideas to life.
          </motion.p>

          <a href="mailto:benjamin@strategicsolutionslabs.com">
            <motion.button variants={listItem} className="btn cta-btn">
              Free Consultation
            </motion.button>
          </a>
        </motion.div>
      </section>
    </>
  );
}
export default Header;
