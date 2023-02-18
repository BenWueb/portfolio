import { Link } from "react-router-dom";
import travel from "../assets/Travel screenshot.png";
import kitchen from "../assets/Joans Kitchen Screenshot.png";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <>
      <section className="projects-container">
        <h4>Some Things I've Built</h4>
        <div className="project">
          <div className="text-container">
            <div className="description">
              <h5>Travel Website</h5>
              <p>
                A simple and elegant website built for a travel company using
                React, CSS, Javascript. Includes animations and a functional
                contact form linked to an email service. Deployed and hosted on
                AWS.
              </p>
            </div>
            <ul>
              <li>React</li>
              <li>AWS</li>
              <li>Javascript</li>
              <li>CSS</li>
              <li>SEO</li>
            </ul>
            <div className="project-links">
              <a
                href="https://main.d2key1rylg1wz4.amplifyapp.com/"
                target="_blank"
              >
                {<FaExternalLinkAlt className="icon" />}
              </a>
            </div>
          </div>
          <div className="project-image">
            <img src={travel} alt="" />
          </div>
        </div>
        <div className="project-reverse">
          <div className="text-container-reverse">
            <div className="description-reverse">
              <h5>Social Recipe Application</h5>
              <p>
                This was a personal project where I took all of my family
                recipes from word docs, then processed and uploaded to a
                database. <br />
                <br />A fully functional recipe application. Add, edit, like,
                favorite and comment on recipes. Complete with user
                authentication and a profile page to track all your recipes and
                activity on the platform. Uploaded images are converted to Webp
                on the backend for optimization.
              </p>
            </div>
            <ul>
              <li>React</li>
              <li>Firebase</li>
              <li>Vercel</li>
              <li>Javascript</li>
              <li>CSS</li>
            </ul>
            <div className="project-links-reverse">
              <a href="https://joans-kitchen.vercel.app/" target="_blank">
                {<FaExternalLinkAlt className="icon" />}
              </a>
            </div>
          </div>
          <div className="project-image-reverse">
            <img src={kitchen} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
