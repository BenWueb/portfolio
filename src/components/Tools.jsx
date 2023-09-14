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
import seo from "../assets/google-custom-search.svg";
import python from "../assets/python-5.svg";
import figma from "../assets/figma.svg";
import jwt from "../assets/jwt-3.svg";
import redux from "../assets/redux-logo-svgrepo-com.svg";
import next from "../assets/nextjs.svg";

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
        <h2 className="heading ">Skills</h2>
        <h3 className="tools-subheading">Advanced</h3>
        <motion.div
          variants={toolsContainer}
          initial="hidden"
          whileInView="show"
          className="tools"
        >
          <motion.div variants={listItem} className="tool-container">
            <img src={react} alt="" />
            <p>React</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={next} alt="" />
            <p>NextJS</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={js} alt="" />
            <p>Javascript</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={css} alt="" />
            <p>CSS</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={firebase} alt="" />
            <p>Google Firebase</p>
          </motion.div>
        </motion.div>
        <h3 className="tools-subheading">Experienced</h3>
        <motion.div
          variants={toolsContainer}
          initial="hidden"
          whileInView="show"
          className="tools"
        >
          <motion.div variants={listItem} className="tool-container">
            <img src={mongodb} alt="" />
            <p>MongoDB</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={node} alt="" />
            <p>NodeJS</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={tailwind} alt="" />
            <p>TailwindCSS</p>
          </motion.div>

          <motion.div variants={listItem} className="tool-container">
            <img src={wordpress} alt="" />
            <p>Wordpress</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={seo} alt="" />
            <p>Search Engine Optimization</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={python} alt="" />
            <p>Python</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={jwt} alt="" />
            <p>JWT</p>
          </motion.div>
          <motion.div variants={listItem} className="tool-container">
            <img src={figma} alt="" />
            <p>Figma</p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
export default Tools;
