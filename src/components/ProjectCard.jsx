import { FaExternalLinkAlt } from "react-icons/fa";
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
          <button className="card-btn">Read more</button>
          <div className="card-links">
            <a href={siteLink} target="_blank">
              <FaExternalLinkAlt className="icon card-icon" />
            </a>

            {gitLink && (
              <Link to={gitLink}>
                <FaExternalLinkAlt className="icon" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
