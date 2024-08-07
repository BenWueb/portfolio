import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import resume from "../assets/Web Dev Resume.pdf";

function NavbarMobile() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
  }, []);

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

  const mobileContainer = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 5,
        staggerChildren: 0.1,
      },
    },
  };

  const mobileListItem = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  return (
    <>
      <nav className="nav-container">
        <motion.h5
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          <Link className="link" to="/">
            BW
          </Link>
        </motion.h5>

        {windowWidth <= 640 ? (
          <>
            <AnimatePresence>
              {menuVisible ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  exit={{ rotate: 0 }}
                  className="icon-div"
                >
                  <MdOutlineClose
                    onClick={toggleMenu}
                    className="mobile-menu-icon"
                  />
                </motion.div>
              ) : (
                <motion.div className="icon-div">
                  <BiMenuAltRight
                    onClick={toggleMenu}
                    className="mobile-menu-icon"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {menuVisible && (
                <motion.div
                  initial={{ x: 1000 }}
                  animate={{ x: 0 }}
                  exit={{ x: 1000 }}
                  transition={{ ease: "linear" }}
                  variants={mobileContainer}
                  className="mobile-menu-container"
                >
                  <motion.li
                    variants={mobileListItem}
                    className="mobile-menu-item"
                    onClick={() => {
                      window.location.replace("/#projects");
                      setMenuVisible(false);
                    }}
                  >
                    Projects
                  </motion.li>
                  <motion.li
                    variants={mobileListItem}
                    className="mobile-menu-item"
                    onClick={() => {
                      window.location.replace("/#articles");
                      setMenuVisible(false);
                    }}
                  >
                    Articles
                  </motion.li>
                  <motion.li
                    variants={mobileListItem}
                    className="mobile-menu-item"
                    onClick={() => {
                      window.location.replace("/#contact");
                      setMenuVisible(false);
                    }}
                  >
                    Contact
                  </motion.li>
                  <motion.li
                    variants={mobileListItem}
                    className="mobile-menu-item"
                    onClick={() => {
                      window.location.replace("/#about");
                      setMenuVisible(false);
                    }}
                  >
                    About
                  </motion.li>
                  {/* <a href={resume} target="_blank">
                    <motion.button
                      variants={mobileListItem}
                      className="mobile-resume btn"
                    >
                      Resume
                    </motion.button>
                  </a> */}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <div className="menu">
            <motion.ul variants={container} initial="hidden" animate="show">
              {/* <Link className="link" to="/services">
                <motion.li variants={listItem} className="menu-item">
                  Services
                </motion.li>
              </Link> */}
              <motion.li
                variants={listItem}
                className="menu-item"
                onClick={() => window.location.replace("/#projects")}
              >
                Projects
              </motion.li>
              <motion.li
                variants={listItem}
                className="menu-item"
                onClick={() => window.location.replace("/#articles")}
              >
                Articles
              </motion.li>
              <motion.li
                variants={listItem}
                className="menu-item"
                onClick={() => window.location.replace("/#contact")}
              >
                Contact
              </motion.li>
              <motion.li
                variants={listItem}
                className="menu-item"
                onClick={() => window.location.replace("/#about")}
              >
                About
              </motion.li>
              {/* <a href={resume} target="_blank">
                <motion.button variants={listItem} className="resume btn">
                  Resume
                </motion.button>
              </a> */}
            </motion.ul>
          </div>
        )}
      </nav>
    </>
  );
}
export default NavbarMobile;
