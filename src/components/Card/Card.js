import React from 'react';
import './Card.css';

const Card = ({ title, description, img, link, code, alt}) => {
	return (
		<div className="card">
<h1>{title}</h1>
	<p>{description}</p>
			<div className="imgBox">
				<img className="prjImage" src={img} alt={alt} />
			</div>
			<div className="btn-container">
            <a className="project-btn live-link" target="_blank" rel="noopener noreferrer" href={link}>live</a>
			<a className="project-btn code-link" target="_blank" rel="noopener noreferrer" href={code}>
				<i className="fab fa-github" /> Code
			</a>
            </div>
		</div>
	);
};

export default Card;
