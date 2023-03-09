import travel from "../assets/travel-full-site.png";
import kitchen from "../assets/joans-kitchen-full-site.png";
import wedding from "../assets/wedding-planner-full-site.png";
import lifeCoach from "../assets/life-coach-full-site.jpg";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <section className="projects-container">
        <h2 className="heading projects-section-header">
          Projects
          <div className="overlay"></div>
        </h2>

        <div className="project-card-container">
          <ProjectCard
            image={lifeCoach}
            title="Personal Brand Website"
            description="A stunning custom designed website for a personal brand/life coach"
            tools={["React", "Javascript", "CSS", "SEO", "Styled Components"]}
            siteLink="https://life-coach-ten.vercel.app/"
          />

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
          and comment on recipes. Implemented Algolia for global search functionality. Complete with user authentication and a
          profile page to track all your recipes and activity on the
          platform.
          Uploaded images are converted to Webp on the backend for
          optimization. I used old family recipes from word docs, then
          processed and uploaded to a database."
            tools={[
              "React",
              "Firebase",
              "Javascript",
              "Algolia",
              "CSS",
              "Vercel",
            ]}
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
