import React, { useContext } from "react";
import "./Card.css";
import { themeContext } from "../../Context";

const Card = ({ title, description, img, link, code, alt }) => {
  const { darkMode } = useContext(themeContext);
  return (
    <div className="card">
      <h1>{title}</h1>
      <p className={`${darkMode ? "darkMode" : null}`}>{description}</p>
      <div className="imgBox">
        <img className="prjImage" src={img} alt={alt} />
      </div>
      <div className="btn-container">
        <a
          className="project-btn live-link"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          Live
        </a>
        {code ? (
          <a
            className="project-btn code-link"
            target="_blank"
            rel="noopener noreferrer"
            href={code}
          >
            <i className="fab fa-github" /> Code
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
