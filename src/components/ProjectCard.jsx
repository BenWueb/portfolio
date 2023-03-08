import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProjectCard({ image, title, description, tools, siteLink, gitLink }) {
  return (
    <>
      <div className="card">
        <div className="cardImage">
          <img src={image} alt="" />
        </div>
        <div className="card-text">
          <h5>{title}</h5>
          <p>{description}...</p>
          <div className="card-tools">
            {tools.map((tool) => (
              <p>{tool}</p>
            ))}
          </div>
          <a href={siteLink} target="_blank">
            <FaExternalLinkAlt className="icon" />
          </a>

          {gitLink && (
            <Link to={gitLink}>
              <FaExternalLinkAlt className="icon" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
