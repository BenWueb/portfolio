import { motion } from "framer-motion";
import aws from "../assets/aws-2.svg";
import css from "../assets/css-3.svg";
import firebase from "../assets/Firebase_Logo_Logomark.svg";
import js from "../assets/logo-javascript.svg";
import mongodb from "../assets/mongodb-icon-1.svg";
import node from "../assets/nodejs-icon.svg";
import react from "../assets/react-2.svg";
import tailwind from "../assets/tailwind-css-2.svg";
import mysql from "../assets/mysql-6.svg";
import graphql from "../assets/graphql-logo-2.svg";
import wordpress from "../assets/wordpress-blue.svg";

function Tools() {
  const toolsContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <section className="tools-container">
        <motion.div
          variants={toolsContainer}
          initial="hidden"
          whileInView="show"
          className="tools"
        >
          <motion.div variants={listItem} className="tool-container">
            <img src={aws} alt="" />
            <p>Amazon Web Services</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={css} alt="" />
            <p>CSS</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={firebase} alt="" />
            <p>Google Firebase</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={js} alt="" />
            <p>Javascript</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={mongodb} alt="" />
            <p>MongoDB</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={node} alt="" />
            <p>NodeJS</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={react} alt="" />
            <p>React</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={tailwind} alt="" />
            <p>TailwindCSS</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={mysql} alt="" />
            <p>MySQL</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={graphql} alt="" />
            <p>GraphQL</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={wordpress} alt="" />
            <p>Wordpress</p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
export default Tools;
