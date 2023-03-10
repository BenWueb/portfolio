import travel from "../assets/travel-full-site.png";
import kitchen from "../assets/joans-kitchen-full-site.png";
import wedding from "../assets/wedding-planner-full-site.png";
import lifeCoach from "../assets/life-coach-full-site.jpg";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <section className="projects-container" id="projects">
        <h2 className="heading projects-section-header">
          Projects
          <div className="overlay"></div>
        </h2>

        <div className="project-card-container">
          <ProjectCard
            image={lifeCoach}
            title="Personal Brand Website"
            description="A custom designed website for a personal brand/life coach"
            tools={["React", "Javascript", "CSS", "SEO", "Styled Components"]}
            siteLink="https://life-coach-ten.vercel.app/"
          />

          <ProjectCard
            image={travel}
            title="Travel Company Website"
            description="A minimal website built for a travel company."
            tools={["React", "AWS", "Javascript", "CSS", "SEO"]}
            siteLink="https://main.d2key1rylg1wz4.amplifyapp.com/"
          />

          <ProjectCard
            image={kitchen}
            title="Social Recipe Application"
            description="A fully functional social recipe application. Add, edit, like, favorite
          and comment on recipes."
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
