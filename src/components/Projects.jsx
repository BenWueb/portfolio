import travel from "../assets/travel-full-site.png";
import kitchen from "../assets/joans-kitchen-full-site.png";
import wedding from "../assets/wedding-planner-full-site.png";
import lifeCoach from "../assets/life-coach-full-site.jpg";
import devBlog from "../assets/Dev-Blog-fullsite.png";
import houseMarket from "../assets/House-Marketplace-fullsite.png";
import gifPortal from "../assets/My-GIF-Portal-fullsite.png";
import ticket from "../assets/React-Redux-App-fullsite.png";
import lukewarm from "../assets/Lukewarm-fullsite.png";
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
            image={kitchen}
            title="Social Recipe Application"
            description="A fully functional social recipe application. Add, edit, like, favorite
                    and comment on recipes."
            tools={[
              "React",
              "Firebase",
              "Javascript",
              "OAuth",
              "Algolia",
              "CSS",
              "Vercel",
            ]}
            siteLink="https://joans-kitchen.vercel.app/"
            gitLink="https://github.com/BenWueb/Joans-Kitchen"
          />

          <ProjectCard
            image={lifeCoach}
            title="Personal Brand Website"
            description="A custom designed website for a personal brand/life coach"
            tools={["React", "Javascript", "CSS", "SEO", "Styled Components"]}
            siteLink="https://life-coach-ten.vercel.app/"
            gitLink="https://github.com/BenWueb/life-coach"
          />

          <ProjectCard
            image={gifPortal}
            title="GIF Portal on Solana"
            description="A GIF uploader built on the Solana blockchain using Anchor framework"
            tools={[
              "React",
              "Javascript",
              "Solana",
              "Anchor Framework",
              "Phantom wallet",
            ]}
            gitLink="https://github.com/BenWueb/gif-portal-starter"
          />

          <ProjectCard
            image={ticket}
            title="Support Ticket App"
            description="A support ticket application built using the MERN stack"
            tools={[
              "React",
              "Javascript",
              "Redux",
              "MongoDB",
              "Express",
              "Axios",
              "JWT",
              "Bcrypt",
            ]}
            siteLink=""
            gitLink="https://github.com/BenWueb/support-desk-app"
          />

          <ProjectCard
            image={lukewarm}
            title="Ecommerce Site for a Vintage Brand"
            description="An Ecommerce platform built for a local vintage brand. Includes an admin panel to access CMS and edit content"
            tools={[
              "React",
              "Javascript",
              "Google Firebase",
              "Google Maps",
              "Stripe",
            ]}
            siteLink=""
            gitLink="https://github.com/BenWueb/Lukewarm"
          />

          <ProjectCard
            image={travel}
            title="Travel Company Website"
            description="A minimal website built for a travel company."
            tools={["React", "AWS", "Javascript", "CSS", "SEO"]}
            siteLink="https://main.d2key1rylg1wz4.amplifyapp.com/"
            gitLink="https://github.com/BenWueb/Travel"
          />

          <ProjectCard
            image={wedding}
            title="Wedding Planner Website"
            description="  A professional and elegant website built for a wedding planning
          company."
            tools={["React", "Styled Components", "Javascript", "CSS", "SEO"]}
            siteLink="https://wedding-planner-six.vercel.app/"
            gitLink="https://github.com/BenWueb/wedding-planner"
          />

          <ProjectCard
            image={devBlog}
            title="Blogging Website"
            description="A simple blog website"
            tools={["NextJS", "Javascript", "CSS", "Markdown"]}
            siteLink="https://nextjs-blog-delta-six-81.vercel.app/"
          />

          <ProjectCard
            image={houseMarket}
            title="House Marketplace"
            description="A marketplace to buy or rent homes"
            tools={[
              "React",
              "Javascript",
              "Google Firebase",
              "Google Maps",
              "CSS",
            ]}
            siteLink="https://house-marketplace-theta-weld.vercel.app/"
          />
        </div>
      </section>
    </>
  );
}
export default Projects;
