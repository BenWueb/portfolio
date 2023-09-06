import React from "react";
import search from "../assets/joans-kitchen-search.png";
import add from "../assets/joans-kitchen-add.png";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function HighlightCard({
  title,
  description,
  tools,
  image,
  siteLink,
  gitLink,
  link,
}) {
  return (
    <div>
      <div className="hl-card">
        <div
          className="hl-image"
          style={{ backgroundImage: `url(${search})` }}
        ></div>
        <div
          className="hl-image-2"
          style={{ backgroundImage: `url(${add})` }}
        ></div>
        <div className="hl-card-text-container">
          <h3>{title}</h3>
          <div className="hl-card-tools">
            {tools.map((tool) => (
              <p>{tool}</p>
            ))}
          </div>
          <p className="hl-desc">{description}</p>

          <div className="hl-button-container">
            <button className="hl-card-btn">
              <Link className="project-link" to={link}>
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
        <div
          className="hl-image-container"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* <img className="hl-image" src={search} alt="" />
          <img className="hl-image-2" src={add} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default HighlightCard;
