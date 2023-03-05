import travel from "../assets/Travel screenshot.webp";
import kitchen from "../assets/Joans Kitchen Screenshot.webp";
import wedding from "../assets/wedding planner.webp";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <>
      <section className="projects-container" id="projects">
        <h2>Some Things I've Built</h2>
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
                A fully functional recipe application. Add, edit, like, favorite
                and comment on recipes. Complete with user authentication and a
                profile page to track all your recipes and activity on the
                platform.
                <br />
                <br />
                Uploaded images are converted to Webp on the backend for
                optimization. I used old family recipes from word docs, then
                processed and uploaded to a database.
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
        <div className="project">
          <div className="text-container">
            <div className="description">
              <h5>Wedding Planner Website</h5>
              <p>
                A professional and elegant website built for a wedding planning
                company.
              </p>
            </div>
            <ul>
              <li>React</li>
              <li>Styled Components</li>
              <li>Javascript</li>
              <li>CSS</li>
              <li>SEO</li>
            </ul>
            <div className="project-links">
              <a href="https://wedding-planner-six.vercel.app/" target="_blank">
                {<FaExternalLinkAlt className="icon" />}
              </a>
            </div>
          </div>
          <div className="project-image">
            <img src={wedding} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
