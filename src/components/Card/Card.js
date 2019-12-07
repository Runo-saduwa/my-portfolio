import React from 'react';
import './Card.css';
import prj from '../../images/akumlate.png';

const Card = ({ title, description, img }) => {
	return (
		<div className="card">
			<h1>CGPA Calculator</h1>
			<p>a cgpa Calculator to calculate students cgpa</p>
			<div className="imgBox">
				<img className="prjImage" src="https://res.cloudinary.com/daaubcml6/image/upload/e_sharpen:100,q_auto:best/v1575654576/smartmockups_k3uf35s1_ee4qj4.png" alt="project" />
			</div>
			<div className="btn-container">
            <a className="project-btn live-link" href="#live">live</a>
			<a className="project-btn code-link" href="#code">
				<i className="fab fa-github" /> Code
			</a>
            </div>
		</div>
	);
};

export default Card;
