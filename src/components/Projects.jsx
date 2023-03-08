import travel from "../assets/Travel screenshot.webp";
import kitchen from "../assets/Joans Kitchen Screenshot.webp";
import wedding from "../assets/wedding planner.webp";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <section className="projects-container" id="projects">
        <h2>Some Things I've Built</h2>

        <div className="project-card-container">
          <ProjectCard
            image={travel}
            title="Travel Company Website"
            description="A simple and elegant website built for a travel company using
                React, CSS, Javascript. Includes animations and a functional
                contact form linked to an email service. Deployed and hosted on
                AWS."
            tools={["React", "AWS", "Javascript", "CSS", "SEO"]}
            siteLink="https://main.d2key1rylg1wz4.amplifyapp.com/"
          />

          <ProjectCard
            image={kitchen}
            title="Social Recipe Application"
            description="A fully functional recipe application. Add, edit, like, favorite
          and comment on recipes. Complete with user authentication and a
          profile page to track all your recipes and activity on the
          platform.
          Uploaded images are converted to Webp on the backend for
          optimization. I used old family recipes from word docs, then
          processed and uploaded to a database."
            tools={["React", "Firebase", "Javascript", "CSS", "Vercel"]}
            siteLink="https://joans-kitchen.vercel.app/"
          />

          <ProjectCard
            image={wedding}
            title="Wedding Planner Website"
            description="  A professional and elegant website built for a wedding planning
          company."
            tools={["React", "Styled Components", "Javascript", "CSS", "SEO"]}
            siteLink="https://wedding-planner-six.vercel.app/"
          />
        </div>
      </section>
    </>
  );
}
export default Projects;
