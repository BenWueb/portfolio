import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProjectCard({ image, title, description, tools, siteLink, gitLink }) {
  return (
    <>
      <div className="card" style={{ backgroundImage: `url(${image})` }}>
        <div className="card-text">
          <h5>{title}</h5>
          <div className="card-tools">
            {tools.map((tool) => (
              <p>{tool}</p>
            ))}
          </div>
          <p>{description}</p>

          <button className="card-btn">
            <Link
              className="project-link"
              to={`/article/${title.toLowerCase().replaceAll(" ", "_")}`}
            >
              Read more{" "}
            </Link>
          </button>
          <div className="card-links">
            {siteLink && (
              <a href={siteLink} target="_blank">
                <FaExternalLinkAlt className="icon card-icon" />
              </a>
            )}

            {gitLink && (
              <a href={gitLink} target="_blank">
                <FaGithub className="icon card-icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
