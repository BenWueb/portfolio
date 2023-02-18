import { useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <nav className="nav-container">
        <motion.h5
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          BW
        </motion.h5>
        <div className="menu">
          <motion.ul variants={container} initial="hidden" animate="show">
            <motion.li variants={listItem} className="menu-item">
              Projects
            </motion.li>
            <motion.li variants={listItem} className="menu-item">
              Contact
            </motion.li>
            <motion.li variants={listItem} className="menu-item">
              About
            </motion.li>
            <motion.button variants={listItem} className="resume btn">
              Resume
            </motion.button>
          </motion.ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
